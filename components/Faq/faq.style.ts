import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      font-weight: 600;
      font-size: 20px;
      border: 1px solid red;
      min-height: 887px;
    `;
  }
);
