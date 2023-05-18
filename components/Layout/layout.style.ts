import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.main(
  ({
    theme: {
      colors: { DarkThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(89.94deg, #ffffff 40.64%, #f0f0f7 68.21%);

      color: ${DarkThemePrimary600};
    `;
  }
);
