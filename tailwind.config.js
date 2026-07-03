/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: update `content` if you add source folders outside of these globs.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Brand / accent
        accent: "#FF3040", // notification red dot & badges
        link: "#0095F6", // Instagram link blue

        // Surfaces
        bg: "#FFFEFF",
        surface: "#F4F3F5",
        "surface-alt": "#F4F3F5", // light button background
        border: "#DBDBDB",

        // Text
        ink: "#000000", // primary text
        "ink-soft": "#262626", // strong body text
        muted: "#737373", // secondary / labels
        "muted-light": "#8E8E8E",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
