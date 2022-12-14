import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Brandon Text,Arial,sans-serif",
    heading: "Brandon Text,Arial,sans-serif",
    mono: "Brandon Text,Arial,sans-serif",
  },
  lineHeight: " 1.6rem",
  colors: {
    global: {
      black: "#333",
      blue: "#00819d",
    },
  },
});
export { theme };
