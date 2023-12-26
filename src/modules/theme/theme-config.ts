import { createTheme } from "@mantine/core";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const themeConfig = createTheme({
  primaryColor: "green",
  scale: 1.1,
  defaultRadius: "md",
  fontFamily: poppins.style.fontFamily,
  defaultGradient: {
    from: "green",
    to: "#6BD731",
    deg: 5,
  },
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});
