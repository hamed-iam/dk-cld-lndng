import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural100, LightNatural400, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 663px;

      @media screen and (min-width: 320px) and (max-width: 480px) {
        padding: 16px 24px;
        justify-content: center;
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        padding: 16px 80px;
        justify-content: center;
      }

      @media screen and (min-width: 768px) {
        padding: 16px 130px;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap-reverse;
      .title-wrapper {
        &-super {
          font-weight: 400;
          font-size: 14px;
          color: ${LightNatural100};
        }
        &-sub {
          position: relative;
          .icon {
            width: 32px;
            position: absolute;
            left: -3rem;
            top: -1rem;

            @media (max-width: 600px) {
              display: none;
            }
          }
          p {
            font-weight: 600;
            font-size: 16px;
            color: ${LightNatural100};
          }
        }
        &-actions {
          display: flex;
          .icon {
            width: 32px;
            height: 32px;
          }

          .create-account-btn {
            font-weight: 700;
            font-size: 14px;
          }

          .play-btn {
            display: flex;
            align-items: center;
            padding: unset;
            margin-inline-start: 16px;
          }
        }
      }

      .image-wrapper {
        img {
          max-width: 100%;
          height: auto;
        }
      }
    `;
  }
);

export const StyledSloganFa = styled.div(
  ({
    theme: {
      colors: { LightThemeInfo20, LightNatural400, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      h1 {
        font-style: normal;
        font-weight: 700;
        margin: 0;
        color: ${LightNatural400};

        @media screen and (min-width: 320px) and (max-width: 480px) {
          font-size: 40px;
        }

        @media screen and (min-width: 481px) and (max-width: 768px) {
          font-size: 50px;
        }

        @media screen and (min-width: 768px) {
          font-size: 64px;
        }

        /* font-size: calc(40px + (64 - 40) * ((100vw - 320px) / (1920 - 320))); */
      }

      .better {
        position: relative;
        z-index: 1;
        &-highlight {
          color: pink;
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

      .sparkle {
        display: flex;
      }

      .icon-sparkleIcon {
        position: relative;
        width: 56px;
      }
    `;
  }
);

export const StyledSloganEn = styled.div(
  ({
    theme: {
      colors: { LightThemeInfo20, LightNatural400, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      h1 {
        font-style: normal;
        font-weight: 600;
        margin: 0;
        color: ${LightNatural400};
        font-size: calc(40px + (64 - 40) * ((100vw - 320px) / (1920 - 320)));
      }

      .better {
        position: relative;
        z-index: 1;
        &-highlight {
          color: pink;
        }
        &-infrastructure {
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

      .sparkle {
        display: flex;
      }

      .icon-sparkleIcon {
        width: 56px;
        position: relative;
      }
    `;
  }
);
