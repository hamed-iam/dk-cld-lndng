import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        DarkBGGrade15,
        DarkNatural100,
        DarkTextLightLow,
        DarkThemePrimary10,
        DarkBorderMid,
        DarkTextLightMid,
        DarkBorderHigh,
        DarkBGGrade2,
        DarkTextLow,
        LightThemePrimary600,
        DarkTextLightHighest,
        LightTextDarkLow,
        DarkTextMid,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: ${DarkBGGrade15};
      min-height: 892px;

      .triangle {
        width: 100%;
        /* height: 150px; */
        border-bottom: solid 60px ${DarkBGGrade15};
        border-left: solid 50vw transparent;
        border-right: solid 50vw transparent;
        transform: translateY(-70px);
        z-index: 1;
      }
      .triangle-base {
        width: 100%;
        /* border-bottom: solid 15px ${DarkBGGrade15}; */
        transform: translateY(-70px);
        height: 10px;
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

      .container {
        width: min(90%, 74rem);
        /* margin-inline: auto; */
        /* margin-top: 5%; */
        /* margin-bottom: 5%; */
        height: 100%;
        /* width: min(90%, 74rem); */
        margin-inline: auto;
        margin-top: 5%;
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 900px;
          width: 100%;
          align-items: center;
          gap: 50px;

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
              margin-inline-end: 10px;

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
              .icon {
                width: 20px;
                height: 20px;
                margin-inline-end: 10px;
              }
            }
          }

          .charts-wrapper {
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
          }
        }

        .animation {
          position: absolute;
          margin-inline-start: -110px;
          img {
            width: 300px;
            height: 300px;
          }
        }
        .animation-fa {
          transform: rotate(180deg) rotateX(180deg);
          img {
            width: 300px;
            height: 300px;
          }
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

        &-row {
          display: flex;
          position: relative;

          .save-collapses {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .panel {
              margin-bottom: 24px;
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

          .image-wrapper {
            position: absolute;
            right: -150px;
            img {
              max-width: 336px;
              height: auto;
            }
          }

          .image-wrapper-fa {
            position: absolute;
            left: -150px;
            img {
              max-width: 336px;
              height: auto;
            }
          }

          @media screen and (max-width: 500px) {
            justify-content: center;
            .image-wrapper {
              display: none;
            }
          }
        }
      }
    `;
  }
);
