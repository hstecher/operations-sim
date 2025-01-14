import pygame
import random
import math

# Initialize Pygame
pygame.init()

# Constants
WINDOW_WIDTH = 1200
WINDOW_HEIGHT = 1200  # Increased from 800 to 1200 to show all panels
STAR_COUNT = 200
TELESCOPE_FOV = 5  # Reduced from 30 to 5 degrees for narrower field
ACQUISITION_FOV = 120  # Wide field of view in degrees
SHWFS_SIZE = 500  # Changed to match other panels
LENSLET_COUNT = 2  # Number of lenslets in each dimension
SPOT_DEVIATION_MAX = 5  # Maximum pixel deviation for spots
SIDEREAL_RATE = (360.0 / (24 * 60 * 60)) * 200  # Reduced from 1000x to 200x for slower motion
YELLOW = (255, 255, 0)
BUTTON_HEIGHT = 32
BUTTON_WIDTH = 80

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
GRAY = (128, 128, 128)

# Set up the display
screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Telescope Simulator")

class CelestialObject:
    def __init__(self, ra, dec, magnitude):
        self.ra = ra
        self.dec = dec
        self.magnitude = magnitude
    
    def get_screen_position(self, center_ra, center_dec, fov, panel_rect, is_lenslet=False):
        # Handle RA wrap-around
        ra_diff = (self.ra - center_ra)
        if ra_diff > 180:
            ra_diff -= 360
        elif ra_diff < -180:
            ra_diff += 360
            
        dec_diff = self.dec - center_dec
        
        if is_lenslet:
            x = panel_rect.left + ((ra_diff + fov/2) / fov) * panel_rect.width
            y = panel_rect.top + ((-dec_diff + fov/2) / fov) * panel_rect.height
        else:
            x = panel_rect.centerx + (ra_diff / fov) * panel_rect.width
            y = panel_rect.centery - (dec_diff / fov) * panel_rect.height
        
        return (x, y)
    
    def draw(self, screen, pos, scale=1.0):
        pass
    
    def update(self, elapsed_seconds):
        pass

class Star(CelestialObject):
    def __init__(self):
        ra = random.uniform(0, 360)
        dec = random.uniform(-90, 90)
        magnitude = random.uniform(1, 6)
        super().__init__(ra, dec, magnitude)
    
    def draw(self, screen, pos, scale=1.0):
        radius = max(1, int((4 - self.magnitude) * scale))
        pygame.draw.circle(screen, WHITE, (int(pos[0]), int(pos[1])), radius)

class Planet(CelestialObject):
    PLANET_COLORS = {
        'Mars': (255, 100, 0),
        'Jupiter': (255, 200, 100),
        'Saturn': (255, 220, 150),
        'Venus': (255, 255, 200)
    }
    
    def __init__(self, name, ra, dec):
        self.name = name
        self.color = self.PLANET_COLORS[name]
        self.moons = []
        self.orbit_speed = random.uniform(0.1, 0.5)  # degrees per second
        magnitude = random.uniform(0, 2)  # Planets are typically brighter
        super().__init__(ra, dec, magnitude)
        
        # Add moons
        num_moons = random.randint(1, 4)
        for _ in range(num_moons):
            self.moons.append(Moon(self))
    
    def draw(self, screen, pos, panel_rect, fov, scale=1.0):
        # Draw planet
        radius = max(2, int((6 - self.magnitude) * scale))
        pygame.draw.circle(screen, self.color, (int(pos[0]), int(pos[1])), radius)
        
        # Draw moons
        for moon in self.moons:
            moon.draw(screen, pos, panel_rect, fov, scale)
    
    def update(self, elapsed_seconds):
        # Update moons
        for moon in self.moons:
            moon.update(elapsed_seconds)

class Moon(CelestialObject):
    def __init__(self, planet):
        self.planet = planet
        self.base_orbit_radius = random.uniform(2, 4)  # Base radius in degrees
        self.orbit_angle = random.uniform(0, 360)
        self.orbit_speed = random.uniform(1, 3)  # degrees per second
        magnitude = random.uniform(3, 5)
        super().__init__(planet.ra, planet.dec, magnitude)
    
    def get_position(self, planet_pos, panel_rect, fov):
        # Scale orbit radius based on FOV and panel size
        orbit_radius = (self.base_orbit_radius / fov) * panel_rect.width
        x = planet_pos[0] + orbit_radius * math.cos(math.radians(self.orbit_angle))
        y = planet_pos[1] + orbit_radius * math.sin(math.radians(self.orbit_angle))
        return (x, y)
    
    def draw(self, screen, planet_pos, panel_rect, fov, scale=1.0):
        moon_pos = self.get_position(planet_pos, panel_rect, fov)
        radius = max(1, int((3 - self.magnitude) * scale))
        pygame.draw.circle(screen, WHITE, (int(moon_pos[0]), int(moon_pos[1])), radius)
    
    def update(self, elapsed_seconds):
        self.orbit_angle = (self.orbit_angle + self.orbit_speed * elapsed_seconds) % 360

