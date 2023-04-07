import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { blue, background },
    },
  }: ThemeStyledProps) => {
    return css`
      padding: 24px 130px;
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-lang {
          display: flex;
          .icon {
            width: 200px;
          }
        }

        .page-links {
          display: flex;
          align-items: center;
            &-link{
                margin: 0 10px;
            }
        }
      }
    `;
  }
);
