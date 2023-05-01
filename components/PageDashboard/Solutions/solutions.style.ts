import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural100, LightNatural400, LightThemePrimary600 },
    },
  }: ThemeStyledProps) => {
    return css`
      width: min(90%, 74rem);
      margin-inline: auto;

      .dashboard-solutions-header {
        /* border: 1px solid red; */
        &-super {
          color: ${LightNatural100};
          font-weight: 400;
          font-size: 14px;
        }
        .solution-title-container {
          display: flex;
          .solution-title-wrapper {
            display: flex;
            align-items: flex-start;
            h2 {
              max-width: 770px;
              margin: unset;
              /* font-size: calc(36px + (12 * ((100vw - 320px) / 1000))); */
              font-size: calc(36px + (9 * ((100vw - 320px) / 1000)));
              color: ${LightNatural400};
              span {
                color: ${LightThemePrimary600};
              }
            }
            .inner-crane {
              max-width: 100%;
              height: auto;
            }

            @media only screen and (min-width: 485px) {
              .inner-crane {
                display: none;
              }
            }
          }

          .solution-title-icons {
            display: flex;
            align-items: flex-end;

            .outer-crane {
              max-width: 100%;
              height: auto;
            }
            .icon-arrowDashboardSolutionsIcon {
              width: 147px;
              height: 72px;
              /* transform: rotate(-45deg); */
            }

            @media only screen and (max-width: 485px) {
              .icon-arrowDashboardSolutionsIcon,
              .outer-crane {
                display: none;
              }
            }
          }
        }
      }

      .dashboard-solutions-tabs {
        /* border: 1px solid blue; */
        margin: 48px 0;
        .content {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          margin-bottom: 30px;
          &-column {
            width: 100%;
            max-width: 401px;
            margin: 8px;

            .ant-collapse {
              background: transparent;
              max-width: 542px;
              .ant-collapse-header {
                align-items: center;

                h3 {
                  margin: unset;
                }
                p {
                  margin: unset;
                }

                &-text,
                p {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    `;
  }
);
