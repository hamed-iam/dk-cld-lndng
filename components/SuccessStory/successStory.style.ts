import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { DarkTextLightMid, DarkTextLightLow, LightBrandingPrimary },
    },
  }: ThemeStyledProps) => {
    return css`
      min-height: 846px;
      background-color: #09091a;
      border: 1px solid #09091a;
      .container {
        margin-inline: auto;
        width: min(90%, 100rem);
        margin-top: calc(24px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          24px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .success-header {
          max-width: 667px;
          &-super {
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 13px;
            background: #002a38;
            max-width: 110px;
            color: #67dade;
            padding: 6px 12px;
            border: 0.8px solid #0b495a;
            border-radius: 100px;
            align-items: center;
            p {
              margin: unset;
              height: 17px;
            }
          }
          &-superMain {
            margin: unset;
            font-weight: 700;
            font-size: calc(
              30px + (40 - 30) * ((100vw - 320px) / (1920 - 320))
            );

            color: ${DarkTextLightMid};
            line-height: 1;
          }
          &-main {
            margin: unset;
            font-weight: 700;
            font-size: calc(
              40px + (64 - 40) * ((100vw - 320px) / (1920 - 320))
            );

            /* linear gradient needed */
            color: #cb5ff2;
          }
          &-desc {
            font-weight: 400;
            font-size: 15px;
            margin: unset;
            color: ${DarkTextLightLow};
          }
          a {
            display: flex;
            align-items: end;
            font-weight: 700;
            font-size: 14px;
            color: ${LightBrandingPrimary};
            .icon {
              width: 24px;
              height: 24px;
              svg g path {
                fill: #3d88eb;
              }
            }
          }
        }

        .image-wrapper {
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
      .success-content {
      }
    `;
  }
);
