import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.main(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css``;
  }
);
