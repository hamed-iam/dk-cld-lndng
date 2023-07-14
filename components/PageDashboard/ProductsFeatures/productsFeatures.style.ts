import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { DarkBGGrade15 },
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: ${DarkBGGrade15};

      .triangle {
        width: 100%;
        border-bottom: solid 60px ${DarkBGGrade15};
        border-left: solid 50vw transparent;
        border-right: solid 50vw transparent;
        transform: translateY(-70px);
        z-index: 1;
      }
      .triangle-base {
        width: 100%;
        transform: translateY(-70px);
        height: 15px;
        z-index: 1;
        color: red;
        background-color: ${DarkBGGrade15};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .triangle-text {
          position: absolute;
          top: -5px;
          background: linear-gradient(89.74deg, #cb5ff2 0.2%, #ff5a82 84.73%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .icon {
          position: absolute;
          width: 24px;
          height: 23px;
          top: -40px;
        }
      }

      @media screen and (max-width: 500px) {
        .triangle {
          border-bottom: solid 40px ${DarkBGGrade15};
          transform: translateY(-50px);
        }
        .triangle-base {
          transform: translateY(-50px);
          .icon {
            top: -30px;
          }
        }
      }

      .container {
        width: min(90%, 74rem);
        height: 100%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );

        .product-tabs {
          position: absolute;
          margin-inline-start: -110px;

          .tab-icon {
            border-radius: 50%;
            margin-inline-end: 7px;
            font-size: 15px;
          }

          .active {
            div {
              width: 12px;
              height: 12px;
              box-shadow: 0px 3px 24px 3px #ff64b8bf;
              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
            }
            span {
              transform: scale(1.5) translate(20px);
              background: -webkit-linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );

              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          .inactive {
            div {
              width: 6px;
              height: 6px;
              background: #fff;
            }
          }

          .active {
            .label {
              box-shadow: 0px 3px 24px 3px #ff64b8bf;
            }
          }

          .cloud-icon {
            position: absolute;
            width: 100px;
            top: 65px;
          }
          .storage-icon {
            position: absolute;
            width: 200px;
            top: 30px;
          }
          .edge-icon {
            position: absolute;
            width: 300px;
          }

          .tab-button {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: max-content;
            background: ${DarkBGGrade15};
            border-radius: 40px;
            padding: 2px 5px;

            .icon {
              width: 66px;
              height: 66px;
            }
          }
          .tab-button:hover {
            cursor: pointer;
          }

          .cloud-pos {
            top: 130px;
            left: 85px;
          }

          .storage-pos {
            top: 80px;
            left: 150px;
          }

          .edge-pos {
            top: 310px;
            left: 135px;
          }
        }

        .product-tabs-fa {
          position: absolute;
          margin-inline-start: -110px;

          .tab-icon {
            border-radius: 50%;
            margin-inline-end: 7px;
            font-size: 15px;
          }

          .active {
            div {
              width: 12px;
              height: 12px;
              box-shadow: 0px 3px 24px 3px #ff64b8bf;
              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
            }
            span {
              transform: scale(1.5) translate(-20px);
              background: -webkit-linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );

              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          .inactive {
            div {
              width: 6px;
              height: 6px;
              background: #fff;
            }
          }

          .active {
            .label {
              box-shadow: 0px 3px 24px 3px #ff64b8bf;
            }
          }

          .cloud-icon {
            position: absolute;
            width: 100px;
            top: 65px;
            transform: rotate(180deg);
          }
          .storage-icon {
            position: absolute;
            width: 200px;
            top: 30px;
            transform: rotate(180deg);
          }
          .edge-icon {
            position: absolute;
            width: 300px;
            transform: rotate(180deg);
          }

          .tab-button {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: max-content;
            background: ${DarkBGGrade15};
            border-radius: 40px;
            padding: 2px 5px;

            .icon {
              width: 66px;
              height: 66px;
            }
          }
          .tab-button:hover {
            cursor: pointer;
          }

          .cloud-pos {
            top: 130px;
            right: 85px;
          }

          .storage-pos {
            top: 80px;
            right: 150px;
          }

          .edge-pos {
            top: 310px;
            right: 135px;
          }
        }

        .features-wrapper {
          padding: 68px 20px 96px 20px;
        }

        .features-title {
          display: flex;
          align-items: center;
          font-size: 36px;
          font-weight: 700;
          line-height: 64px;
          margin-inline-start: 15px;

          span {
            margin-inline-end: 10px;
          }

          img {
            width: 40px;
            height: 40px;
            margin: 0;
          }
        }
      }
      .product-image {
        position: relative;
        align-items: center;
        height: 10px;
        right: 0;

        .image-wrapper {
          position: absolute;
          right: -150px;
          bottom: -80px;
          width: 300px;
          height: 300px;
          overflow: hidden;
        }

        img {
          width: 300px;
          height: 300px;
        }

        .image-active {
          display: block;
        }

        .image-inactive {
          display: none;
        }

        .image-wrapper-fa {
          position: absolute;
          left: -150px;
          bottom: -80px;
        }

        @keyframes imovement {
          from {
            transform: translateX(10vmin);
            opacity: 0;
          }
          to {
            transform: translateX(0vmin);
            opacity: 1;
          }
        }

        .image-movement {
          animation: movement linear normal;
          animation-duration: 1s;
        }
      }
    `;
  }
);

export const DonutChartStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        DarkBorderHigh,
        LightTextDarkLow,
        LightThemePrimary600,
        DarkTextMid,
        DarkTextLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      max-width: 312px;
      width: 100%;

      .chart {
        margin-bottom: 24px;
        padding: 24px 24px 16px 24px;
        border: 1px solid ${DarkBorderHigh};
        border-radius: 12px;

        .icon {
          width: 96px;
        }

        &-content {
          display: flex;
          width: 224px;

          &-info {
            margin-inline-start: 20px;

            .content-heading {
              font-size: 16px;
              font-weight: 700;
              color: ${LightTextDarkLow};
              line-height: 51px;

              &-colored {
                font-size: 32px;
                font-weight: 700;
                color: ${LightThemePrimary600};
              }
            }
            .content-title {
              font-size: 15px;
              font-weight: 600;
              color: ${DarkTextMid};
              line-height: 28.5px;
            }
          }
        }

        &-sub {
          font-size: 12px;
          font-weight: 400;
          line-height: 23px;
          color: ${DarkTextLow};
        }
      }
    `;
  }
);

