import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: {
        DarkBorderMid,
        DarkTextLightMid,
        DarkTextLightLow,
        DarkBGGrade1,
        LightBrandingPrimary,
      },
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
        width: min(90%, 100rem);
        margin-inline: auto;

        .swiper-button-prev {
          /* the left 0 might cause bug in FA */
          /* left: 0; */
          background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.61094 10.0115C8.90845 10.4441 9.3622 10.9526 10.0095 11.6759L10.758 12.5125L10.0314 13.1626L9.26031 12.3009C8.64084 11.6086 8.14463 11.0541 7.80759 10.564C7.4586 10.0566 7.2428 9.56665 7.2428 9.00025C7.2428 8.43386 7.4586 7.94395 7.80759 7.4365C8.14463 6.94642 8.64084 6.3919 9.26031 5.69964L10.0314 4.83789L10.758 5.48805L10.0095 6.32458C9.3622 7.04791 8.90845 7.5564 8.61095 7.98899C8.3213 8.41015 8.2178 8.70694 8.2178 9.00025C8.2178 9.29357 8.3213 9.59036 8.61094 10.0115Z' fill='%23A4A9BD'/%3E%3C/svg%3E%0A") !important;
        }

        .swiper-button-next {
          /* the right 0 might cause bug in FA */
          /* right: 0; */
          background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.38986 7.98899C9.09236 7.5564 8.63861 7.04791 7.99135 6.32458L7.2428 5.48805L7.96937 4.83789L8.7405 5.69964C9.35997 6.3919 9.85618 6.94642 10.1932 7.4365C10.5422 7.94395 10.758 8.43386 10.758 9.00026C10.758 9.56665 10.5422 10.0566 10.1932 10.564C9.85618 11.0541 9.35997 11.6086 8.7405 12.3009L7.96937 13.1626L7.2428 12.5125L7.99135 11.6759C8.63861 10.9526 9.09236 10.4441 9.38986 10.0115C9.67951 9.59036 9.78301 9.29357 9.78301 9.00026C9.78301 8.70694 9.67951 8.41015 9.38986 7.98899Z' fill='%23A4A9BD'/%3E%3C/svg%3E%0A") !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: "";
        }

        .swiper-button-prev,
        .swiper-button-next {
          width: 36px;
          height: 36px;
          background-position: center;
          background-repeat: no-repeat;
          background-color: ${DarkBGGrade1};
          border-radius: 8px;
          border: 1px solid ${DarkBorderMid};
        }

        .swiper-pagination-bullet {
          width: 24px;
          height: 4px;
          border-radius: 10px;
          background: #54586C;
          opacity: 0.3;

          &-active {
            opacity: 1;
            background: #54586C;
          }
        }

        /* mask-image: gradient(
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
        ); */
      }
    `;
  }
);

export const SuccessStoryCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: {
        DarkBGGrade2,
        DarkBorderHigh,
        DarkTextLightHighest,
        DarkTextLightLow,
        DarkBGGrade4,
      },
    },
  }: ThemeStyledProps) => {
    return css`
      border-radius: 12px;
      background-color: ${DarkBGGrade2};
      border: 1px solid ${DarkBorderHigh};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);

      padding: calc(max(24px, 2.2vw)) calc(max(20px, 4vw))
        calc(max(24px, 2.2vw)) calc(max(20px, 4vw));
      max-width: 421px;
      min-height: 209px;
      h3 {
        color: ${DarkTextLightHighest};
        font-weight: 700;
        margin: unset;
        font-size: calc(22px + (6 / 100) * (100vw - 320px));
        font-size: clamp(22px, calc(22px + (6 / 100) * (100vw - 320px)), 28px);
      }
      p {
        color: ${DarkTextLightLow};
        font-weight: 400;
        font-size: 15px;
        margin: unset;
        margin-top: 8px;
      }
      .logo {
        width: 83px;
        background-color: ${DarkBGGrade4};
        height: 32px;
        padding: 8px;
        border-radius: 6px;
        margin-top: 32px;
        .icon {
          width: auto;
        }
      }
    `;
  }
);
