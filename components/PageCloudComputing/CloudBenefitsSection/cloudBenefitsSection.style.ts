import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        LightNatural400,
        LightThemePrimary5,
        LightNatural100,
        LightThemePrimary600,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 818px;
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
          &-super {
            color: ${LightNatural100};
          }
          h3 {
            margin: unset;
            line-height: 1;
            font-size: clamp(24px, 4.7vw, 48px);
            color: ${LightNatural400};
            span {
              color: ${LightThemePrimary600};
            }
          }
          h2 {
            margin: unset;
            color: ${LightNatural400};
            font-size: clamp(48px, 4.7vw, 88px);
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

            .icon {
              width: 80px;
              height: 50px;
              margin-inline-start: 50px;

              @media (max-width: 850px) {
                display: none;
              }
            }
          }
        }
        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;
        }
      }
    `;
  }
);

export const CloudBenefitCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: { LightTextDarkHigh, LightNatural100 },
    },
  }: ThemeStyledProps) => {
    return css`
      max-width: 350px;
      min-height: 144px;
      background-color: #ffffff;
      box-shadow: 0px 2px 24px -4px rgba(71, 93, 146, 0.2);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 12px;

      .card-title {
        h5 {
          margin: unset;
          font-weight: 600;
          font-size: 16px;
          color: ${LightTextDarkHigh};
        }
        .icon {
          margin-inline-end: 10px;
          width: 32px;
          height: 32px;
        }
        display: flex;
        align-items: self-end;
      }
      .card-desc {
        margin: unset;
        font-weight: 400;
        font-size: 13px;
        color: ${LightNatural100};
      }
    `;
  }
);
