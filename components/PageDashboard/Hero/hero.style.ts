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
      padding: calc(24px + ((130 - 24) * (100vw - 320px) / (1920 - 320)));
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap-reverse;
      .title-wrapper {
        &-super {
          font-weight: 400;
          font-size: 14px;
          color: ${LightNatural100};
        }
        &-sub {
          font-weight: 600;
          font-size: 16px;
          color: ${LightNatural100};
        }
      }

      .image-wrapper {
        img {
          max-width: 383px;
          min-width: 290px;
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
        font-size: calc(40px + (64 - 40) * ((100vw - 320px) / (1920 - 320)));
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
        &-infrastructure{
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
        position: relative;
        width: 56px;
      }
    `;
  }
);
