import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.main(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: ${background};
      color: ${blue};

      a {
        color: #22bad9;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
        transition: background-color 0.3s;
      }
      button:active {
        background-color: #1b9db7;
      }
      button:disabled {
        background-color: #b5bebf;
      }
      button:focus {
        outline: none;
      }
    `;
  }
);
