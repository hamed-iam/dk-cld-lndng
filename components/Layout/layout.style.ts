import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/theme";

export default styled.main(
  ({
    theme: {
      colors: { blue },
    },
  }: ThemeStyledProps) => {
    return css`
      background: papayawhip;
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
