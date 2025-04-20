/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gradient: "var(--gradient)",
        particles: "var(--particles)",
        gradientOpacity: "var(--gradient-opacity)", 
        dotsOpacity: "var(--dots-opacity)",  
      },
      keyframes: {
        float: {
         '0%': {
        transform: 'translateY(100%)',
        opacity: '0',
      },
      '10%': {
        opacity: '0.4',
      },
      '50%': {
        opacity: '0.8',
      },
      '90%': {
        opacity: '0.3',
      },
      '100%': {
        transform: 'translateY(-100%)',
        opacity: '0',
      },
        },
      },
      animation: {
        float: 'float linear infinite',
      },
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        // Default theme (Gold + Dark)
        ':root': {
          '--background': '#0e100f',
          '--text': '#fffce1',
          '--primary': '#FFD700',
          '--secondary': '#ffc302',
          '--gradient': '#d7ab19',
          '--particles': '#ffc302',
          '--gradient-opacity': '0.3',  
          '--dots-opacity': '0.1',  
        },

        // Light Mode Gold
        '.light.theme-gold': {
          '--primary': '#D4A017',
          '--secondary': '#E6B422',
          '--gradient': '#B8860B',
          '--particles': '#E6B422',
          '--background': '#faf8f3',
          '--text': '#0e100f',
          '--gradient-opacity': '0.3', 
          '--dots-opacity': '0.1',
        },
        '.light.theme-red': {
          '--primary': '#A51C30',
          '--secondary': '#D44D6E',
          '--gradient': '#C27E8E',
          '--particles': '#D44D6E',
          '--background': '#fff5f5',
          '--text': '#0e100f',
          '--gradient-opacity': '0.3',
          '--dots-opacity': '0.1',
        },
        '.light.theme-violet': {
          '--primary': '#5E17EB',
          '--secondary': '#8A5AFF',
          '--gradient': '#B399FF',
          '--particles': '#8A5AFF',
          '--background': '#f8f5ff',
          '--text': '#0e100f',
          '--gradient-opacity': '0.3',
          '--dots-opacity': '0.1',
        },

        // Dark Mode Overrides
        '.dark.theme-gold': {
          '--primary': '#FFD700',
          '--secondary': '#ffc302',
          '--gradient': '#d7ab19',
          '--particles': '#ffc302',
          '--background': '#0e100f',
          '--text': '#fffce1',
          '--gradient-opacity': '0.2',
          '--dots-opacity': '0.1',
        },
        '.dark.theme-red': {
          '--primary': '#C1272D',
          '--secondary': '#E94F64',
          '--gradient': '#8A2A2B',
          '--particles': '#E94F64',
          '--background': '#0e100f',
          '--text': '#fff5f5',
          '--gradient-opacity': '0.3',  
          '--dots-opacity': '0.2',  
        },
        '.dark.theme-violet': {
          '--primary': '#6A0DAD',
          '--secondary': '#9D4EDD',
          '--gradient': '#4B0082',
          '--particles': '#9D4EDD',
          '--background': '#0e100f',
          '--text': '#f3e9ff',
          '--gradient-opacity': '0.3',  
          '--dots-opacity': '0.2',  
        }
      });
    }),
  ],
};
