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
      "100": "#e6e7e8",
    },
    blue: {
      "100": "#0358a0",
      "200": "#0a9ce6",
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
      "100": "#011b34",
      "200": "#373435",
    },
    red: {
      "100": "#ff0000",
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
