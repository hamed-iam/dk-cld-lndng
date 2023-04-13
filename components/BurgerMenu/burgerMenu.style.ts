import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      .menu .ant-drawer-wrapper-body{
        border: 2px solid red;
        background-color: yellow;

        .menu-container {
          background-color: blue;
          border: 2px solid red;
        }
      }
    `;
  }
);
