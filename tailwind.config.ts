import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F8F8F8",

        // Primary
        "primary-P50": "#f5e9f4",
        "primary-P75": "#d6a4d0",
        "primary-P100": "#c47ebc",
        "primary-P200": "#ab46a0",
        "primary-P300": "#9a208c",
        "primary-P400": "#6c1662",
        "primary-P500": "#5e1455",

        //Secondary
        "secondary-V50": "#f1e8f7",
        "secondary-V75": "#c5a2df",
        "secondary-V100": "#ad7cd1",
        "secondary-V200": "#8943bd",
        "secondary-V300": "#711db0",
        "secondary-V400": "#4f147b",
        "secondary-V500": "#45126b",

        //Grey
        "grey-G50": "#e9e9e9",
        "grey-G75": "#a6a6a6",
        "grey-G100": "#818181",
        "grey-G200": "#4b4b4b",
        "grey-G300": "#262626",
        "grey-G400": "#1b1b1b",
        "grey-G500": "#171717",

        //Warning
        "warning-O50": "#fff6eb",
        "warning-O75": "#ffdbab",
        "warning-O100": "#ffcc88",
        "warning-O200": "#ffb655",
        "warning-O300": "#ffa732",
        "warning-O400": "#b37523",
        "warning-O500": "#9c661f",

        //Success
        "success-S50": "#eafef3",
        "success-S75": "#a9fbcd",
        "success-S100": "#86f9b8",
        "success-S200": "#52f799",
        "success-S300": "#2ef584",
        "success-S400": "#20ac5c",
        "success-S500": "#1c9551",

        //Error
        "error-E50": "#ffe8e8",
        "error-E75": "#fea2a2",
        "error-E100": "#fd7c7c",
        "error-E200": "#fd4343",
        "error-E300": "#fc1d1d",
        "error-E400": "#b01414",
        "error-E500": "#9a1212",

        //White
        "white-W50": "#fefefe",
        "white-W75": "#f9f9f9",
        "white-W100": "#f6f6f6",
        "white-W200": "#f3f3f3",
        "white-W300": "#f0f0f0",
        "white-W400": "#a8a8a8",
        "white-W500": "#929292",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "7": "56px",
        "8": "64px",
        "9": "72px",
        "10": "80px",
        "11": "88px",
        "12": "96px",
        "13": "104px",
        "14": "112px",
        "15": "120px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
