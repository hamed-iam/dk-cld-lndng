import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        DarkBGGrade15,
        DarkThemePrimary500Light,
        DarkBasicWhite,
        DarkTextLightLow,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      background-color: ${DarkBGGrade15};
      margin-top: auto;
      padding: 40px 5%;
      .callback {
        padding: 24px 5%;
        background-color: ${DarkThemePrimary500Light};
        border-radius: 12px;

        &-title {
          width: 100%;
          display: flex;
          align-items: center;

          .icon {
            width: 32px;
          }
          p {
            margin: unset;
            font-weight: 700;
            font-size: 18px;
            color: ${DarkBasicWhite};
          }
        }
      }
      .info {
        margin: 56px 0;
        &-branding {
          .icon {
            width: 145px;
          }
          &-desc {
            color: ${DarkTextLightLow};
            font-weight: 400;
            font-size: 12px;
          }
          &-social {
            display: flex;
            .icon {
              width: 20px;
              margin: 0 3px;
            }
          }
        }
        &-products {
          &-title {
          }
          &-links {
            display: flex;
            flex-direction: column;
          }
        }

        &-contact {
          &-title {
          }
          &-links {
            display: flex;
            flex-direction: column;
          }
        }
      }
      .copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: 18px;
        }
      }
    `;
  }
);

export const FooterCallbackStyledWrapper = styled.div(
  ({
    theme: {
      colors: { DarkThemePrimary500Light },
    },
  }: ThemeStyledProps) => {
    return css`
      width: 100%;
      form {
        display: flex;
        align-items: center;
      }
    `;
  }
);
