import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.main(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: ${background};
      color: ${blue};
    `;
  }
);
