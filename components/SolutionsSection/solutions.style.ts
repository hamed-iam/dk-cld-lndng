import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightTextDarkMid,
        LightNatural100,
        LightNatural400,
        LightNatural40,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height:500px;
      margin-inline: auto;
      width: min(90%, 100rem);
      margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
      margin-bottom: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
      /* margin-bottom: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))); */

      .solution-title-wrapper {
        margin-inline-end: 55px;

        &-super {
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
        }
        &-title {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          line-height: 1;
          h1 {
            color: ${LightNatural400};
            font-weight: 700;
            /* font-size: 80px; */
            font-size: clamp(40px, 4.7vw, 80px);
            display: flex;
            flex-wrap: wrap;

            margin: unset;
            margin-inline-end: 8px;
          }
          .title-rest {
            font-weight: 700;
            font-size: clamp(28px, 2.5vw, 48px);
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            &_industry {
              /* need to be gradient */
              color: #cb5ff2;
              margin-inline-start: 8px;
            }
            .icon-wrapper {
              .icon {
                width: 40px;
              }
            }
          }
        }
        &-sub {
          color: ${LightNatural100};
          font-weight: 700;
          font-size: 16px;
          span {
            color: ${LightNatural40};
          }
        }
      }

      .solution-content-wrapper {
        display: flex;
        flex-wrap: wrap-reverse;
        &-slides {
          max-width: 756px;
          width: 100%;

          .swiper-pagination-bullet {
            width: 24px;
            height: 4px;
            border-radius: 10px;
            background: #a4a9bd;
            opacity: 0.3;

            &-active {
              opacity: 1;
              background: #a4a9bd;
            }
          }

          .actions {
            margin-top: 16px;
            display: flex;
            align-items: center;

            .position {
              margin: 0 5px;
              height: 15px;
              color: ${DarkTextLightLow};
              font-weight: 400;
              font-size: 14px;
            }

            .slide-btn {
              padding: 10px;
              display: flex;
              align-items: center;

              .icon {
                width: 18px;
                height: 18px;
              }
            }
          }
        }
        &-related {
          margin-inline-start: 24px;

          .icon {
            width: 64px;
          }

          .title {
            margin-top: 10px;
            margin-bottom: 10px;
            color: ${LightTextDarkMid};
            font-weight: 700;
            font-size: 17px;
          }
          ul {
            padding-inline-start: 20px;
            color: ${LightTextDarkMid};
            font-weight: 400;
            font-size: 15px;
          }
        }
      }
    `;
  }
);

export const SolutionCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: { LightTextDarkLow, LightBorderMid, LightTextDarkMid },
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      max-width: 756px;
      min-height: 263px;
      border-radius: 12px;
      border: 1px solid ${LightBorderMid};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);

      padding: calc(max(24px, 2.2vw)) calc(max(20px, 4vw))
        calc(max(24px, 2.2vw)) calc(max(20px, 4vw));

      h2 {
        color: ${LightTextDarkMid};
        font-weight: 700;
        margin: unset;
        font-size: calc(22px + (6 / 100) * (100vw - 320px));
        font-size: clamp(22px, calc(22px + (6 / 100) * (100vw - 320px)), 28px);
      }
      p {
        color: ${LightTextDarkLow};
        font-weight: 400;
        font-size: 15px;
        margin: unset;
      }
    `;
  }
);
