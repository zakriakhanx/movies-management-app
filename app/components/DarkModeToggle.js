import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  // Declare a state variable to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode on and off
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Add or remove the 'dark' class on the HTML element based on the updated state
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full dark:bg-gray-700 bg-gray-500"
    >
      {/* Render the SunIcon if dark mode is enabled, otherwise render the MoonIcon */}
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
}
