import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural100 },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      margin: 5% 0;
      .container {
        height: min(663px);
        width: min(90%, 74rem);
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          justify-content: center;
        }
        align-items: center;
        flex-wrap: wrap-reverse;
      }
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
            left: ${locale === "fa" ? "auto" : "-3rem"};
            right: ${locale === "fa" ? "-3rem" : "auto"};
            top: -1rem;
            transform: rotateY(${locale === "fa" ? "180deg" : "0deg"});

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
            transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
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
        font-size: clamp(40px, 4.7vw, 64px);
      }

      .better {
        position: relative;
        z-index: 1;
        &-highlight {
          background: linear-gradient(to right, #cb5ff2, #ff5a82);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
        font-weight: 700;
        margin: 0;
        line-height: 1.3;
        color: ${LightNatural400};
        font-size: clamp(40px, 4.7vw, 64px);
        /* font-size: calc(40px + (64 - 40) * ((100vw - 320px) / (1920 - 320))); */
      }

      .better {
        position: relative;
        z-index: 1;
        &-highlight {
          background: linear-gradient(to right, #cb5ff2, #ff5a82);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
