import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";
const something = () => {};

export default styled.div(
  ({
    theme: {
      colors: {
        DarkNatural100,
        DarkTextLightHigh,
        DarkTextLightMid,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 549px;
      width: 100%;
      background: linear-gradient(70deg, #101021, #101021, #ff5a82);
      background-size: 180% 180%;
      border: 1px solid transparent;
      animation: gradient-animation 5s ease infinite;

      @keyframes gradient-animation {
        0% {
          background-position: 0% 10%;
        }
        50% {
          background-position: 30% 10%;
        }
        100% {
          background-position: 0% 10%;
        }
      }

      .container {
        margin-inline: auto;
        width: min(90%, 74rem);
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-between;
        height: 100%;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
      }

      .content {
        max-width: 450px;
        h2 {
          line-height: 1.2;
        }

        &-super {
          margin: unset;
          font-weight: 400;
          font-size: 14px;
          color: ${DarkNatural100};
        }
        &-title {
          margin: 16px 0 0 0;
          font-weight: 700;
          font-size: 32px;
          color: ${DarkTextLightMid};
        }
        &-subtitle {
          font-size: 40px;
          margin: unset;
          display: flex;

          background: linear-gradient(to right, #cb5ff2, #ff5a82);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          .icon {
            width: 48px;
          }

          @media (max-width: 500px) {
            .icon {
              display: none;
            }
          }
        }
        &-desc {
          margin-top: 16px;
          color: ${DarkTextLightLow};
          font-size: 15px;
        }
      }

      .collapses {
        max-width: 571px;
        width: 100%;

        &-item {
          width: 100%;

          .ant-collapse-item {
            width: 100%;
            .ant-collapse-header {
              width: 100%;

              min-height: 60px;
              align-items: center;
              background-color: #171727;
              color: ${DarkTextLightHigh};
              font-weight: 600;
              font-size: 15px;
            }
            &-active {
              /* border-radius: 8px 8px 0px 0px; */
            }
          }
          .ant-collapse-content {
            background-color: #171727;

            .ant-collapse-content-box {
              color: ${DarkTextLightHigh};
              font-weight: 400;
              font-size: 14px;
              background-color: #171727;
            }
          }
        }
      }
    `;
  }
);
