import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      locale,
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      header {
        padding: 16px 24px;
        display: flex;
        align-items: center;
        max-height: 74px;
        border: 1px solid red;

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          &-logo {
            display: flex;
            align-items: center;
            .icon {
              width: 146px;
            }
          }

          &-burger-btn {
            @media (min-width: 930px) {
              display: none;
            }
          }
          &-locale {
            @media (max-width: 930px) {
              display: none;
            }
          }
        }
      }
    `;
  }
);
