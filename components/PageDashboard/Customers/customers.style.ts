import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightThemePrimary600,
        LightBGGrade15,
        LightNatural100,
        LightNatural400,
        LightTextDarkLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      border: 1px solid transparent;
      min-height: 1002px;

      background: ${LightBGGrade15};

      .container {
        width: min(90%, 74rem);
        margin-inline: auto;
        margin-top: 5%;

        .info {
          &-super {
            color: ${LightNatural100};
            font-weight: 400;
            font-size: 14px;
          }
          h3 {
            color: ${LightNatural400};
            font-weight: 700;
            /* font-size: 64px; */
            font-size: clamp(40px, 4.7vw, 64px);
            margin: unset;
            line-height: 1;
            span {
              background: linear-gradient(to right, #cb5ff2, #ff5a82);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &-sub {
            display: flex;
            align-items: center;
            p {
              margin: unset;
              font-weight: 700;
              font-size: clamp(24px, 4.7vw, 40px);
              color: ${LightNatural400};
              span {
                color: ${LightThemePrimary600};
              }
            }
            .icon {
              margin-inline-start: 5px;
              width: clamp(32px, 4.7vw, 48px);
            }
          }
          &-desc {
            color: ${LightTextDarkLow};
            font-weight: 400;
            font-size: 14px;
          }
        }

        .logos {
          min-height: 500px;

          /* common */
          .drag-ctr {
            /* @keyframes wiggle {
              0% {
                transform: rotate(0deg);
              }
              80% {
                transform: rotate(0deg);
              }
              85% {
                transform: rotate(5deg);
              }
              95% {
                transform: rotate(-5deg);
              }
              100% {
                transform: rotate(0deg);
              }
            } */
            position: relative;
            margin: 10px;
            .drag-item {
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              display: inline-block;
              /* animation: wiggle 2.5s;
              &:hover {
                animation: none;
              } */
            }
            .drag-area {
              width: 120px;
              height: 120px;
            }
          }

          /* logo containers */
          .digify-ctr {
            position: absolute;
            top: calc(20% + 10px);
            left: calc(50% - 50px);
            transform: translate(-50%, -50%);
            width: 140px;
            height: 120px;
            .drag-item {
              background-image: url("/assets/digify.png");
              width: 104px;
              height: 104px;
            }

            .drag-area {
              width: 140px;
              height: 120px;
            }

            @media (max-width: 550px) {
              top: calc(25% + 10px);
              left: calc(59% - 50px);
              .drag-item {
                width: 65px;
                height: 65px;
              }
              .drag-area {
                width: 75px;
                height: 75px;
              }
            }
          }

          .smartech-ctr {
            position: absolute;
            right: 10%;
            top: 40%;
            width: 120px;
            height: 120px;
            .drag-item {
              background-image: url("/assets/smartech.png");
              width: 104px;
              height: 104px;
            }

            .drag-area {
              width: 120px;
              height: 120px;
            }

            @media (max-width: 550px) {
              right: 2%;
              top: 40%;
              .drag-item {
                width: 56px;
                height: 56px;
              }
              .drag-area {
                width: 80px;
                height: 80px;
              }
            }
          }

          .pindo-ctr {
            width: 120px;
            height: 120px;
            position: absolute;
            left: 20%;
            bottom: 15%;
            .drag-item {
              background-image: url("/assets/pindo.png");
              width: 104px;
              height: 104px;
            }

            .drag-area {
              width: 120px;
              height: 120px;
            }
            @media (max-width: 550px) {
              left: 18%;
              bottom: 20%;
              .drag-item {
                width: 60px;
                height: 60px;
              }
              .drag-area {
                width: 70px;
                height: 70px;
              }
            }
          }
          .digistyle-ctr {
            width: 120px;
            height: 120px;
            position: absolute;
            left: 46%;
            bottom: 8%;
            .drag-item {
              background-image: url("/assets/digistyle.png");
              width: 104px;
              height: 104px;
            }

            .drag-area {
              width: 120px;
              height: 120px;
            }
            @media (max-width: 550px) {
              left: 41%;
              bottom: 17%;
              .drag-item {
                width: 75px;
                height: 75px;
              }
              .drag-area {
                width: 85px;
                height: 85px;
              }
            }
          }

          .digikala-ctr {
            width: 152px;
            height: 196px;
            position: absolute;
            top: 10%;
            right: 7%;
            .drag-item {
              background-image: url("/assets/digikala.png");
              width: 152px;
              height: 152px;
            }

            .drag-area {
              width: 152px;
              height: 196px;
            }
            @media (max-width: 550px) {
              top: 14%;
              right: 1%;
              .drag-item {
                width: 100px;
                height: 100px;
              }
              .drag-area {
                width: 120px;
                height: 146px;
              }
            }
          }
          .komoda-ctr {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            .drag-item {
              background-image: url("/assets/komoda.png");
              width: 136px;
              height: 136px;
            }

            .drag-area {
              width: 150px;
              height: 150px;
            }

            @media (max-width: 550px) {
              .drag-item {
                width: 85px;
                height: 85px;
              }
              .drag-area {
                width: 90px;
                height: 90px;
              }
            }
          }
          .fidibo-ctr {
            position: absolute;
            left: 15%;
            top: 30%;
            width: 120px;
            height: 120px;
            .drag-item {
              background-image: url("/assets/fidibo.png");
              width: 104px;
              height: 104px;
            }

            .drag-area {
              width: 120px;
              height: 120px;
            }

            @media (max-width: 550px) {
              left: 8%;
              top: 32%;
              .drag-item {
                width: 70px;
                height: 70px;
              }
              .drag-area {
                width: 80px;
                height: 80px;
              }
            }
          }
        }
      }
    `;
  }
);

export const SectionCTAStyledWrapper = styled.div(
  ({
    theme: {
      colors: { DarkTextLightHigh, DarkNatural300 },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 300px;
      .cta-container {
        margin-top: 5%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 5%;
        border-radius: 24px;

        background-image: url(/assets/__Card2.png);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

        h4 {
          color: ${DarkTextLightHigh};
          font-size: 26px;
          margin: unset;
          line-height: 1;
          span {
            font-size: 20px;
          }
        }

        p {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 32px;
          color: ${DarkTextLightHigh};
        }

        .cta-actions {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          &-account,
          &-more {
            margin: 5px;
            height: 36px;
            min-width: 189px;
            /* width: 100%; */
            font-weight: 700;
            font-size: 12px;
            @media (max-width: 500px) {
              width: 100%;
            }
          }

          &-more {
            background: transparent;
            border: 1px solid #2b2c40;
            color: ${DarkNatural300};
          }
        }
      }
    `;
  }
);
