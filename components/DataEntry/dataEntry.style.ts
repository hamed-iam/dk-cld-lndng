import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export const InputStyleWrapper = styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        color: red;
      }

      .text-area {
        resize: none;
      }
    `;
  }
);
