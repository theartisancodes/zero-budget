/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        'primary-gradient': 'linear-gradient(to right, #1051B2FF, #1e88e5)'
      },
      colors: {
        primary: {
          light: '#64b5f6',
          DEFAULT: '#1e88e5',
          dark: '#1565c0',
          darker: '#1051B2FF'
        },

        secondary: {
          light: '#ffb74d',
          DEFAULT: '#ff9800',
          dark: '#f57c00'
        },

        error: {
          light: '#ef5350',
          DEFAULT: '#d32f2f',
          dark: '#c62828'
        },

        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#f57c00'
        },

        info: {
          light: '#4fc3f7',
          DEFAULT: '#29b6f6',
          dark: '#0288d1'
        },

        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c'
        },

        neutral: {
          white: '#ffffff',
          lighter: '#a1a6a9',
          light: '#f5f5f5',
          DEFAULT: '#9e9e9e',
          dark: '#132128'
        },

        base: {
          dark: '#344767',
          DEFAULT: '#f9fafb'
        }
      },

      fontFamily: {
        sans: ['Graphik', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        pangram: ['Pangram', 'sans-serif']
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
