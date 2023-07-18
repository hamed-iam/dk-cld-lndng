import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

interface HelpCard extends ThemeStyledProps {
  zIndex: number;
}

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightNatural400,
        LightThemePrimary5,
        LightThemePrimary600,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 719px;
      background-color: ${LightThemePrimary5};
      border: 1px solid ${LightThemePrimary5};

      .container {
        margin-inline: auto;
        width: min(90%, 74rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );

        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 1360px) {
          .container {
            width: 100%;
            margin-inline: unset;
            margin-inline-end: 0;
            margin-inline-start: 5%;
          }
        }

        .title-wrapper {
          width: 100%;
          padding-bottom: 50px;

          @media screen and (max-width: 500px) {
            padding-bottom: 5px;
          }

          &-super {
            color: ${LightNatural100};
            font-weight: 400;
            font-size: 14px;
            margin: unset;
          }
          .title-wrapper-heading {
            display: flex;
            align-items: center;
            line-height: 1;
            color: ${LightNatural400};
            font-weight: 700;
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
              align-items: flex-end;
              gap: 10px;
            }
          }

          h1 {
            font-size: clamp(24px, 9vw, 96px);
            line-height: 1;

            margin: unset;
            color: ${LightNatural400};

            .highlight {
              position: relative;
              z-index: 1;
              margin: unset;

              &-word {
                background: linear-gradient(to right, #cb5ff2, #ff5a82);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
          &-sub {
            margin: unset;
            display: flex;
            align-items: center;
            color: ${DarkTextLightLow};
            font-weight: 400;
            font-size: clamp(16px, 1.1vw, 15px);
            margin-inline-end: 40px;
            max-width: 567px;
            line-height: 2;

            .highlight {
              &-word {
                color: ${LightThemePrimary600};
              }
            }
            .icon {
              width: 16px;
              height: 18px;
            }
          }
        }
        gap: calc(400px + (40% - 50vw));

        .cards-wrapper {
          position: relative;
          max-width: 1100px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

          .emoji {
            position: absolute;
            margin: 0 50px 0 50px;
            right: 10px;
            top: -15em;

            .help-emoji {
              max-width: 240px;
              height: auto;
            }

            @media screen and (max-width: 820px) {
              right: 10px;
              top: -12.5em;
              .help-emoji {
                max-width: 200px;
                height: auto;
              }
            }
          }

          .emoji-fa {
            position: absolute;
            margin: 0 50px 0 50px;
            left: 10px;
            top: -15em;

            .help-emoji {
              max-width: 240px;
              height: auto;
            }

            @media screen and (max-width: 820px) {
              left: 10px;
              top: -12.5em;
              .help-emoji {
                max-width: 200px;
                height: auto;
              }
            }
          }
        }
      }
    `;
  }
);

export const HelpCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        background,
        DarkBrandingNeon01,
        DarkTextHigh,
        LightThemePrimary800,
        LightThemePrimary600,
        DarkThemePrimary700,
        DarkTextLightHighest,
      },
    },
    zIndex,
  }: HelpCard) => {
    return css`
      box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
      margin: -7px;
      z-index: ${zIndex};
      border-radius: 12px;

      .card-first-bg {
        background-color: ${LightThemePrimary600};
      }

      .card-second-bg {
        background-color: ${LightThemePrimary800};
      }

      .card-third-bg {
        background-color: ${DarkThemePrimary700};
      }

      .card-wrapper {
        max-width: 350px;
        min-height: 144px;
        display: flex;
        align-items: flex-start;
        border-radius: 12px;
        padding: 28px 24px 28px 24px;

        .icon-wrapper {
          display: flex;
          align-items: self-end;
          margin: unset;
          .icon {
            margin-inline-end: 10px;
            width: 32px;
            height: 32px;
          }
        }
        .card-content {
          min-height: 200px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          h5 {
            margin: 0 0 5px 0;
            font-weight: 600;
            font-size: 16px;
            color: ${DarkTextLightHighest};
          }
          &-desc {
            margin: unset;
            font-weight: 400;
            font-size: 13px;
            color: ${DarkTextHigh};
          }
          &-link {
            font-weight: 700;
            font-size: 14px;
            line-height: 28px;
            color: ${DarkBrandingNeon01};
          }
        }
      }
    `;
  }
);
