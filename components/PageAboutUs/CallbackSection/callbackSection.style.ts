import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      border: 2px solid red;
      min-height: 680px;
    `;
  }
);
