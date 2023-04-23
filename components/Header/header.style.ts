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
        width: min(90%, 100rem);
        padding: 16px 0;
        margin-inline: auto;
        display: flex;
        align-items: center;
        max-height: 74px;

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          &-logo {
            display: flex;
            align-items: center;

            .icon {
              margin-inline-end: 12px;
              width: 146px;
            }
            .icon-brandingIcon {
              height: 32px;
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
