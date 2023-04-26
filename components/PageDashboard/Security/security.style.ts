import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: linear-gradient(#bdd7ff, #40435d, #171727, #101021);
      border: 1px solid red;
      min-height: 550px;
    `;
  }
);
