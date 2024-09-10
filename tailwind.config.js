/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1a1237",
          "200": "#171030",
          "300": "#140e2b",
          "400": "#110c24",
          "500": "#0e0a1c",
          "600": "#0c081a",
        },
        midnightblue: {
          "100": "#442e8f",
          "200": "#372674",
          "300": "#23125e",
        },
        white: "#fff",
        blueviolet: {
          "100": "#9747ff",
          "200": "rgba(151, 71, 255, 0.4)",
          "300": "rgba(151, 71, 255, 0.25)",
        },
        yellow: "#deff16",
        darkslategray: "#343434",
        black: "#000",
        mediumpurple: "#c497ff",
        darkslateblue: "#2b2051",
        dimgray: "#717171",
        darkorchid: "rgba(164, 95, 255, 0.45)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "archivo-semiexpanded": "'Archivo SemiExpanded'",
      },
      borderRadius: {
        "39xl": "58px",
        "49xl": "68px",
        "11xl": "30px",
        "3xs": "10px",
        "25xl": "44px",
        "9xl": "28px",
        lg: "18px",
        "34xl": "53px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "1rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      lg: "1.125rem",
      "16xl": "2.188rem",
      "2xl": "1.313rem",
      "9xl": "1.75rem",
      smi: "0.813rem",
      mid: "1.063rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      mini: "0.938rem",
      "3xl": "1.375rem",
      "41xl": "3.75rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
