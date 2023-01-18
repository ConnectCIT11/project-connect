import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    xs: "280px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  colors: {
    gray: {
      "100": "#B0C4DE",
    },
    blue: {
      "100": "#191970",
      "200": "#00008B",
      "300": "#87CEFA",
      "400": "#00DFFB",
      "500": "linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)",
    },
    white: {
      "100": "#FFFFFF",
      "200": "#FFF8DC",
    },
    green: {
      "100": "#008000",
    },
    black: {
      "100": "#202223",
    },
    red: {
      "100": "#FF0000",
    },
    yellow: {
      "100": "#FFD700",
      "200": "#F0E68C",
    },
  },
  fonts: {
    heading: `Roboto`,
    body: `Roboto`,
  },
  styles: {
    global: {
      body: {
        bg: "white.100",
        color: "black.100",
      },
    },
  },
});
