import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightTextLow,
        LightThemePrimary20,
        LightTextDarkMid,
        LightThemePrimary600,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      border: 2px solid red;
      min-height: 720px;
      width: 100%;
      border: 1px solid transparent;

      .container {
        display: flex;
        flex-wrap: wrap;
        max-width: 1360px;
        margin-inline: auto;
        width: min(90%, 100rem);
        height: 100%;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
      }

      .about-header {
        &-super {
          margin: unset;
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
        }
        &-title {
          display: flex;
          p {
            margin: unset;
            font-size: clamp(20px, 3.7vw, 64px);
            background: -webkit-linear-gradient(
              89.74deg,
              #cb5ff2 0.2%,
              #ff5a82 84.73%
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          h1 {
            margin: unset;
            font-size: clamp(20px, 3.7vw, 64px);
            background: -webkit-linear-gradient(
              214.56deg,
              #c4f1f7 28.58%,
              #3d88eb 82.41%
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        &-sub {
          margin: unset;
          font-weight: 700;
          font-size: 14px;
          color: ${LightTextLow};
        }

        &-action {
          display: flex;
          margin: 16px 0;

          .icon {
            width: 21px;
            height: 20px;
          }

          .contact-btn {
            display: flex;
            align-items: center;
            height: 46px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 1;
            gap: 5px;
          }
        }
      }
      .about-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;
        max-width: 1360px;
        height: 100%;
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
        gap: 12px;

        &-header {
          display: flex;
          flex-direction: column;
          /* justify-content: space-between; */
          max-height: 289px;
          max-width: 557px;
          /* align-items: center; */
          width: 100%;
        }
        &-video {
          width: 447px;
          height: 356px;
          /* width: clamp(312px, 40vw, 447px); */
          background-color: black;
          position: relative;
          border-radius: 16px;

          video {
            border-radius: 16px;
            overflow: hidden;
          }

          .tag-frame-friendly {
            position: absolute;
            top: 70%;
            right: 15%;
          }

          .tag-frame-supportive {
            position: absolute;
            top: 75%;
            left: -12%;
          }

          .tag-frame-professional {
            position: absolute;
            top: 90%;
            right: 30%;
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
      .about-links {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        .card-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: ${LightThemePrimary20};
          max-height: 60px;
          max-width: 340px;
          height: min(90%, 100rem);
          margin: 5px;
          padding: 12px 24px 12px 24px;
          border-radius: 12px;
          width: 100%;
          font-size: 12px;

          &-title {
            color: ${LightThemePrimary600};
          }
          &-link {
            color: ${LightTextDarkMid};
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
      /* width: max-content; */
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
