/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10B981", // main brand green
          dark: "#0b6b45", // darker shade
          light: "#34d399", // lighter accent
          bg: "#f0fdf4", // very light green background for sections
        },
        text: {
          primary: "#1f2937", // gray-800
          secondary: "#4b5563", // gray-600
        },
      },

      // 🌈 Smooth transitions for hover and motion effects
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },

      // ✨ Subtle shadow styles for a professional feel
      boxShadow: {
        brand: "0 4px 12px rgba(16, 185, 129, 0.25)",
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
        card: "0 3px 10px rgba(0, 0, 0, 0.05)",
      },

      // 🌟 Animations for smooth entry and floating icons
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
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 1s ease-out both",
        "float-slow": "float-slow 3s ease-in-out infinite",
      },

      // 🔠 Slightly refined typography scaling
      fontSize: {
        "2xs": "0.7rem",
        xs: "0.8rem",
        sm: "0.9rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
