import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        DarkTextLightMid,
        LightNatural40,
        DarkBGGrade15,
        DarkBGGrade3,
        LightThemePrimary600,
        DarkTextLightHigh,
      },
      locale,
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
        max-width: 1100px;
        margin-inline: auto;
        width: min(90%, 100rem);
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
      }

      .about-header {
        &-super {
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
        }
        &-title {
          display: flex;

          h1 {
            margin: unset;
            color: ${DarkTextLightMid};
            font-size: clamp(40px, 4.7vw, 80px);
          }
        }
        &-sub {
          margin: unset;
          font-weight: 700;
          font-size: 16px;
          color: ${LightNatural100};
          span {
            color: ${LightNatural40};
          }
        }
      }
      .about-media {
        display: flex;
        flex-wrap: wrap-reverse;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
        gap: 12px;

        &-cards {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-height: 356px;
          max-width: 384px;
          align-items: center;
          width: 100%;

          .card-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: ${DarkBGGrade15};
            border: 2px solid ${DarkBGGrade3};
            max-height: 92px;
            height: min(90%, 100rem);
            margin: 5px;
            padding: 0 20px 0 20px;
            border-radius: 12px;
            width: 100%;

            &-title {
              color: ${DarkTextLightHigh};
            }
            &-link {
              color: ${LightThemePrimary600};
            }
          }
        }
        &-video {
          max-width: 676px;
          max-height: 356px;
          width: clamp(676px, 40vw, 676px);
          position: relative;

          video {
            border-radius: 12px;
          }

          .tag-frame-friendly {
            position: absolute;
            top: 50%;
            right: ${locale === "fa" ? "auto" : "16%"};
            left: ${locale === "fa" ? "16%" : "auto"};
          }

          .tag-frame-supportive {
            position: absolute;
            top: 73%;
            right: ${locale === "fa" ? "auto" : "13%"};
            left: ${locale === "fa" ? "13%" : "auto"};
          }

          .tag-frame-professional {
            position: absolute;
            top: 90%;
            right: ${locale === "fa" ? "auto" : "50%"};
            left: ${locale === "fa" ? "50%" : "auto"};
          }

          @media (max-width: 500px) {
            .tag-frame-friendly {
              display: none;
            }
            .tag-frame-supportive {
              display: none;
            }
            .tag-frame-professional {
              display: none;
            }
          }
        }
      }
    `;
  }
);

export const TagFrameStyleWrapper = styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      position: absolute;
      padding: 12px 24px 12px 24px;
      background: linear-gradient(
        89.74deg,
        rgba(203, 95, 242, 0.4) 0.2%,
        rgba(255, 90, 130, 0.4) 84.73%
      );
      display: flex;
      justify-content: center;
      backdrop-filter: blur(5px);
      box-shadow: -4px 8px 40px 0px #de5ebc4d;
      border-radius: 4px;

      .icon {
        &.icon-cornerTLIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          top: -8px;
          left: -1px;
        }
        &.icon-cornerTRIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          top: -8px;
          right: -1px;
        }
        &.icon-cornerBLIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          bottom: 6px;
          left: -1px;
        }
        &.icon-cornerBRIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          bottom: 6px;
          right: -1px;
        }
      }
    `;
  }
);
