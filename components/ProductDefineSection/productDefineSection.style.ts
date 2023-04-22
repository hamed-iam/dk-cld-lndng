import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightNatural400,
        LightThemeInfo20,
        LightThemePrimary600,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 530px;
      border: 2px solid red;

      /* @media screen and (min-width: 320px) and (max-width: 480px) {
        padding: 16px 24px;
        justify-content: center;
      } */

      /* @media screen and (min-width: 481px) and (max-width: 768px) {
        padding: 16px 80px;
        justify-content: center;
      } */

      @media screen and (min-width: 768px) {
        padding: 80px 0 80px 130px;
      }

      .product-desc {
        &-super {
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
          margin: unset;
        }
        &-title {
          color: ${LightNatural400};
          font-weight: 700;
          /* responsive needed */
          font-size: 64px;
          margin: 8px 0 16px 0;

          .icon {
            width: 72px;
            height: 72px;
            margin-inline-end: 10px;
          }
          .title-icon {
            display: flex;
          }
          .highlight {
            position: relative;
            z-index: 1;
            /* background-color: red; */

            &-word {
              color: ${LightThemePrimary600};
            }

            ::before {
              content: "";
              position: absolute;
              width: 100%;
              bottom: 25%;
              height: 50%;
              z-index: -1;
              background-color: ${LightThemeInfo20};
            }
          }
        }
        &-sub {
          color: ${DarkTextLightLow};
          font-weight: 400;
          font-size: 15px;
          margin: unset;
        }
      }

      .cards {
        /* margin: 20% 0 0 50%;
        width: 60%; */
        border: 2px solid blue;
        mask-image: gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 1)),
          to(rgba(0, 0, 0, 0))
        );
        -webkit-mask-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 1)),
          to(rgba(0, 0, 0, 0))
        );

        .actions {
          margin-top: 16px;
          display: flex;
          .icon {
            width: 18px;
            height: 18px;
          }
          .slide-btn {
            padding: 10px;
            display: flex;
            align-items: center;

            &.prev {
              margin-inline-end: 10px;
            }
          }
        }
      }
    `;
  }
);

export const StyledProductDefineCard = styled.div(
  ({
    theme: {
      colors: { LightThemePrimary20, LightTextDarkHigh, LightTextDarkMid },
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      max-width: 358px;
      min-height: 197px;
      border-radius: 12px;
      border: 1px solid ${LightThemePrimary20};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);
      padding: 32px 32px 40px 32px;

      .icon {
        width: 25px;
        position: absolute;
        top: 0;
        right: 10%;
      }

      .title {
        color: ${LightTextDarkHigh};
        font-weight: 700;
        font-size: 17px;
      }
      .desc {
        color: ${LightTextDarkMid};
        font-weight: 400;
        font-size: 14px;
      }
    `;
  }
);
