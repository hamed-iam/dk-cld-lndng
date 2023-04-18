import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.nav(
  ({
    theme: {
      colors: { LightTextDarkMid, LightTextDarkLow, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      @media (max-width: 930px) {
        display: none;
      }

      .nav {
        margin: 0 40px;
        color: ${LightTextDarkLow};
        font-weight: 400;
        font-size: 14px;
        position: relative;
        &-link {
          color: ${LightTextDarkLow};
        }
        .ant-select-selection-placeholder,
        .ant-select-selection-item {
          color: ${LightTextDarkLow};
          font-weight: 400;
          font-size: 14px;
        }

        &.docs {
          pointer-events: none;
          color: ${LightTextDarkLow};
          opacity: 0.5;
        }

        &.active {
          color: ${LightTextDarkMid};
          font-weight: 600;
          font-size: 14px;

          .ant-select-selection-placeholder,
          .ant-select-selection-item {
            color: ${LightTextDarkMid};
            font-weight: 600;
            font-size: 14px;
          }

          ::before {
            content: "";
            position: absolute;
            /* display: inline-block; */
            width: 6px;
            height: 6px;
            bottom: 0;
            left: 40%;
            background-color: ${LightThemePrimary600};
            border-radius: 50%;
          }
        }
      }
    `;
  }
);
