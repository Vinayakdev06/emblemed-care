/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10B981", // Green accent
          dark: "#0b6b45", // Darker variant
          light: "#34d399", // Optional lighter shade
        },
      },

      // 👇 Navbar + Floating Icons Smooth Transition
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // smooth ease animation
      },

      // 👇 Bounce animation for ContactFloat icons
      keyframes: {
        "bounce-in": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "60%": { transform: "translateY(-10px)", opacity: "1" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 1s ease-out both",
      },

      // 👇 Optional subtle shadow for brand consistency
      boxShadow: {
        brand: "0 4px 12px rgba(16, 185, 129, 0.3)",
      },
    },
  },
  plugins: [],
};
