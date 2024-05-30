/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "external-image": "url('/assets/login.jpg')",
      },
    },
  },
  plugins: [],
};