class TextInput:
    def __init__(self, x, y, width, label, is_ra=False):
        self.rect = pygame.Rect(x, y, width, 32)
        self.text = ''
        self.active = False
        self.label = label
        self.is_ra = is_ra
        
    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            self.active = self.rect.collidepoint(event.pos)
        elif event.type == pygame.KEYDOWN and self.active:
            if event.key == pygame.K_RETURN:
                self.active = False
            elif event.key == pygame.K_BACKSPACE:
                self.text = self.text[:-1]
            else:
                self.text += event.unicode
        return False
    
    def draw(self, screen, font):
        # Draw label
        label_surface = font.render(self.label, True, GRAY)
        screen.blit(label_surface, (self.rect.x, self.rect.y - 20))
        
        # Draw input box
        color = YELLOW if self.active else WHITE
        pygame.draw.rect(screen, color, self.rect, 2)
        
        # Draw text
        text_surface = font.render(self.text, True, WHITE)
        screen.blit(text_surface, (self.rect.x + 5, self.rect.y + 5))

class Button:
    def __init__(self, x, y, width, height, text):
        self.rect = pygame.Rect(x, y, width, height)
        self.text = text
        self.clicked = False
        
    def draw(self, screen, font):
        color = YELLOW if self.clicked else WHITE
        pygame.draw.rect(screen, color, self.rect, 2)
        text_surface = font.render(self.text, True, WHITE)
        text_rect = text_surface.get_rect(center=self.rect.center)
        screen.blit(text_surface, text_rect)
        
    def handle_event(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            if self.rect.collidepoint(event.pos):
                self.clicked = True
                return True
        return False

class TelescopeSimulator:
    def __init__(self):
        # Create celestial objects
        self.objects = []
        
        # Add stars
        for _ in range(STAR_COUNT):
            self.objects.append(Star())
        
        # Add planets
        planet_names = ['Mars', 'Jupiter', 'Saturn', 'Venus']
        for name in planet_names:
            ra = random.uniform(0, 360)
            dec = random.uniform(-60, 60)  # Keep planets near ecliptic
            self.objects.append(Planet(name, ra, dec))
        
        self.telescope_ra = 180  # Starting position
        self.telescope_dec = 0
        self.telescope_panel = pygame.Rect(50, 100, 500, 500)
        self.acquisition_panel = pygame.Rect(600, 100, 500, 500)
        self.shwfs_panel = pygame.Rect(50, 650, 500, 500)
        self.font = pygame.font.Font(None, 36)
        self.tracking = False
        self.last_update = pygame.time.get_ticks()
        self.ra_input = TextInput(600, 30, 100, "Set RA (HH:MM)", is_ra=True)
        self.dec_input = TextInput(800, 30, 100, "Set Dec (deg)")
        
        # Move input boxes to lower right
        input_x = self.acquisition_panel.left
        input_y = self.acquisition_panel.bottom + 50
        self.ra_input = TextInput(input_x, input_y, 100, "Target RA (HH:MM)", is_ra=True)
        self.dec_input = TextInput(input_x, input_y + 60, 100, "Target Dec (deg)")
        
        # Add slew button
        self.slew_button = Button(input_x + 120, input_y + 30, BUTTON_WIDTH, BUTTON_HEIGHT, "Slew")
        
        # Add target coordinates
        self.target_ra = None
        self.target_dec = None
    
    def get_stars_in_fov(self):
        """Return list of stars currently visible in telescope FOV with their positions"""
        visible_stars = []
        for star in self.objects:
            if isinstance(star, Star):
                pos = star.get_screen_position(self.telescope_ra, self.telescope_dec, 
                                             TELESCOPE_FOV, self.telescope_panel)
                if self.telescope_panel.collidepoint(pos):
                    # Calculate relative position within FOV (0 to 1 range)
                    rel_x = (pos[0] - self.telescope_panel.left) / self.telescope_panel.width
                    rel_y = (pos[1] - self.telescope_panel.top) / self.telescope_panel.height
                    visible_stars.append((rel_x, rel_y, star.magnitude))
        return visible_stars
    
    def draw_shwfs(self, screen):
        # Draw main SHWFS panel border
        pygame.draw.rect(screen, WHITE, self.shwfs_panel, 2)
        
        font = pygame.font.Font(None, 36)
        shwfs_label = font.render("Shack-Hartmann WFS", True, WHITE)
        screen.blit(shwfs_label, (self.shwfs_panel.centerx - 80, self.shwfs_panel.bottom + 10))
        
        lenslet_size = SHWFS_SIZE // LENSLET_COUNT
        
        # Draw grid lines
        for i in range(LENSLET_COUNT + 1):
            pos = self.shwfs_panel.left + i * lenslet_size
            pygame.draw.line(screen, BLUE, 
                           (pos, self.shwfs_panel.top),
                           (pos, self.shwfs_panel.bottom), 1)
            pygame.draw.line(screen, BLUE,
                           (self.shwfs_panel.left, self.shwfs_panel.top + i * lenslet_size),
                           (self.shwfs_panel.right, self.shwfs_panel.top + i * lenslet_size), 1)
        
        # For each lenslet
        for lenslet_x in range(LENSLET_COUNT):
            for lenslet_y in range(LENSLET_COUNT):
                # Define the lenslet viewing area
                lenslet_rect = pygame.Rect(
                    self.shwfs_panel.left + lenslet_x * lenslet_size,
                    self.shwfs_panel.top + lenslet_y * lenslet_size,
                    lenslet_size,
                    lenslet_size
                )
                
                # Draw reference point at center of lenslet
                center_x = lenslet_rect.centerx
                center_y = lenslet_rect.centery
                pygame.draw.circle(screen, RED, (center_x, center_y), 1)
                
                # Draw all objects in this lenslet
                for obj in self.objects:
                    pos = obj.get_screen_position(self.telescope_ra, self.telescope_dec, 
                                              TELESCOPE_FOV, lenslet_rect, True)
                    
                    if lenslet_rect.collidepoint(pos):
                        if isinstance(obj, Planet):
                            obj.draw(screen, pos, lenslet_rect, TELESCOPE_FOV, 0.5)  # Smaller scale for WFS
                        else:
                            obj.draw(screen, pos, 0.5)  # For stars
    
    def draw_coordinates(self, screen):
        # Format current position
        ra_hours = (self.telescope_ra / 15.0)  # Convert degrees to hours
        ra_h = int(ra_hours)
        ra_m = int((ra_hours - ra_h) * 60)
        
        dec_d = int(self.telescope_dec)
        dec_m = int((abs(self.telescope_dec) - abs(dec_d)) * 60)
        dec_sign = "+" if self.telescope_dec >= 0 else "-"
        
        # Create current position strings
        ra_text = f"Current RA: {ra_h:02d}h {ra_m:02d}m"
        dec_text = f"Current Dec: {dec_sign}{abs(dec_d):02d}° {dec_m:02d}'"
        
        # Draw current position
        ra_surface = self.font.render(ra_text, True, GRAY)
        dec_surface = self.font.render(dec_text, True, GRAY)
        screen.blit(ra_surface, (10, 10))
        screen.blit(dec_surface, (200, 10))
        
        # Draw target coordinates if both RA and Dec are set
        if self.target_ra is not None and self.target_dec is not None:
            try:
                # Format target position
                target_ra_hours = (self.target_ra / 15.0)
                target_ra_h = int(target_ra_hours)
                target_ra_m = int((target_ra_hours - target_ra_h) * 60)
                
                target_dec_d = int(self.target_dec)
                target_dec_m = int((abs(self.target_dec) - abs(target_dec_d)) * 60)
                target_dec_sign = "+" if self.target_dec >= 0 else "-"
                
                target_text = f"Target: {target_ra_h:02d}h {target_ra_m:02d}m, {target_dec_sign}{abs(target_dec_d):02d}° {target_dec_m:02d}'"
                target_surface = self.font.render(target_text, True, GRAY)
                screen.blit(target_surface, (self.ra_input.rect.x, self.dec_input.rect.bottom + 20))
            except (TypeError, ValueError):
                # If there's any error in formatting, clear the target coordinates
                self.target_ra = None
                self.target_dec = None
        
        # Add tracking status
        tracking_text = "Tracking: ON" if self.tracking else "Tracking: OFF"
        tracking_surface = self.font.render(tracking_text, True, GRAY)
        screen.blit(tracking_surface, (400, 10))
    
    def draw(self, screen):
        pygame.draw.rect(screen, WHITE, self.telescope_panel, 2)
        pygame.draw.rect(screen, WHITE, self.acquisition_panel, 2)
        
        font = pygame.font.Font(None, 36)
        telescope_label = font.render("Telescope View", True, WHITE)
        acquisition_label = font.render("Acquisition Camera", True, WHITE)
        screen.blit(telescope_label, (self.telescope_panel.centerx - 80, self.telescope_panel.bottom + 10))
        screen.blit(acquisition_label, (self.acquisition_panel.centerx - 80, self.acquisition_panel.bottom + 10))
        
        # Draw objects in telescope view
        for obj in self.objects:
            pos = obj.get_screen_position(self.telescope_ra, self.telescope_dec, 
                                      TELESCOPE_FOV, self.telescope_panel)
            if self.telescope_panel.collidepoint(pos):
                if isinstance(obj, Planet):
                    obj.draw(screen, pos, self.telescope_panel, TELESCOPE_FOV, 1.0)
                else:
                    obj.draw(screen, pos, 1.0)
        
        # Draw objects in acquisition view
        for obj in self.objects:
            pos = obj.get_screen_position(self.telescope_ra, self.telescope_dec, 
                                      ACQUISITION_FOV, self.acquisition_panel)
            if self.acquisition_panel.collidepoint(pos):
                if isinstance(obj, Planet):
                    obj.draw(screen, pos, self.acquisition_panel, ACQUISITION_FOV, 0.75)
                else:
                    obj.draw(screen, pos, 0.75)
        
        for panel in [self.telescope_panel, self.acquisition_panel]:
            pygame.draw.line(screen, RED, 
                           (panel.centerx - 10, panel.centery),
                           (panel.centerx + 10, panel.centery), 1)
            pygame.draw.line(screen, RED,
                           (panel.centerx, panel.centery - 10),
                           (panel.centerx, panel.centery + 10), 1)
        
        self.draw_shwfs(screen)
        
        # Add coordinate display
        self.draw_coordinates(screen)
        
        # Draw input boxes
        self.ra_input.draw(screen, self.font)
        self.dec_input.draw(screen, self.font)
        self.slew_button.draw(screen, self.font)
        
        # Draw target coordinates if set
        if self.target_ra is not None:
            target_text = f"Target: {self.target_ra:.1f}°, {self.target_dec:.1f}°"
            target_surface = self.font.render(target_text, True, GRAY)
            screen.blit(target_surface, (self.ra_input.rect.x, self.dec_input.rect.bottom + 20))

    def handle_input(self):
        keys = pygame.key.get_pressed()
        movement_speed = 1
        
        # Handle events for text inputs and button
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                self.tracking = not self.tracking
            
            # Handle text input events
            self.ra_input.handle_event(event)
            self.dec_input.handle_event(event)
            
            # Handle slew button
            if self.slew_button.handle_event(event):
                try:
                    # Process RA input
                    if ':' in self.ra_input.text:
                        hours, minutes = map(float, self.ra_input.text.split(':'))
                        if 0 <= hours < 24 and 0 <= minutes < 60:
                            self.target_ra = (hours + minutes/60.0) * 15.0
                    else:
                        new_ra = float(self.ra_input.text)
                        if 0 <= new_ra < 360:
                            self.target_ra = new_ra
                            
                    # Process Dec input
                    new_dec = float(self.dec_input.text)
                    if -90 <= new_dec <= 90:
                        self.target_dec = new_dec
                        
                    # If both inputs are valid, slew to position
                    self.telescope_ra = self.target_ra
                    self.telescope_dec = self.target_dec
                    self.tracking = True
                except (ValueError, TypeError):
                    pass  # Invalid input, ignore slew
                
                self.slew_button.clicked = False
        
        if not self.tracking:  # Only allow manual control when not tracking
            if keys[pygame.K_LEFT]:
                self.telescope_ra = (self.telescope_ra - movement_speed) % 360
            if keys[pygame.K_RIGHT]:
                self.telescope_ra = (self.telescope_ra + movement_speed) % 360
            if keys[pygame.K_UP]:
                self.telescope_dec = min(90, self.telescope_dec + movement_speed)
            if keys[pygame.K_DOWN]:
                self.telescope_dec = max(-90, self.telescope_dec - movement_speed)
        return True
    
    def update_earth_rotation(self):
        current_time = pygame.time.get_ticks()
        elapsed_seconds = (current_time - self.last_update) / 1000.0
        
        # Update RA based on Earth's rotation
        if not self.tracking:
            rotation = SIDEREAL_RATE * elapsed_seconds
            self.telescope_ra = (self.telescope_ra + rotation) % 360
        
        # Update all objects
        for obj in self.objects:
            obj.update(elapsed_seconds)
        
        self.last_update = current_time

def main():
    clock = pygame.time.Clock()
    simulator = TelescopeSimulator()
    running = True
    
    while running:
        running = simulator.handle_input()
        simulator.update_earth_rotation()
        
        # Clear screen
        screen.fill(BLACK)
        
        # Draw simulation
        simulator.draw(screen)
        
        # Update display
        pygame.display.flip()
        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main() 