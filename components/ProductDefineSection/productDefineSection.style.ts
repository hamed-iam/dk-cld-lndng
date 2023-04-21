import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 530px;
      border: 2px solid red;
      .cards {
        margin: 20% 0 0 50%;
        width: 60%;
        border: 2px solid blue;
        mask-image: gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 1)),
          to(rgba(0, 0, 0, 0))
        );
        -webkit-mask-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 1)),
          to(rgba(0, 0, 0, 0))
        );

        .actions {
          margin-top: 16px;
          display: flex;
          .icon {
            width: 18px;
            height: 18px;
          }
          .slide-btn {
            padding: 10px;
            display: flex;
            align-items: center;

            &.prev {
              margin-inline-end: 10px;
            }
          }
        }
      }
    `;
  }
);

export const StyledProductDefineCard = styled.div(
  ({
    theme: {
      colors: { LightThemePrimary20, LightTextDarkHigh, LightTextDarkMid },
    },
  }: ThemeStyledProps) => {
    return css`
      position: relative;
      max-width: 358px;
      min-height: 197px;
      border-radius: 12px;
      border: 1px solid ${LightThemePrimary20};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);
      padding: 32px 32px 40px 32px;

      .icon {
        width: 25px;
        position: absolute;
        top: 0;
        right: 10%;
      }

      .title {
        color: ${LightTextDarkHigh};
        font-weight: 700;
        font-size: 17px;
      }
      .desc {
        color: ${LightTextDarkMid};
        font-weight: 400;
        font-size: 14px;
      }
    `;
  }
);
