import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: {
        DarkTextLightLow,
        LightTextDarkLow,
        LightTextDarkMid,
        DarkThemePrimary600,
        DarkTextLightHigh,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      border: 1px solid transparent;
      min-height: 821px;
      width: 100%;
      background: linear-gradient(162deg, #f7f7fa 19.94%, #ffffff 51.8%);
      .container {
        margin-inline: auto;
        height: 100%;
        width: min(90%, 100rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );

        .faq-header {
          display: flex;
          justify-content: center;
          align-items: flex-start;

          &-icon {
            width: 100%;
            max-width: 90px;
            overflow: auto;

            .icon {
              width: 95%;
              height: auto;
            }
          }

          &-title {
            margin-inline-start: 56px;
            h1 {
              font-weight: 700;
              font-size: 48px;
              margin: unset;
              /* needs to be gradient */
              display: flex;
              color: #cb5ff2;
              width: 100%;
            }
            max-width: 908px;
            &-sub {
              color: ${LightTextDarkLow};
              font-weight: 400;
              font-size: 15px;
              margin: 8px 0;
            }
            img {
              margin-inline-end: 16px;
            }

            @media only screen and (min-width: 485px) {
              img {
                display: none;
              }
            }
          }
          @media only screen and (max-width: 485px) {
            .faq-header-title {
              margin-inline-start: 0;
            }
          }

          @media only screen and (max-width: 485px) {
            .faq-header-icon {
              display: none;
            }
          }
        }

        .content {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 58px;
          margin-bottom: 30px;
          &-column {
            width: 100%;
            max-width: 542px;

            &:first-child {
              margin-inline-end: 8px;
            }
            &:last-child {
              margin-inline-start: 8px;
            }
            .ant-collapse {
              background: transparent;
              max-width: 542px;
              background: transparent;
              &-header {
                align-items: center;

                &-text {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }

            .panel-header {
              width: 100%;
              h3 {
                color: ${LightTextDarkMid};
                font-weight: 700;
                font-size: 15px;
                margin: unset;
              }

              p {
                overflow: hidden;
                margin: unset;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: ${LightTextDarkLow};
                font-weight: 400;
                font-size: 14px;
              }
            }
          }

          @media only screen and (max-width: 1225px) {
            &-column {
              &:first-child {
                margin-inline-end: 0;
              }
              &:last-child {
                margin-inline-start: 0;
              }
            }
          }
        }

        .faq-contact {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            margin: 0 5px;
            color: ${LightTextDarkLow};
            font-weight: 400;
            font-size: 14px;
          }
          a {
            font-weight: 700;
            font-size: 12px;
            color: ${DarkThemePrimary600};
          }
          .icon {
            width: 20px;
          }
        }

        .faq-next-step {
          padding: 32px 5%;
          margin-inline: auto;
          margin-top: 80px;
          max-width: 1100px;
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

          min-height: 161px;
          border-radius: 16px;

          &-title {
            .icon {
              width: 40px;
            }
            h2 {
              color: ${DarkTextLightHigh};
              font-weight: 700;
              /* font-size: 26px; */
              font-size: calc(
                22px + (26 - 22) * ((100vw - 320px) / (1920 - 320))
              );
              margin: unset;
            }
            p {
              color: ${DarkTextLightLow};
              font-weight: 600;
              font-size: 15px;
              margin: unset;
            }
          }
        }
      }
    `;
  }
);
