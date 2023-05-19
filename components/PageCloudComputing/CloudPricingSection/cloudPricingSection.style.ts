import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightNatural500,
        LightThemeSuccess20,
        LightThemeSuccess10,
        LightThemeSuccess800,
        DarkTextLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 618px;
      display: flex;
      align-items: center;
      margin: 24px 0;
      .container {
        width: min(90%, 100rem);
        height: 100%;
        margin-inline: auto;

        .info-wrapper {
          &-super {
            color: ${LightNatural100};
            font-weight: 400;
            font-size: 14px;
            margin: unset;
          }
          &-title {
            color: ${LightNatural500};
            font-weight: 700;
            font-size: clamp(48px, 4.7vw, 64px);
            margin: unset;
          }
          &-sub {
            width: 119px;
            background-color: ${LightThemeSuccess10};
            display: flex;
            padding: 5px;
            border-radius: 100px;
            .icon {
              width: 18px;
              height: 18px;
              margin-inline-end: 5px;
              path {
                fill: ${LightThemeSuccess800};
              }
            }
            p {
              color: ${LightThemeSuccess800};
              font-weight: 600;
              font-size: 13px;
              margin: unset;
            }
            border: 1px solid ${LightThemeSuccess20};
          }
          &-desc {
            color: ${DarkTextLow};
            font-weight: 400;
            font-size: 15px;
          }
        }
      }
    `;
  }
);

export const ConfigFlavorsStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        LightTextLow,
        DarkTextHigh,
        LightTextMid,
        LightBGGrade15,
        LightBGGrade3,
        LightThemePrimary800,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 338px;
      padding: 16px;
      background: linear-gradient(162deg, #f7f7fa 19.94%, #ffffff 51.8%);
      box-shadow: 0px 2px 16px -4px rgba(24, 39, 75, 0.2);
      border-radius: 16px;

      .config-wrapper {
        &-banner {
          transition: all 1s ease-in-out;
          &.general {
            background-image: url("/assets/config.png");
          }
          &.memory {
            background-image: url("/assets/glitter.jpg");
          }
          &.compute {
            background-image: url("/assets/paint.jpg");
          }
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          min-height: 127px;
          border-radius: 16px;
          padding: 24px;

          h4 {
            font-size: clamp(25px, 4.7vw, 32px);
            margin: unset;
            text-shadow: 0px 0px 8px rgba(24, 39, 75, 0.16),
              0px 2px 16px rgba(24, 39, 75, 0.4);
            color: #ffffff;
          }
          p {
            color: ${DarkTextHigh};
            text-shadow: 0px 0px 8px rgba(24, 39, 75, 0.16),
              0px 2px 16px rgba(24, 39, 75, 0.4);
            margin: unset;
          }
        }
        &-tabs {
          background-color: ${LightBGGrade15};
          display: flex;
          border-radius: 8px;
          justify-content: center;
          margin: 24px 0;
          &-btn {
            color: ${LightTextMid};
            font-weight: 400;
            font-size: 12px;
            background-color: transparent;
            border: unset;
            border-radius: 8px;
            width: 100%;
            &.active {
              background-color: ${LightBGGrade3};
            }
          }
        }

        &-info {
          display: flex;
          align-items: center;
          &-desc {
            width: 100%;
            background-color: ${LightBGGrade15};
            border-radius: 12px;
            padding: 16px 32px;
            margin: 0 16px;

            display: flex;
            justify-content: space-between;
            &-item {
              .label {
                color: ${LightTextLow};
                font-weight: 400;
                font-size: 15px;
                margin: unset;
              }
              .value {
                color: ${LightThemePrimary800};
                font-weight: 600;
                font-size: 15px;
                margin: unset;
              }
            }
          }
        }
      }
    `;
  }
);
