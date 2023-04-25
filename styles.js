import { createGlobalStyle } from "styled-components";
import { Inter, Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --orbitron-font: ${orbitron.style.fontFamily};
    --inter-font: ${inter.style.fontFamily};
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
