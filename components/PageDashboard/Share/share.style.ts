import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural100, LightNatural400 },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 400px;
      background: linear-gradient(89.94deg, #ffffff 40.64%, #f0f0f7 68.21%);
      display: flex;
      align-items: center;
      margin: 5% 0;
      .container {
        height: 100%;
        width: min(90%, 74rem);
        margin-inline: auto;

        .info-section {
          &-title {
            position: relative;
            max-width: 70%;
            font-weight: 700;
            &-super {
              font-weight: 400;
              font-size: 14px;
              margin: 12px 5px;
              color: ${LightNatural100};
            }
            h2 {
              font-size: 48px;
              color: ${LightNatural400};
              margin: unset;
              line-height: 1;
              padding: 5px;
              .highlight {
                background: linear-gradient(to right, #cb5ff2, #ff5a82);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }

          &-desc {
            display: flex;
            align-items: center;
            margin: 12px 5px;
            p {
              font-weight: 400;
              font-size: 15px;
              color: ${LightNatural100};
              margin: unset;
            }
            .icon {
              width: 32px;
              height: 32px;
            }
          }
          &-action {
            display: flex;
            align-items: center;
            .icon-arrowDashboardSolutionsIcon {
              transform: rotate(-20deg) scaleX(-1);
              width: 100px;
              margin-inline-start: 10px;
            }

            &-btn {
              width: 177px;
              height: 46px;
              font-weight: 700;
              font-size: 14px;
              display: flex;
              align-items: center;
              .icon {
                width: 24px;
                height: 24px;
                margin-inline-end: 5px;
              }
            }
          }
        }
        .image-section {
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
    `;
  }
);
