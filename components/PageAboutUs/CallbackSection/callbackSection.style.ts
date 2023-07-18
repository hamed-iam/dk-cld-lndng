import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        DarkThemePrimary10,
        LightBGGrade15,
        DarkThemePrimary20,
        LightTextDarkMid,
        DarkTextMid,
        LightTextDarkLow,
      },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
        height: 100%;
        margin-inline: auto;
        position: relative;
      }

      .callback-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background-color: ${LightBGGrade15};

        padding-top: calc(44px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        padding-bottom: calc(
          44px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
        padding-left: min(5%, 130px);
        padding-right: min(5%, 130px);

        .icon-wrapper {
          width: 72px;
          position: absolute;
          right: ${locale === "fa" ? "auto" : "-40px"};
          left: ${locale === "fa" ? "-40px" : "auto"};
          z-index: 1;
          bottom: 200px;

          &-up {
            display: block;
          }

          &-down {
            display: none;
          }

          @media screen and (max-width: 1200px) {
            top: -40px;
            left: 50%;

            &-up {
              display: none;
            }

            &-down {
              display: block;
            }
          }
        }
      }

      .products-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${DarkThemePrimary10};

        padding-top: calc(44px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        padding-bottom: calc(
          44px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
        padding-left: min(10%, 130px);
        padding-right: min(10%, 130px);
      }

      .callback {
        height: 100%;
        display: flex;
        flex-direction: column;
        max-width: 430px;

        &-title {
          display: flex;
          align-items: center;
          h1 {
            margin: unset;
            line-height: 1;
            font-weight: 700;
            font-size: clamp(32px, 4.7vw, 40px);
            color: ${DarkThemePrimary20};
          }
        }
        p {
          color: ${LightTextDarkMid};
          font-weight: 400;
          font-size: 15px;
          width: 100%;
        }
        Input {
          margin-bottom: 20px;
          padding: 8px, 16px, 8px, 16px;
        }
        TextArea {
          margin-bottom: 20px;
          padding: 8px, 16px, 8px, 16px;
        }
        .form-label {
          color: ${LightTextDarkLow};
        }
      }

      .products {
        background-color: ${DarkThemePrimary10};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 430px;
        width: 100%;

        &-card {
          &-title {
            display: flex;
            align-items: center;

            .icon {
              width: 48px;
              height: 48px;
            }

            h1 {
              margin: unset;
              line-height: 1;
              font-weight: 700;
              font-size: 18px;
              color: white;
            }

            h3 {
              margin-inline-start: 12px;
            }
          }

          &-seperator {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(8deg, #cb5ff2 0.2%, #ff5a82 84.73%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 6px 0 10px 0;
            font-weight: 400;
            font-size: 14px;
          }
        }

        p {
          color: ${DarkTextMid};
          font-weight: 400;
          font-size: 15px;
          width: 100%;
        }
      }

      @media screen and (max-width: 1200px) {
        .products-wrapper {
          align-items: center;
          width: 100%;
          padding-left: 5%;
          padding-right: 5%;
        }
        .callback-wrapper {
          align-items: center;
          padding-left: 5%;
          padding-right: 5%;
        }
      }
    `;
  }
);
