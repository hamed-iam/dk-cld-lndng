import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
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
      flex-wrap: wrap;
      .title-wrapper {
        &-super {
          font-weight: 400;
          font-size: 14px;
          color: ${LightNatural100};
        }
        &-slogan {
          position: relative;
          padding: 4px;
          span {
          }
          .icon {
            width: 9px;
            position: absolute;
            &.icon-cornerTLIcon {
              top: 0;
              left: 0;
            }
            &.icon-cornerTRIcon {
              top: 0;
              right: 0;
            }
            &.icon-cornerBLIcon {
              bottom: 0;
              left: 0;
            }
            &.icon-cornerBRIcon {
              bottom: 0;
              right: 0;
            }

            &.icon-sparkleIcon {
              position: relative;
              width: 56px;
            }
          }
          h1 {
            font-style: normal;
            font-weight: 700;
            margin: 0;
            color: ${LightNatural400};
            .better {
              color: linear-gradient(90deg, rgba(203,95,242,1) 100%, rgba(255,90,130,1) 100%);
            }
            .infrastructure {
              color: ${LightThemePrimary600};
            }
            .sparkle {
              display: flex;
            }
            font-size: calc(
              40px + (64 - 40) * ((100vw - 320px) / (1920 - 320))
            );
          }
        }
        &-sub {
        }
      }

      .image-wrapper {
        .icon {
          max-width: 383px;
          min-width: 311px;
        }
      }
    `;
  }
);
