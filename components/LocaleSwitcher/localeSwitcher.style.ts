import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.nav(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      display: flex;
      align-items: center;
      border: 1px solid #dadced;
      border-radius: 8px;
      padding: 10px;
      max-width: 110px;
      height: 42px;

      .lang-flag {
        .icon {
          width: unset !important;
        }
        svg {
          width: 20px;
        }
      }
      .locale-select {
        .ant-select > .ant-select-selector {
          border: none;
        }
      }
    `;
  }
);
