import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      locale,
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      header {
        padding: 16px 24px;
        display: flex;
        align-items: center;

        .logo-lang {
          max-height: 56px;
          border: 2px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 100%;

          .icon {
            width: 109px;
          }
        }

        .page-links {
          &-link {
          }
        }
      }
    `;
  }
);
