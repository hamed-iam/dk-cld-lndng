import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      border: 1px solid red;
      background: linear-gradient(
        180deg,
        rgba(23, 23, 39, 0) 0%,
        #171727 88.02%
      );
      min-height: 376px;
    `;
  }
);
