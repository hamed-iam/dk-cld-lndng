import { createGlobalStyle } from "styled-components";
import { GlobalStyledProps } from "./theme";

const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      colors: { blue },
    },
  }: GlobalStyledProps) => {
    return `
    html,
    body {
      color: ${blue};
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: border-box;
    }
  `;
  }
);

export default GlobalStyle;
