import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightThemePrimary600,
        DarkThemePrimary700,
        LightThemePrimary800,
      },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      background-image: url("/assets/topo2.jpg");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 363px;
      display: flex;
      align-items: center;
      justify-content: center;

      .container {
        margin-inline: auto;
        width: min(90%, 100rem);

        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          margin: unset;
          line-height: 1;
          background: linear-gradient(
            180deg,
            rgba(139, 188, 252, 0.8) 28.61%,
            rgba(23, 23, 39, 0.8) 67.83%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: clamp(26px, 4.7vw, 93px);
        }

        .quick-access-wrapper {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          &-product {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 377px;
            min-height: 60px;
            color: #ffffff;
            padding: 16px 32px;
            font-weight: 700;
            font-size: 15px;

            box-shadow: 0px 0px 4px -2px rgba(24, 39, 75, 0.1),
              0px 4px 4px -2px rgba(24, 39, 75, 0.06);
            span {
              display: flex;
              align-items: center;
            }
            .icon {
              width: 24px;
              height: 24px;
              path {
                fill: white;
              }
            }
            .icon-contactArrowIcon {
              transform: rotate(${locale === "fa" ? "270deg" : "0deg"});
            }
            border-radius: 8px;
            &.cloud {
              background-color: ${LightThemePrimary600};
              transform: translateX(${locale === "fa" ? "-10px" : "10px"});
              z-index: 2;
              .icon-cloudComputingPlainIcon {
                margin-inline-end: 10px;
              }
            }
            &.edge {
              background-color: ${LightThemePrimary800};
              z-index: 1;
              .icon-edgeServicesPlainIcon {
                margin-inline-end: 10px;
              }
            }
            &.oss {
              background-color: ${DarkThemePrimary700};
              transform: translateX(${locale === "fa" ? "10px" : "-10px"});
              .icon-objectStoragePlainIcon {
                margin-inline-end: 10px;
              }
            }

            @media (max-width: 837px) {
              &.cloud {
                transform: translateX(0);
                transform: translateY(10px);
              }
              &.oss {
                transform: translateX(0);
                transform: translateY(-10px);
              }
            }
          }
        }
      }
    `;
  }
);
