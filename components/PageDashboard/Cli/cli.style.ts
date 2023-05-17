import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: {
        DarkThemeInfo800,
        DarkThemeInfo10,
        DarkBGGrade1,
        DarkBGGrade15,
        DarkBGGrade2,
        DarkNatural100,
        DarkTextLow,
        DarkTextMid,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: ${DarkBGGrade1};
      border: 1px solid ${DarkBGGrade1};
      min-height: 659px;

      .container {
        height: 100%;
        width: min(90%, 74rem);
        margin-inline: auto;
        margin-top: 5%;

        .info {
          border: 1px solid red;
          &-super {
            font-weight: 400;
            font-size: 14px;
            color: ${DarkNatural100};
          }
          &-title {
            max-width: 60%;
            h2 {
              color: red;
              line-height: 0.9;
              margin: unset;
              font-weight: 700;
              font-size: 216px;
              max-height: 172px;
              /* font-size: clamp(154px, 4.7vw, 216px); */

              background: linear-gradient(
                210.39deg,
                rgba(196, 241, 247, 0.8) 13.11%,
                rgba(61, 136, 235, 0.8) 89.79%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            @media (max-width: 1200px) {
              max-width: 30%;
            }
            @media (max-width: 1100px) {
              h2 {
                font-size: 180px;
                max-height: 150px;
              }
            }
            @media (max-width: 980px) {
              h2 {
                font-size: 154px;
                max-height: 140px;
              }
            }
          }
          &-sub {
            margin-top: 25px;
            display: flex;
            align-items: center;
            h4 {
              font-weight: 600;
              font-size: 36px;
              margin: unset;
              line-height: 0.9;
              span {
                background: linear-gradient(to right, #cb5ff2, #ff5a82);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
            .icon {
              width: 32px;
              height: 32px;
              margin-bottom: 10px;
            }
          }
          &-desc {
            font-weight: 400;
            font-size: 14px;
            color: ${DarkTextLightLow};
          }
          &-tags {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 12px;
            span {
              line-height: 1;
              background-color: ${DarkThemeInfo10};
              color: ${DarkThemeInfo800};
              border: 0.7px solid ${DarkThemeInfo800};
              border-radius: 100px;
              padding: 8px 12px 5px 12px;
              font-weight: 600;
              font-size: 13px;
              &:first-child {
                margin-inline-end: 5px;
              }
            }
          }
        }
        .cli {
          border: 1px solid purple;

          .code-sample {
            background-color: ${DarkBGGrade15};
            border: 1px solid #36384a;
            border-radius: 12px;

            &-tabs {
              background-color: ${DarkBGGrade2};
              border-bottom: 1px solid #36384a;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 12px 12px 0 0;
              transition: all 1s ease-in-out;
              &-btn {
                color: ${DarkTextLow};
                font-size: 15px;
                &.active {
                  color: ${DarkTextMid};
                  /* font-weight: 700; */
                }
              }
            }

            pre {
              font-size: 14px;
              margin: unset;
              color: ${DarkTextLow};
              border-radius: 12px;

              code {
                &:last-child {
                  .line-number {
                    border-radius: 0 0 0 12px;
                  }
                }
              }
              .line-number {
                display: inline-block;
                width: 50px;
                background-color: ${DarkBGGrade2};
                text-align: end;
                padding-inline-end: 10px;
              }
            }
          }
        }
      }
    `;
  }
);
