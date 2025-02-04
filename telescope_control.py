from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import re

class TelescopeController:
    def __init__(self, url="http://localhost:8000"):
#    def __init__(self, url="http://35.165.182.225:8000/"):
        """Initialize the telescope controller"""
        self.url = url
        # Initialize Chrome driver
        self.driver = webdriver.Chrome()
        self.driver.get(url)
        # Wait for the interface to load
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "telescope-panel"))
        )
        # Track the state of tracking and guiding
        self.tracking_on = False
        self.guiding_on = False

    def get_current_coordinates(self):
        """Get current telescope coordinates"""
        coords_div = self.driver.find_element(By.ID, "current-coords")
        coords_text = coords_div.text
        # Parse RA and Dec from text like "RA: 12:30 | Dec: +45°00' | FOLLOWING"
        match = re.search(r"RA: (\d+:\d+) \| Dec: ([+-]?\d+)°(\d+)'", coords_text)
        if match:
            ra_str = match.group(1)
            dec_deg = int(match.group(2))
            dec_min = int(match.group(3))
            dec = dec_deg + (dec_min/60.0) * (1 if dec_deg >= 0 else -1)
            
            # Convert RA from HH:MM to decimal degrees
            ra_parts = [int(x) for x in ra_str.split(':')]
            ra = (ra_parts[0] + ra_parts[1]/60.0) * 15  # Convert to degrees
            
            return ra, dec
        return None, None

    def slew_to(self, ra, dec):
        """Slew the telescope to given RA and Dec coordinates and wait for completion"""
        # Turn off tracking and guiding if they are on
        if self.tracking_on:
            self.toggle_tracking()
        if self.guiding_on:
            self.toggle_guiding()
            
        # Input RA
        ra_input = self.driver.find_element(By.ID, "ra-input")
        ra_input.clear()
        ra_input.send_keys(ra)
        
        # Input Dec
        dec_input = self.driver.find_element(By.ID, "dec-input")
        dec_input.clear()
        dec_input.send_keys(str(dec))
        
        # Click slew button
        slew_button = self.driver.find_element(By.ID, "slew-button")
        slew_button.click()

        # Convert target RA from HH:MM to decimal degrees
        ra_parts = [int(x) for x in ra.split(':')]
        target_ra = (ra_parts[0] + ra_parts[1]/60.0) * 15
        target_dec = float(dec)

        # Wait for slew to complete by monitoring coordinates
        print("Waiting for slew to complete...")
        print(f"Target: RA={target_ra:.2f}°, Dec={target_dec:.2f}°")
        
        last_ra, last_dec = None, None
        max_attempts = 300  # 30 seconds timeout
        attempts = 0
        
        # Track the closest we've gotten to the target
        min_ra_diff = float('inf')
        min_dec_diff = float('inf')
        
        while attempts < max_attempts:
            attempts += 1
            current_ra, current_dec = self.get_current_coordinates()
            if current_ra is None or current_dec is None:
                time.sleep(0.1)
                continue

            # Calculate differences
            ra_diff = abs(current_ra - target_ra)
            dec_diff = abs(current_dec - target_dec)
            
            # Update minimum differences seen
            min_ra_diff = min(min_ra_diff, ra_diff)
            min_dec_diff = min(min_dec_diff, dec_diff)

            # Print current position and differences
            print(f"Current: RA={current_ra:.2f}°, Dec={current_dec:.2f}° | Diff: RA={ra_diff:.2f}°, Dec={dec_diff:.2f}°")

            # Check if we've reached the target (within 0.5 degrees)
            if ra_diff < 0.5 and dec_diff < 0.5:
                print("Target reached!")
                break
                
            # If we're getting farther away from our best position, we probably overshot
            if ra_diff > min_ra_diff + 1.0 and dec_diff > min_dec_diff + 1.0:
                print("Detected overshoot - target was reached")
                break

            last_ra, last_dec = current_ra, current_dec
            time.sleep(0.1)
        
        if attempts >= max_attempts:
            print("Warning: Slew timeout reached!")
        else:
            print("Slew complete!")

    def toggle_tracking(self):
        """Toggle tracking on/off"""
        tracking_button = self.driver.find_element(By.ID, "tracking-button")
        tracking_button.click()
        self.tracking_on = not self.tracking_on
        if not self.tracking_on and self.guiding_on:
            self.toggle_guiding()  # Turn off guiding if tracking is turned off

    def toggle_guiding(self):
        """Toggle guiding on/off"""
        guiding_button = self.driver.find_element(By.ID, "guiding-button")
        guiding_button.click()
        self.guiding_on = not self.guiding_on

    def start_exposure(self):
        """Start a new exposure"""
        exposure_button = self.driver.find_element(By.ID, "exposure-button")
        exposure_button.click()

    def save_exposure(self):
        """Save the current exposure"""
        save_button = self.driver.find_element(By.ID, "save-exposure-button")
        save_button.click()

    def close(self):
        """Close the browser and clean up"""
        self.driver.quit()

# Example usage
if __name__ == "__main__":
    # Create controller instance
    telescope = TelescopeController()

    try:
        # Example 1 
        print("Slewing to target...")
        telescope.slew_to("15:38", -13.39)  # RA in HH:MM format, Dec in degrees

        print("Enabling tracking...")
        telescope.toggle_tracking()

        print("Enabling guiding...")
        telescope.toggle_guiding()

        print("Starting exposure...")
        telescope.start_exposure()
        time.sleep(1)  # Wait for exposure to accumulate

        print("Saving exposure...")
        telescope.save_exposure()
        time.sleep(1)  # Wait for save to complete

        # Example 2 
        print("Slewing to target...")
        telescope.slew_to("12:20", 25.20)  # RA in HH:MM format, Dec in degrees

        print("Enabling tracking...")
        telescope.toggle_tracking()

        print("Enabling guiding...")
        telescope.toggle_guiding()

        print("Starting exposure...")
        telescope.start_exposure()
        time.sleep(1)  # Wait for exposure to accumulate

        print("Saving exposure...")
        telescope.save_exposure()
        time.sleep(1)  # Wait for save to complete

    finally:
        # Clean up
        telescope.close() 
