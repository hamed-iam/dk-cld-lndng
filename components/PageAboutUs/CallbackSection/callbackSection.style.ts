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
    },
  }: ThemeStyledProps) => {
    return css`
      .callback {
        background-color: ${LightBGGrade15};
        height: 100%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        padding: 10%;

        &-title {
          display: flex;
          align-items: center;
          h1 {
            margin: unset;
            line-height: 1;
            margin-top: 7px;
            font-weight: 700;
            font-size: 40px;
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
      .seperator {
        background-color: red;
        background-image: -webkit-linear-gradient(
          180deg,
          ${DarkThemePrimary10} 50%,
          ${LightBGGrade15} 50%
        );
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon-wrapper {
          position: absolute;
          z-index: 1;
          width: 72px;

          &-up {
            display: block;
          }

          &-down {
            display: none;
          }

          @media screen and (max-width: 500px) {
            &-up {
              display: none;
            }

            &-down {
              display: block;
            }
          }
        }
      }
      .products {
        background-color: ${DarkThemePrimary10};
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 10%;

        &-card {
          &-title {
            display: flex;
            align-items: center;
            gap: 12px;

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
          }

          &-seperator {
            display: flex;
            align-items: center;
            justify-content: center;
            background: -webkit-linear-gradient(
              89.74deg,
              #cb5ff2 0.2%,
              #ff5a82 84.73%
            );
            background-clip: text;
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
    `;
  }
);
