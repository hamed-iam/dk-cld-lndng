import { ThemeStyledProps } from "@/styles/themes";
import styled, { css } from "styled-components";

export default styled.main(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      section {
        padding-bottom: 20px;
      }
      li {
        display: block;
        margin-bottom: 10px;
      }
      div {
        align-items: center;
        display: flex;
      }
      a {
        font-size: 14px;
        margin-right: 10px;
        text-decoration: none;
        padding-bottom: 0;
        border: 0;
      }
      span {
        font-size: 14px;
        margin-right: 5px;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      button:before {
        align-self: center;
        border-style: solid;
        border-width: 6px 4px 0 4px;
        border-color: #ffffff transparent transparent transparent;
        content: "";
        height: 0;
        margin-right: 5px;
        width: 0;
      }
    `;
  }
);
