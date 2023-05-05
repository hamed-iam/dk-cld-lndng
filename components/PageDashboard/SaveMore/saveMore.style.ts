import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        DarkTextLightMid,
        DarkBGGrade15,
        DarkBGGrade3,
        DarkNatural100,
        DarkThemeSuccess800,
        DarkTextLightLow,
        DarkTextLightHighest,
        DarkBorderHigh,
        DarkThemeInfo20,
        DarkThemeInfo10,
        DarkThemeInfo800,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      background-color: ${DarkBGGrade15};
      min-height: 670px;
      display: flex;
      align-items: center;
      .container {
        height: 100%;
        width: min(90%, 74rem);
        margin-inline: auto;

        &-row {
          flex-flow: wrap-reverse;
          .save-collapses {
            .panel {
              margin-bottom: 24px;
              background-color: ${DarkBGGrade3};
              border-radius: 12px;
              border: 1px solid ${DarkBorderHigh};
              &-desc {
                margin: unset;
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
                  border: 0.8px solid ${DarkThemeInfo800};
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
              font-weight: 700;
              font-size: 26px;
              min-height: 90px;
              align-items: center;
            }
            .ant-collapse-content {
              color: ${DarkTextLightMid};
              font-weight: 400;
              font-size: 14px;
            }
          }
          .save-info {
            &-super {
              font-weight: 400;
              font-size: 14px;
              color: ${DarkNatural100};
            }
            &-title {
              font-weight: 700;
              font-size: calc(
                72px + (24 / 100) * ((100vw - 320px) / (768 - 320))
              );
              color: ${DarkThemeSuccess800};
              margin: unset;
              line-height: 1;
            }

            .gradient-text {
              /* Fallback: Set a background color. */
              background-color: ${DarkThemeSuccess800};

              /* Create the gradient. */
              background-image: linear-gradient(
                45deg,
                ${DarkThemeSuccess800} 16.666%,
                #e16541 16.666%,
                #e16541 33.333%,
                #f18f43 33.333%,
                #f18f43 50%,
                #8b9862 50%,
                #8b9862 66.666%,
                #476098 66.666%,
                #476098 83.333%,
                #a7489b 83.333%
              );

              /* Set the background size and repeat properties. */
              background-size: 100%;
              background-repeat: repeat;

              /* Use the text as a mask for the background. */
              /* This will show the gradient as a text color rather than element bg. */
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              /* Animate the text when loading the element. */
              /* This animates it on page load and when hovering out. */
              animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
            }

            .gradient-text:hover {
              animation: rainbow-text-simple-animation 0.5s ease-in forwards;
            }

            /* Move the background and make it smaller. */
            /* Animation shown when entering the page and after the hover animation. */
            @keyframes rainbow-text-simple-animation-rev {
              0% {
                background-size: 650%;
              }
              40% {
                background-size: 650%;
              }
              100% {
                background-size: 100%;
              }
            }

            /* Move the background and make it larger. */
            /* Animation shown when hovering over the text. */
            @keyframes rainbow-text-simple-animation {
              0% {
                background-size: 100%;
              }
              80% {
                background-size: 650%;
              }
              100% {
                background-size: 650%;
              }
            }

            &-sub {
              color: ${DarkTextLightMid};
              font-weight: 700;
              font-size: 17px;
              display: flex;
              align-items: center;
              margin: unset;
              .icon {
                width: 40px;
                height: 40px;
              }
            }
            &-desc {
              color: ${DarkTextLightLow};
              font-weight: 400;
              font-size: 12px;
            }
            &-contact {
              color: ${DarkTextLightLow};
              font-weight: 400;
              font-size: 14px;
              a {
                font-weight: 700;
                font-size: 12px;
              }
            }
          }
        }
      }
    `;
  }
);
