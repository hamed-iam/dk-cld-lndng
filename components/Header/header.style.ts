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
        /* 320px — 480px: Mobile devices.
           481px — 768px: iPads, Tablets.
           769px — 1024px: Small screens, laptops.
           1025px — 1200px: Desktops, large screens. */
        /* padding: 16px 24px; */
        /* padding: 16px 130px; */
        /* padding: calc(24px + (130 - 24) * ((100vw - 320px) / (1920 - 320))); */

        /* padding: calc(24px + ((130 - 24) * (100vw - 320px) / (1920 - 320))); */
        /* padding: calc(16px + ((130 - 16 * 2) * (100vw - 320px) / (1920 - 320))); */
        @media screen and (min-width: 320px) and (max-width: 480px) {
          padding: 16px 24px;
        }

        @media screen and (min-width: 481px) and (max-width: 768px) {
          padding: 16px 80px;
        }

        @media screen and (min-width: 768px) {
          padding: 16px 130px;
        }

        display: flex;
        align-items: center;
        max-height: 74px;

        .container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;

          &-logo {
            display: flex;
            align-items: center;

            .icon {
              margin-inline-end: 12px;
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
