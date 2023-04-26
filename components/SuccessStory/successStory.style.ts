import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 846px;
      color: white;
      background-color: #09091a;
      border: 2px solid red;
    `;
  }
);
