import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.aside(
  ({
    theme: {
      colors: {
        DarkTextLightLow,
        LightTextDarkLow,
        LightTextDarkMid,
        LightNatural400,
        LightBGGrade15,
        LightBGGrade3,
        LightThemePrimary600,
        DarkThemePrimary600,
        DarkTextLightHigh,
        DarkNatural300,
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
          margin-bottom: 58px;

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

        .faq-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;

          &-btns {
            border-radius: 8px;
            padding: 4px;
            background-color: ${LightBGGrade15};

            &-btn {
              border: 0;
              background: transparent;
              color: ${LightTextDarkMid};
              font-weight: 600;
              font-size: 14px;

              &.active {
                background-color: ${LightBGGrade3};
              }
            }
          }
        }

        .content {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          /* margin-top: 58px; */
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
          /*  background animation */
          --x: calc(var(--posX, 0) * 0.5px);
          --y: calc(var(--posY, 0) * 0.5px);
          background-image: linear-gradient(115deg, rgb(203 95 242), rgb(0 0 0)),
            radial-gradient(
              90% 100% at calc(50% + var(--x)) calc(0% + var(--y)),
              rgb(137 129 210),
              rgb(022 000 045)
            ),
            radial-gradient(
              100% 100% at calc(80% - var(--x)) calc(0% - var(--y)),
              rgb(176 26 186),
              rgb(036 000 000)
            ),
            radial-gradient(
              150% 210% at calc(100% + var(--x)) calc(0% + var(--y)),
              rgb(255 90 130),
              rgb(000 010 255)
            ),
            radial-gradient(
              100% 100% at calc(100% - var(--x)) calc(30% - var(--y)),
              rgb(80 30 215),
              rgb(000 200 255)
            ),
            linear-gradient(60deg, rgb(255 000 000), rgb(120 086 255));
          background-blend-mode: overlay, overlay, difference, difference,
            difference, normal;

          /*  */

          /* for ref, remove later */
          /*  background animation */
          /* --x: calc(var(--posX, 0) * 1px);
          --y: calc(var(--posY, 0) * 1px);
          background-image: linear-gradient(
              115deg,
              rgb(211 255 215),
              rgb(0 0 0)
            ),
            radial-gradient(
              90% 100% at calc(50% + var(--x)) calc(0% + var(--y)),
              rgb(200 200 200),
              rgb(022 000 045)
            ),
            radial-gradient(
              100% 100% at calc(80% - var(--x)) calc(0% - var(--y)),
              rgb(250 255 000),
              rgb(036 000 000)
            ),
            radial-gradient(
              150% 210% at calc(100% + var(--x)) calc(0% + var(--y)),
              rgb(020 175 125),
              rgb(000 010 255)
            ),
            radial-gradient(
              100% 100% at calc(100% - var(--x)) calc(30% - var(--y)),
              rgb(255 077 000),
              rgb(000 200 255)
            ),
            linear-gradient(60deg, rgb(255 000 000), rgb(120 086 255));
          background-blend-mode: overlay, overlay, difference, difference,
            difference, normal; */

          /*  */

          min-height: 161px;
          border-radius: 16px;

          &-title {
            .icon {
              width: 40px;
            }
            h2 {
              color: ${DarkTextLightHigh};
              font-weight: 700;
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

          .faq-actions {
            &-tryout,
            &-callback {
              margin: 5px;
              height: 36px;
              min-width: 171px;
              width: 100%;
              font-weight: 700;
              font-size: 12px;
            }

            &-callback {
              background: transparent;
              border: 1px solid #2b2c40;
              color: ${DarkNatural300};
            }
          }
        }

        .faq-links {
          display: flex;
          justify-content: space-between;
          margin-inline: auto;
          margin-top: 52px;
          max-width: 1100px;
          a {
            font-weight: 600;
            font-size: 15px;
            color: ${LightNatural400};
            display: flex;
            align-items: center;
            line-height: 1;
          }
          .anticon {
            margin-inline: 18px;
            margin-bottom: 3px;
            svg {
              fill: ${LightThemePrimary600};
            }
          }
        }
      }
    `;
  }
);
