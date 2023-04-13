import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.nav(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      @media (max-width: 480px) {
        display: none;
      }

      .nav{
        margin: 0 40px;
      }
    `;
  }
);
