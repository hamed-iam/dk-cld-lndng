import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

interface EdgePricingCardProps extends ThemeStyledProps {
  backgroundImage: string;
  active: boolean;
}

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural100,
        LightNatural400,
        LightThemePrimary5,
        LightThemePrimary600,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 530px;
      background-color: ${LightThemePrimary5};
      border: 1px solid ${LightThemePrimary5};

      .container {
        margin-inline: auto;
        width: min(90%, 100rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );

        .title-wrapper {
          margin-inline-end: 55px;

          &-super {
            color: ${LightNatural100};
            font-weight: 400;
            font-size: 14px;
            margin: unset;
          }
          &-title {
            display: flex;
            align-items: center;
            line-height: 1;
            display: flex;
            flex-wrap: wrap;
            h2 {
              margin: 24px 0 24px 0;
              color: ${LightNatural400};
              font-weight: 700;
              font-size: clamp(40px, 4.7vw, 48px);
              margin-inline-end: 8px;
            }
            &-rest {
              font-weight: 700;
              font-size: clamp(28px, 2.5vw, 48px);
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              color: ${LightNatural400};
            }
            .blur {
              position: relative;
              z-index: 1;
              &-word {
                color: ${LightThemePrimary600};
                filter: blur(3px);
                opacity: 0.7;
              }
            }
            .icon {
              width: clamp(2vw, 40px, 10.2vw);
              height: clamp(2vw, 40px, 10.2vw);
              margin-inline-end: 10px;
            }
          }
          &-sub {
            display: flex;
            align-items: center;

            p {
              margin: unset;
              color: ${LightNatural100};
              font-weight: 400;
              font-size: 15px;
            }
          }
          &-action {
            display: flex;
            align-items: center;
            margin: 24px 0 24px 0;

            .start-btn {
              width: 175px;
              height: 46px;
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              margin-inline-end: 8px;
            }
          }
        }

        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          // max-width: 1100px;
        }
      }
    `;
  }
);

export const EdgePricingCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: { background, DarkTextHigh, LightThemePrimary600, NeutralsN500 },
    },
    backgroundImage,
    active,
  }: EdgePricingCardProps) => {
    const defaultHeaderHeight = 60;
    const contentHeight = active ? 200 : 150;
    return css`
      .container {
        box-shadow: 0px 2px 24px -4px rgba(71, 93, 146, 0.2);
        border-radius: 12px;
        padding: 4px;
        margin: 12px;
        background-color: ${background};
        min-width: 312px;
      }

      .header {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        height: ${defaultHeaderHeight}px;
        overflow: hidden;
        transition: height 0.2s ease-in-out;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${backgroundImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        h1 {
          margin: unset;
          font-weight: 700;
          font-size: 24px;
          color: ${background};
          min-height: 62px;
          padding: 15px 20px 0 20px;
        }

        h4 {
          margin: unset;
          min-height: 70px;
          padding: 0 20px 0 20px;
          color: ${DarkTextHigh};
        }
      }

      .content {
        padding: 24px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        height: ${contentHeight}px;
        color: ${NeutralsN500};

        &-item {
          display: flex;
          padding-bottom: 12px;

          p {
            margin: unset;
          }
          .icon {
            margin-inline-end: 5px;
            width: 15px;
            height: 15px;
          }
        }
      }

      .header:hover ~ .content {
        height: ${contentHeight - defaultHeaderHeight}px;
      }

      .header:not(:hover) ~ .content {
        height: ${contentHeight}px;
      }

      .header:hover {
        height: ${defaultHeaderHeight + defaultHeaderHeight}px;
      }

      .view-button {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        color: ${LightThemePrimary600};

        .icon {
          width: 30px;
          height: 30px;
        }

        &-expand {
          .icon {
            transform: rotate(180deg);
          }
        }

        &-collapse {
          .icon {
            transform: rotate(0deg);
          }
        }

        &:hover {
          cursor: pointer;
        }
      }

      @media screen and (max-width: 700px) {
        .header {
          height: ${2 * defaultHeaderHeight}px;
        }
      }
    `;
  }
);
