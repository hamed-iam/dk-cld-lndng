import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      padding: 4px;
      .icon {
        width: 9px;
        position: absolute;
        &.icon-cornerTLIcon {
          top: 0;
          left: 0;
        }
        &.icon-cornerTRIcon {
          top: 0;
          right: 0;
        }
        &.icon-cornerBLIcon {
          bottom: 0;
          left: 0;
        }
        &.icon-cornerBRIcon {
          bottom: 0;
          right: 0;
        }
      }
    `;
  }
);
