import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { DarkBGGrade15, DarkTextMid },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: ${DarkBGGrade15};
      margin-top: calc(68px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));

      .triangle {
        width: 100%;
        border-bottom: solid 60px ${DarkBGGrade15};
        border-left: solid 49.5vw transparent;
        border-right: solid 49.5vw transparent;
        transform: translateY(-70px);
      }
      .triangle-base {
        z-index: 99;
        position: absolute;
        width: 100%;
        transform: translateY(-70px);
        height: 15px;
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
        position: relative;

        @media screen and (max-width: 768px) {
          ::before {
            content: "";
            width: 0;
            height: 0;
          }
        }

        .tabs-col {
          min-height: 320px;
          display: flex;
          justify-content: center;
        }

        .product-tabs {
          position: absolute;
          margin-inline-start: -50px;
          max-width: 500px;
          width: 100%;

          &-icon {
            border-radius: 50%;
            margin-inline-end: 7px;
          }

          .active {
            div {
              z-index: 1;
              width: 12px;
              height: 12px;
              box-shadow: 0px 3px 24px 3px #ff5a82;
              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
            }
            span {
              transform: scale(1.5)
                translate(${locale === "fa" ? "-20px" : "20px"});
              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          .inactive {
            div {
              width: 6px;
              height: 6px;
              background: ${DarkTextMid};
            }
          }

          .cloud-curve {
            position: absolute;
            width: 100px;
            top: 65px;
            transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
          }
          .storage-curve {
            position: absolute;
            width: 200px;
            top: 30px;
            transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
          }
          .edge-curve {
            position: absolute;
            width: 300px;
            transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
          }

          .tab-button {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: max-content;
            background: ${DarkBGGrade15};
            border-radius: 40px;
            padding: 2px 6px;
          }
          .tab-button:hover {
            cursor: pointer;
          }

          .cloud-pos {
            top: 130px;
            left: ${locale === "fa" ? "auto" : "85px"};
            right: ${locale === "fa" ? "85px" : "auto"};
          }

          .storage-pos {
            top: 80px;
            left: ${locale === "fa" ? "auto" : "140px"};
            right: ${locale === "fa" ? "140px" : "auto"};
          }

          .edge-pos {
            top: 310px;
            left: ${locale === "fa" ? "auto" : "145px"};
            right: ${locale === "fa" ? "145px" : "auto"};
          }
        }

        @media screen and (max-width: 768px) {
          .tabs-col {
            min-height: unset;
          }
          .product-tabs {
            position: relative;
            margin-inline-start: unset;
            height: min-content;

            .tab-icon {
              border-radius: 50%;
              margin-inline-end: 20px;
              font-size: 15px;
            }

            .tab-line {
              position: absolute;
              border: 0;
              border-right: ${locale === "fa" ? "2px" : "0"};
              border-left: ${locale === "fa" ? "0" : "2px"};
              border-color: #2b2c40;
              border-style: solid;
              height: 133px;
              top: 18px;
              z-index: 0;
            }

            .active {
              span {
                transform: scale(1) translate(-5px);
                font-size: 20px;

                background: linear-gradient(
                  89.74deg,
                  #cb5ff2 0.2%,
                  #ff5a82 84.73%
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }

            .inactive {
              div {
                width: 6px;
                height: 6px;
                background: #fff;
                z-index: 1;
              }
            }

            .tab-button {
              position: absolute;
              position: unset;
              display: flex;
              justify-content: flex-start;
              align-items: baseline;
              border-radius: 40px;
              padding: 10px;
              margin-bottom: 20px;
              margin-inline-start: -13px;
            }

            .tab-button:hover {
              cursor: pointer;
            }

            .cloud-curve {
              display: none;
            }
            .storage-curve {
              display: none;
            }
            .edge-curve {
              display: none;
            }
          }
        }

        .features-wrapper {
          padding: 68px 5px 96px 5px;
          margin-inline-end: 12%;
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
        width: 100%;

        ::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          bottom: -150px;
          left: ${locale === "fa" ? "-70px" : "auto"};
          right: ${locale === "fa" ? "auto" : "-70px"};
          background: radial-gradient(
            circle,
            rgba(0, 185, 255, 1) 0%,
            rgba(255, 0, 0, 0) 60%
          );
          opacity: 0.3;
        }

        .image-wrapper {
          position: absolute;
          right: -60px;
          bottom: -80px;
          right: ${locale === "fa" ? "auto" : "-60px"};
          left: ${locale === "fa" ? "-60px" : "auto"};
        }

        img {
          width: 270px;
          height: 270px;
        }

        .image-active {
          display: block;
        }

        .image-inactive {
          display: none;
        }

        @keyframes imovement {
          from {
            transform: translateY(5vmin);
            opacity: 0;
          }
          to {
            transform: translateY(0vmin);
            opacity: 1;
          }
        }

        .image-movement {
          animation: imovement linear normal;
          animation-duration: 0.2s;
        }
      }

      @media screen and (max-width: 768px) {
        .product-tabs-fa {
          position: relative;
          margin-inline-start: auto;

          .tab-icon {
            border-radius: 50%;
            margin-inline-end: 20px;
            font-size: 15px;
          }

          .tab-line {
            position: absolute;
            border-left: 1px solid #2b2c40;
            height: 130px;
            top: 18px;
            right: 13px;
            z-index: 0;
          }

          .active {
            z-index: 1;
            div {
              width: 12px;
              height: 12px;
              box-shadow: 0px 3px 24px 3px #ff64b8bf;
              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
              transform: translate(-2px);
            }
            span {
              transform: scale(1) translate(-5px);
              font-size: 20px;

              background: linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          .inactive {
            div {
              width: 6px;
              height: 6px;
              background: #fff;
              z-index: 1;
            }
          }

          .tab-button {
            position: unset;
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            border-radius: 40px;
            padding: 0 10px 40px 10px;

            .icon {
              width: 66px;
              height: 66px;
            }
          }
          .tab-button:hover {
            cursor: pointer;
          }

          .cloud-icon {
            display: none;
          }
          .storage-icon {
            display: none;
          }
          .edge-icon {
            display: none;
          }
        }

        .product-image {
          display: none;
        }
      }
    `;
  }
);

export const ProductChartsStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        DarkBorderHigh,
        LightTextDarkLow,
        LightThemePrimary600,
        DarkTextMid,
        DarkTextLow,
        DarkThemePrimary500Light,
        DarkBGGrade3,
        DarkThemePrimary700,
      },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
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
        animation: ${locale === "fa" ? "movement-fa" : "movement"} linear normal;
        animation-duration: 0.1s;
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

          &-bar {
            min-height: 130px;
          }
        }

        &-sub {
          font-size: 12px;
          font-weight: 400;
          line-height: 23px;
          color: ${DarkTextLow};
        }
      }

      .flex-wrapper {
        display: flex;
        width: 96px;
        height: min-content;
      }

      .single-chart {
        width: 100%;
      }

      .circular-chart {
        display: block;
      }

      .circle-bg {
        fill: none;
        stroke: ${DarkBGGrade3};
        stroke-width: 8;
      }

      .circle {
        fill: none;
        stroke-width: 8;
        stroke-linecap: round;
      }

      .motion {
        animation: progress 1s ease-out forwards;
      }

      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
        }
      }

      .circular-chart.stroke .circle {
        stroke: ${DarkThemePrimary500Light};
      }

      .bar-graph-vertical .bar-container {
        position: relative;
        float: ${locale === "fa" ? "right" : "left"};
        margin-inline-end: 10px;
        height: 100px;
        width: 50px;
      }

      .bar-graph-vertical .bar {
        border-radius: 10px 10px 0 0;
        bottom: 0;
        position: absolute;
        width: 45px;
      }

      .bar-graph-two .bar::after {
        -webkit-animation: fade-in-text 2.2s 0.1s forwards;
        -moz-animation: fade-in-text 2.2s 0.1s forwards;
        animation: fade-in-text 2.2s 0.1s forwards;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        text-align: left;
        top: 24px;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .bar-graph-two .bar-one .bar {
        background-color: ${DarkThemePrimary700};
        -webkit-animation: show-bar-one-vertical 1.2s 0.1s forwards;
        -moz-animation: show-bar-one-vertical 1.2s 0.1s forwards;
        animation: show-bar-one-vertical 1.2s 0.1s forwards;
      }

      .bar-graph-two .bar-two .bar {
        background-color: ${DarkThemePrimary500Light};
        -webkit-animation: show-bar-two-vertical 1.2s 0.2s forwards;
        -moz-animation: show-bar-two-vertical 1.2s 0.2s forwards;
        animation: show-bar-two-vertical 1.2s 0.2s forwards;
      }

      @keyframes show-bar-one-vertical {
        0% {
          height: 0;
        }
        100% {
          height: 60%;
        }
      }

      @keyframes show-bar-two-vertical {
        0% {
          height: 0;
        }
        100% {
          height: 95%;
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
              transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
            }
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
        &-collapse {
          display: flex;
          flex-wrap: wrap;
        }

        .save-collapses {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .panel {
            background-color: ${DarkBGGrade2};
            border-radius: 12px;
            border: 1px solid ${DarkBorderHigh};
            width: 300px;
            margin: 10px;

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
