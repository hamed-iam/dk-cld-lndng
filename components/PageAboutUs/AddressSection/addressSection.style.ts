import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightBGGrade3, DarkThemePrimary20, LightTextDarkMid },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 297px;
      background-color: ${LightBGGrade3};
      .map {
        width: 100%;
        height: 100%;
        background-image: url("/assets/map.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .address {
        height: 100%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        padding: 10%;
        &-title {
          display: flex;
          align-items: center;
          .icon {
            width: 32px;
            height: 32px;
          }
          h3 {
            margin: unset;
            line-height: 1;
            margin-top: 7px;
            font-weight: 700;
            font-size: 32px;
            color: ${DarkThemePrimary20};
          }
        }
        p {
          color: ${LightTextDarkMid};
          font-weight: 400;
          font-size: 15px;
          width: 65%;
        }
      }
    `;
  }
);

export const GoogleMapsStyledWrapper = styled.div(
  ({
    theme: {
      colors: {},
    },
  }: ThemeStyledProps) => {
    return css`
      height: 297px;
    `;
  }
);
