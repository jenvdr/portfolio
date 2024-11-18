/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

/** Functions to help round and calculate and convert pixel values to em, rem */
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  content: [
    "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[#EBE9E1]",
    "bg-[#FFA2B6]",
    "bg-[#D6536D]",
    "bg-[#E43D12]",
    "bg-[#f3e7de]",
    "bg-white",
    "bg-white-off",
    "bg-blue"
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: "#ffffff",
        off: "#f3e7de",
      },
      pink: {
            DEFAULT: "#FFA2B6",
            dark: "#D6536D",
      },
      red: {
            DEFAULT: "#E43D12",
      },
      yellow: {
            DEFAULT: "#EFB11D",
      },
      blue: {
        DEFAULT: "rgba(64, 87, 255, 1)",
      },
      black: {
            DEFAULT: "#000000",
            off: "#081012",
      }
    },
    extend: {
      maxWidth: {
        "7xl": "75rem",
      },
      // boxShadow: {
      //   "3xl": `0px 124px 35px 0px rgba(0, 0, 0, 0.00), 0px 79px 32px 0px rgba(0, 0, 0, 0.01), 0px 45px 27px 0px rgba(0, 0, 0, 0.05), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 5px 11px 0px rgba(0, 0, 0, 0.10)`,
      // },
      fontFamily: {
        body: ["var(--body)", "sans-serif"],
        primary: ["var(--display-font)", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-body": theme("colors.black"),
              "--tw-prose-headings": theme("colors.black"),
              h1: {
                fontWeight: 500,
              },
              h2: {
                fontWeight: 500,
              },
              h3: {
                fontWeight: 500,
              },
              h4: {
                fontWeight: 500,
              },
              h5: {
                fontWeight: 500,
              },
              h6: {
                fontWeight: 500,
              },
              p: {
                fontWeight: 500,
              },
              li: {
                fontWeight: 300,
              },
            },
          ],
        },
        sm: {
          css: [
            {
              p: {
                fontSize: em(16, 14),
                letterSpacing: "-0.01784999999em",
                lineHeight: 1.5,
                marginBottom: rem(12, 14),
                marginTop: rem(12, 14),
              },
              h2: {
                fontSize: em(25, 14),
                lineHeight: 1.2,
                marginBottom: rem(12, 14),
              },
              h5: {
                fontSize: em(16, 14),
                lineHeight: 1.2,
                marginBottom: rem(12, 14),
              },
            },
          ],
        },
        base: {
          css: [
            {
              ".tag": {
                fontSize: em(14, 16),
                letterSpacing: "-0.01784999999em",
                textTransform: "uppercase",
                fontWeight: 200,
              },
              h1: {
                fontSize: em(56, 16),
                lineHeight: 1.1,
                marginBottom: rem(18, 16),
              },
              h2: {
                fontSize: em(38, 16),
                lineHeight: 1.1,
                marginBottom: rem(18, 16),
              },
              h3: {
                fontSize: em(32, 16),
                lineHeight: 1.2,
                letterSpacing: "-0.00999999em",
              },
              p: {
                fontSize: em(16, 16),
                letterSpacing: "-0.01784999999em",
                lineHeight: 1.5,
                marginBottom: rem(12, 16),
                marginTop: rem(12, 16),
                fontWeight: 200,
              },
              ul: {
                marginBottom: rem(12, 16),
                marginTop: rem(12, 16),
                paddingLeft: rem(20, 16),
              },
              "ul > li": {
                fontSize: em(16, 16),
                letterSpacing: "-0.01784999999em",
                marginBottom: rem(3, 16),
                marginTop: rem(3, 16),
              },
            },
          ],
        },
        lg: {
          css: [
            {
              h1: {
                fontSize: em(80, 18),
                lineHeight: 1.1,
                marginBottom: rem(20, 18),
              },
              h2: {
                fontSize: em(42, 18),
                lineHeight: 1.2,
                marginBottom: rem(20, 18),
              },
              h3: {
                fontSize: em(38, 18),
                lineHeight: 1.2,
              },
              p: {
                letterSpacing: "-0.031666666666667em",
                lineHeight: 1.5,
                marginBottom: rem(12, 18),
                marginTop: rem(12, 18),
                fontWeight: 200,
              },
              ul: {
                marginBottom: rem(12, 18),
                marginTop: rem(12, 18),
                paddingLeft: rem(20, 18),
              },
              "ul > li": {
                fontSize: em(18, 18),
                letterSpacing: "-0.031666666666667em",
                marginBottom: rem(3, 18),
                marginTop: rem(3, 18),
              },
            },
          ],
        },
        xl: {
          css: [
            {
              ".display": {
                fontSize: em(76, 20),
                lineHeight: 1.1,
                letterSpacing: em(-1, 76),
                fontWeight: 500,
              },
              ".tag": {
                fontSize: em(14, 20),
                letterSpacing: em(3, 20),
                textTransform: "uppercase",
                fontWeight: 200,
              },
              h1: {
                fontSize: em(76, 20),
                lineHeight: 1.1,
                letterSpacing: em(-1, 76),
                fontWeight: 500,
                marginBottom: rem(20, 16),
              },
              h2: {
                fontSize: em(42, 20),
                lineHeight: 1.2,
              },
              h3: {
                fontSize: em(42, 20),
                lineHeight: 1.2,
              },
              h4: {
                fontSize: em(31, 20),
                lineHeight: 1.5,
                letterSpacing: em(-0.25, 31),
              },
              h5: {
                fontSize: em(24, 20),
                lineHeight: 1.2,
                marginBottom: rem(12, 20),
              },
              p: {
                fontSize: em(22, 20),
                letterSpacing: "-0.011666666666667em",
                lineHeight: 1.5,
                marginBottom: rem(12, 20),
                marginTop: rem(12, 20),
              },
              "ul > li": {
                fontSize: em(22, 20),
                letterSpacing: "-0.011666666666667em",
                lineHeight: 1.5,
                marginBottom: rem(12, 20),
                marginTop: rem(12, 20),
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
