import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightNatural400,
        LightThemeInfo20,
        LightThemePrimary600,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 530px;
      max-height: 100%;
      width: 100%;
      overflow: hidden;

      /* border: 2px solid red; */

      .container {
        margin-inline: auto;
        width: min(90%, 100rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
      }

      @media screen and (max-width: 1360px) {
        .container {
          width: 100%;
          margin-inline: unset;
          margin-inline-end: 0;
          margin-inline-start: 5%;
        }
      }

      .product-desc {
        /* margin-inline-end: 50px; */

        &-super {
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
          margin: unset;
        }
        &-heading {
          display: flex;
          align-items: center;
          line-height: 1;
          color: ${LightNatural400};
          font-weight: 700;
          /* font-size: clamp(35px, 4.7vw, 64px); */
          font-size: clamp(30px, 4.7vw, 64px);

          margin: unset;
          line-height: 1.5;

          .icon {
            width: clamp(4vw, 72px, 10.2vw);
            height: clamp(4vw, 72px, 10.2vw);
            margin-inline-end: 10px;
          }
          .title-icon {
            display: flex;
          }
        }

        &-subheading {
          font-size: clamp(24px, 3.5vw, 48px);

          margin: unset;
          color: ${LightNatural400};

          .highlight {
            position: relative;
            z-index: 1;
            &-word {
              color: ${LightThemePrimary600};
            }

            ::before {
              content: "";
              position: absolute;
              width: 100%;
              bottom: 25%;
              height: 50%;
              z-index: -1;
              background-color: ${LightThemeInfo20};
            }
          }
        }
        &-subdesc {
          color: ${DarkTextLightLow};
          font-weight: 400;
          font-size: clamp(14px, 1.1vw, 15px);
          margin-inline-end: 40px;
          max-width: 567px;
        }

        &-actions {
          display: flex;
          margin: 16px 0;

          .icon {
            width: 24px;
            height: 24px;
          }
          .start-btn {
            width: 185px;
            height: 46px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            margin-inline-end: 8px;
          }

          .contact-btn {
            display: flex;
            align-items: center;
            height: 46px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 1;
          }
        }
      }

      .cards {
        &.mobile {
          mask-image: gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 1)),
            to(rgba(0, 0, 0, 0))
          );
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 1)),
            to(rgba(0, 0, 0, 0))
          );
        }
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
          .icon {
            width: 18px;
            height: 18px;
          }
          .slide-btn {
            padding: 10px;
            display: flex;
            align-items: center;

            &.prev {
              margin-inline-end: 10px;
            }
          }
        }
      }
    `;
  }
);

export const StyledProductDefineCard = styled.div(
  ({
    theme: {
      colors: { LightThemePrimary20, LightTextDarkHigh, LightTextDarkMid },
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      max-width: 358px;
      min-height: 197px;
      border-radius: 12px;
      border: 1px solid ${LightThemePrimary20};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);
      padding: 32px 32px 40px 32px;

      .icon {
        width: 25px;
        position: absolute;
        top: 0;
        right: 10%;
      }

      .title {
        color: ${LightTextDarkHigh};
        font-weight: 700;
        font-size: 17px;
      }
      .desc {
        color: ${LightTextDarkMid};
        font-weight: 400;
        font-size: 14px;
      }
    `;
  }
);
