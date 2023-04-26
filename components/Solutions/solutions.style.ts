import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      border: 1px solid red;
      min-height: 653px;
    `;
  }
);
