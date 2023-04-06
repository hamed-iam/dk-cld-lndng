import { createGlobalStyle, css } from "styled-components";
import { ThemeStyledProps } from "./themes";

const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      colors: { background, coral },
    },
  }: ThemeStyledProps) => {
    return css`
      html,
      body {
        background-color: ${background};
        color: ${coral};
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
