import { createGlobalStyle, css } from "styled-components";
import { ThemeStyledProps } from "./themes";
import localFont from "next/font/local";

const yekan = localFont({
  src: [
    {
      path: "../public/fonts/yekanbakh/300/yekanbakh-300.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/yekanbakh/400/yekanbakh-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/yekanbakh/500/yekanbakh-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/yekanbakh/600/yekanbakh-600.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/yekanbakh/800/yekanbakh-800.woff2",
      weight: "800",
    },
  ],
});

const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      colors: { background, LightTextDarkLow },
    },
  }: ThemeStyledProps) => {
    return css`
      :root {
        --yekan-font: ${yekan.style.fontFamily};
      }

      html,
      body {
        background-color: ${background};
        padding: 0;
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      * {
        box-sizing: border-box;
        font-family: var(--yekan-font);
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

                .ant-collapse-header {
                  padding: 12px;
                }

                .ant-collapse-item .ant-collapse-header {
                  color: #73798f;
                }
                .ant-collapse-content {
                  border-top: none;
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
                  width: 100%;
                  .icon {
                    width: 20px;
                    margin: 0 10px;
                    margin-top: 2px;
                  }
                  display: flex;
                  align-items: center;
                  &-link {
                    color: ${LightTextDarkLow};
                    font-weight: 400;
                    font-size: 15px;
                  }
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
