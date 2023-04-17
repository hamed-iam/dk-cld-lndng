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
      width: 100%;
      height: 42px;
      .ant-select{
        width: 100%;
      }

      .lang-flag {
        .icon {
          width: unset !important;
          height: 20px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .locale-select {
        align-items: baseline;
      }
    `;
  }
);
