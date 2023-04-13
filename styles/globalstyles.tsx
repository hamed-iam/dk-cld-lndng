import { createGlobalStyle, css } from "styled-components";
import { ThemeStyledProps } from "./themes";

const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      colors: { background },
    },
  }: ThemeStyledProps) => {
    return css`
      html,
      body {
        background-color: ${background};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      * {
        box-sizing: border-box;
      }

      /* BURGER MENU */

      .burger-menu {
        .ant-drawer-wrapper-body {
          .ant-drawer-body {
            .menu-container {
              .page-links {
                display: flex;
                flex-direction: column;
                width: 100%;

                &-btn {
                  all: unset;
                  cursor: pointer;
                  margin: 8px 0;
                  a {
                    color: #73798f;
                  }
                  &.docs {
                    pointer-events: none;
                    a {
                      color: #a4a7b3;
                    }
                  }
                }

                &-link {
                  display: flex;
                  align-items: center;
                  min-height: 52px;
                  width: 100%;
                  padding: 10px;
                  border: 1px solid #dadced;
                  border-radius: 8px;
                }
              }

              .burger-menu-products {
                background: transparent;

                .ant-collapse-item .ant-collapse-header {
                  color: #73798f;
                }
                margin: 8px 0;
                .products-container {
                  margin: 16px 0;
                  &:first-child,
                  &:last-child {
                    margin: unset;
                  }
                  .ant-collapse-item .ant-collapse-header {
                    color: #73798f;
                    background-color: transparent;
                  }
                }
                .product-btn {
                  all: unset;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    `;
  }
);

export default GlobalStyle;
