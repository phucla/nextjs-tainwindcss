const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
    },
    height: {
      12: "48px",
      xl: "725px",
      x: "500px",
    },
    maxWidth: {
      "3-xl": "720px",
    },
    zIndex: {
      1: 1,
      2: 2,
      10: 10,
    },
    lineHeight: {
      96: "96px",
      6: "22px",
      54: "54px",
      48: "48px",
    },
    borderRadius: {
      custom: "30% 70% 59% 41%/30% 38% 62% 70%",
      md: "15px",
      50: "50%",
      4: "4px",
      10: "10px",
      "r-xl": "0 10px 10px 0",
      "r-yl": "10px 0 0 10px",
    },
    boxShadow: {
      custom: "0 0 15px rgb(0, 0, 0,10%)",
      team: "0 0 15px rgb(0, 0, 0, 20%)",
    },
  },
  variants: {
    variants: {
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "group-hover",
        "group-focus",
      ],
      textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        ".content": {
          ..."attr(data-content)",
        },
        ".content-style": {
          ...["attr(content-style)"],
        },
        ".content-before": {
          content: "attr(data-before)",
        },
        ".content-after": {
          content: "attr(data-after)",
        },
      };

      addUtilities(contentUtilities, ["before", "after"]);
    }),
  ],
};
