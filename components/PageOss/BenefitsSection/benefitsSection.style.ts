import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 1006px;
      border: 2px solid red;
    `;
  }
);
