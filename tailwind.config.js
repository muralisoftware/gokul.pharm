/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#F0FDF4',
          100: '#E9F7EF', // Requested Mint
          200: '#D1FAE5',
          300: '#A7F3D0',
          400: '#34D399',
          500: '#10B981',
          600: '#16865B', // Requested Main Emerald
          700: '#136F4B',
          800: '#18352C', // Requested Dark Green
          900: '#0F231D',
          950: '#081410',
        },
        pharma: {
          emerald: '#16865B',
          mint: '#E9F7EF',
          dark: '#18352C',
          white: '#FFFFFF',
          slate: '#334155',
          subtle: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pharma': '0 4px 20px -2px rgba(22, 134, 91, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'pharma-hover': '0 12px 30px -4px rgba(22, 134, 91, 0.16), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
