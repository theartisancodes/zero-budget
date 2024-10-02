/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // Extending the default theme
    extend: {
      // Custom Color Palette
      colors: {
        // Primary color for main interface elements
        primary: {
          light: '#64b5f6', // Light shade for hover or lighter areas
          DEFAULT: '#1e88e5', // Main color
          dark: '#1565c0' // Dark shade for contrast or active states
        },

        // Secondary color for less prominent elements
        secondary: {
          light: '#ffb74d',
          DEFAULT: '#ff9800',
          dark: '#f57c00'
        },

        // Error color for alerts, validations, etc.
        error: {
          light: '#ef5350',
          DEFAULT: '#d32f2f',
          dark: '#c62828'
        },

        // Warning color for alerts or warnings
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#f57c00'
        },

        // Info color for informational elements
        info: {
          light: '#4fc3f7',
          DEFAULT: '#29b6f6',
          dark: '#0288d1'
        },

        // Success color for successful actions
        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c'
        },

        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#9e9e9e',
          dark: '#616161'
        }
      },

      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace']
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem'
      },

      // Custom Breakpoints
      screens: {
        xs: '475px'
      },

      // Custom Shadows
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.6)'
      },

      // Custom Transition and Animation (if needed)
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.25, 1, 0.5, 1)'
      }
    }
  },

  // Tailwind Plugins for Enhanced Functionality
  plugins: [
    require('@tailwindcss/typography'), // For rich text formatting
    require('@tailwindcss/forms'), // Better form styles
    require('@tailwindcss/aspect-ratio') // Aspect ratio utilities
  ]
};
