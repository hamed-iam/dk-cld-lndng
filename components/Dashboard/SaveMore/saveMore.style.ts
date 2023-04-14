import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: #101021;
      border: 1px solid red;
      min-height: 670px;
    `;
  }
);
