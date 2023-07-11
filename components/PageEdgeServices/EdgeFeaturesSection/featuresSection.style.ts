import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural100, LightNatural400, LightThemePrimary5 },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 530px;
      background-color: ${LightThemePrimary5};
      border: 1px solid ${LightThemePrimary5};

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
          flex-wrap: wrap;
          align-items: baseline;
          line-height: 1;

          h1 {
            color: ${LightNatural400};
            font-weight: 700;
            font-size: clamp(40px, 4.7vw, 80px);
            display: flex;
            flex-wrap: wrap;

            margin: unset;
            margin-inline-end: 8px;
          }
          .title-rest {
            font-weight: 700;
            font-size: clamp(26px, 2.5vw, 48px);
            display: flex;
            align-items: center;
            color: ${LightNatural400};
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

          .icon {
            width: 80px;
            height: 60px;
            margin-inline-start: 50px;

            @media (max-width: 850px) {
              display: none;
            }
          }
        }
        &-subheading {
          font-size: clamp(24px, 3.5vw, 48px);

          margin: unset;
          color: ${LightNatural400};

          .highlight {
            position: relative;
            z-index: 1;
            &-word {
              background: -webkit-linear-gradient(
                89.74deg,
                #cb5ff2 0.2%,
                #ff5a82 84.73%
              );
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }

      .container {
        margin-inline: auto;
        width: min(90%, 100rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
      }

      @media screen and (max-width: 1360px) {
        .container {
          // width: 100%;
          margin-inline: unset;
          margin-inline-end: 0;
          margin-inline-start: 5%;
        }
      }
    `;
  }
);

export const EdgeFeaturesTableStyledWrapper = styled.div(
  ({
    theme: {
      colors: { LightTextDarkHigh, LightNatural100 },
    },
  }: ThemeStyledProps) => {
    return css`
      margin-inline: auto;
      max-width: 1100px;
      border-radius: 12px;
      border-collapse: collapse;
      overflow: hidden;

      .table-wrapper {
        display: block;
      }

      .ant-table-thead .ant-table-cell {
        color: ${LightNatural100};
      }
      .ant-table-tbody .ant-table-cell {
        color: ${LightNatural100};

        .icon {
          width: 28px;
        }

        div {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .bold-column {
          color: ${LightTextDarkHigh};
        }
      }

      @media (max-width: 530px) {
        .table-wrapper {
          background-color: red;
          display: none;
        }
      }
    `;
  }
);

export const EdgeFeaturesTableMobileStyledWrapper = styled.div(
  ({
    theme: {
      colors: { LightThemePrimary5, LightThemeInfo600, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      display: none;

      .view-more-target {
        max-height: 0;
        margin: 0 10px 0 10px;
        overflow: hidden;
        border-radius: 16px;
        min-width: 312px;
        transition: all 0.5s ease-in-out;
      }

      .view-more-state:checked ~ .view-more-wrap .view-more-target {
        opacity: 1;
        max-height: 999em;
        margin: 10px 10px 20px 10px;
        box-shadow: 0px 2px 24px -4px #475d9233;
        border-radius: 16px;
      }

      .view-more-state:checked ~ .view-more-wrap:after {
        background-size: 0%;
      }
      .view-more-state:not(:checked) ~ .view-more-wrap:after {
        background-size: 100%;
      }

      .view-more-wrap {
        position: relative;
        display: block;
      }

      .view-more-wrap::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        display: inline-block;
        background: linear-gradient(1.6deg, #f0f6ff 27.71%, transparent 98.64%);
      }

      .view-fixed-target {
        margin: 10px 10px 20px 10px;
        border-radius: 16px;
        box-shadow: 0px 2px 24px -4px #475d9233;
      }

      .view-more-trigger {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: ${LightThemePrimary5};
        cursor: pointer;

        p {
          color: ${LightThemePrimary600};
        }

        .icon {
          width: 30px;
          height: 30px;
        }

        &-expand {
          .icon {
            transform: rotate(180deg);
          }
        }
      }

      h3 {
        margin: -5px 0 5px 0;
      }

      h4 {
        color: ${LightThemeInfo600};
        margin: 20px 0 5px 0;
      }

      @media screen and (max-width: 500px) {
        display: block;
      }
    `;
  }
);