export const ProductTabsStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        DarkNatural100,
        LightTextDarkLow,
        LightThemePrimary600,
        DarkTextMid,
        DarkTextLow,
        DarkThemePrimary10,
        DarkTextLightLow,
        DarkTextLightHighest,
        DarkBorderMid,
        DarkBorderHigh,
      },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      .container {
        width: 100%;
        height: 100%;
        margin-inline: auto;
        margin-top: 5%;
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .tab {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 900px;
        width: 100%;
        gap: 50px;
        overflow: hidden;

        &-intro {
          max-width: 500px;
          width: 100%;
        }
        &-super {
          font-weight: 400;
          font-size: 14px;
          color: ${DarkNatural100};
        }
        &-title {
          width: fit-content;
          h2 {
            color: red;
            line-height: 0.9;
            margin: unset;
            font-weight: 700;
            font-size: 36px;
            max-height: 172px;
            padding: 10px;

            background: linear-gradient(
              210.39deg,
              rgba(196, 241, 247, 0.8) 13.11%,
              rgba(61, 136, 235, 0.8) 89.79%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        &-desc {
          font-weight: 400;
          font-size: 14px;
          color: ${DarkTextLightLow};
        }

        &-sub {
          font-size: 12px;
          font-weight: 700;
          line-height: 24px;
          color: ${DarkTextLow};

          link {
            font-size: 14px;
            font-weight: 400;
            line-height: 27px;
            color: ${LightThemePrimary600};
          }
        }

        &-actions {
          display: flex;
          flex-wrap: wrap;
          margin-top: 16px;
          margin-bottom: 40px;

          &-create {
            background-color: ${DarkThemePrimary10};
            color: ${DarkTextLightHighest};
            font-weight: 700;
            font-size: 14px;
            border: unset;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 42px;
            margin: 5px;

            .icon {
              width: 25px;
              height: 25px;
              margin-inline-end: 50px;
            }
          }
          &-details {
            background-color: transparent;
            color: ${DarkTextLightHighest};
            font-weight: 700;
            font-size: 14px;
            border: 1px solid ${DarkBorderMid};
            display: flex;
            align-items: center;
            justify-content: center;
            height: 42px;
            margin: 5px;

            .icon {
              width: 20px;
              height: 20px;
              margin-inline-end: 10px;
            }
          }
        }
      }
      .charts-wrapper {
        max-width: 312px;
        width: 100%;

        @keyframes movement {
          from {
            transform: translateX(10vmin);
            opacity: 0;
          }
          to {
            transform: translateX(0vmin);
            opacity: 1;
          }
        }

        @keyframes movement-fa {
          from {
            transform: translateX(-10vmin);
            opacity: 0;
          }
          to {
            transform: translateX(0vmin);
            opacity: 1;
          }
        }

        .chart-movement {
          animation: ${locale === "fa" ? "movement-fa" : "movement"} linear
            normal;
          animation-duration: 0.5s;
        }

        .chart {
          margin-bottom: 24px;
          padding: 24px 24px 16px 24px;
          border: 1px solid ${DarkBorderHigh};
          border-radius: 12px;

          .icon {
            width: 96px;
          }

          &-content {
            display: flex;
            width: 224px;

            &-info {
              margin-inline-start: 20px;

              .content-heading {
                font-size: 16px;
                font-weight: 700;
                color: ${LightTextDarkLow};
                line-height: 51px;

                &-colored {
                  font-size: 32px;
                  font-weight: 700;
                  color: ${LightThemePrimary600};
                }
              }
              .content-title {
                font-size: 15px;
                font-weight: 600;
                color: ${DarkTextMid};
                line-height: 28.5px;
              }
            }
          }

          &-sub {
            font-size: 12px;
            font-weight: 400;
            line-height: 23px;
            color: ${DarkTextLow};
          }
        }
      }
    `;
  }
);

export const ProductFeaturesStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        DarkTextLightMid,
        DarkBGGrade2,
        DarkTextLightHighest,
        DarkBorderHigh,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      .feature {
        display: flex;
        margin-inline-end: 5%;

        .save-collapses {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .panel {
            background-color: ${DarkBGGrade2};
            border-radius: 12px;
            border: 1px solid ${DarkBorderHigh};
            width: 312px;
            margin: 20px 10px 20px 10px;

            &-desc {
              margin: unset;
            }
          }
          .panel-header {
            display: flex;
            .icon {
              width: 32px;
              height: 32px;
              margin-inline-end: 5px;
            }
            p {
              margin: unset;
            }
          }
          .ant-collapse-header {
            color: ${DarkTextLightHighest};
            font-weight: 400;
            font-size: 14px;
            min-height: 48px;
            align-items: center;
          }
          .ant-collapse-content {
            color: ${DarkTextLightMid};
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    `;
  }
);
