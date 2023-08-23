/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"]
      },
      colors: {
        "primary-color": "var(--text-primary)",
        "secondary-color": "var(--text-secondary)",
        "txt-gray": "var(--text-gray)",
        "background-white": "var(--background)",
        "accent": "var(--accent)",
        "menu-item-hover": "var(--menu-item-hover)",
        "btn-dark": "var(--btn-dark)",
        "btn-light": "var(--btn-light)",
      },

      keyframes: {
        animUp: {
          '0%': {
            transform: "translateY(2rem)",
            opacity: 0,
          },
          '100%': {
            transform: "translateY(0rem)",
            opacity: 1,
          },
        },
        animToRight: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            transform: "translateX(-2rem)",
            opacity: 0,
          },
          '100%': {
            transform: "translateX(0rem)",
            opacity: 1,
          },
        },

        animDown: {
          '0%': {
            opacity: 0,
          },
          '70%': {
            transform: "translateY(-1rem)",
            opacity: 0,
          },
          '100%': {
            transform: "translateY(0rem)",
            opacity: 1,
          },
        },

        animToLeft: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            transform: "translateX(2rem)",
            opacity: 0,
          },
          '100%': {
            transform: "translateX(0rem)",
            opacity: 1,
          },
        }

      },
      animation: {
        'anim-right': 'animToRight 1.6s ease-in-out',
        'anim-left': 'animToLeft 1.6s ease-in-out',
        'anim-up': 'animUp 0.8s ease-in-out',
        'anim-down': 'animDown 2.4s ease-in-out, bounce 1s infinite',
      },

    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ]
}
