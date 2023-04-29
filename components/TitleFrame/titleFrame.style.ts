import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      padding: 4px;
      /* width: max-content; */
      .icon {
        &.icon-cornerTLIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          top: -10px;
          left: 0;
        }
        &.icon-cornerTRIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          top: -10px;
          right: 0;
        }
        &.icon-cornerBLIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          bottom: 0;
          left: 0;
        }
        &.icon-cornerBRIcon {
          position: absolute;
          width: 9px;
          height: 9px;
          bottom: 0;
          right: 0;
        }
      }
    `;
  }
);
