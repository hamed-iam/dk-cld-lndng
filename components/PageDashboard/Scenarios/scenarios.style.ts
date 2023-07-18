import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { LightNatural400 },
      locale,
    },
  }: ThemeStyledProps) => {
    return css`
      background: linear-gradient(89.94deg, #ffffff 40.64%, #f0f0f7 68.21%);

      .container {
        min-height: 550px;
        width: min(90%, 74rem);
        margin-inline: auto;
        margin-top: 5%;
      }
      .swiper-button-next,
      .swiper-button-prev {
        transform: rotate(${locale === "fa" ? "180deg" : "0deg"});
      }
      .scenarios-header {
        h2 {
          font-size: clamp(32px, 4.7vw, 64px);
          color: ${LightNatural400};
          margin: unset;
          line-height: 1;
          span {
            background: linear-gradient(to right, #cb5ff2, #ff5a82);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        h3 {
          color: ${LightNatural400};
          font-size: clamp(32px, 4.7vw, 48px);
          margin: unset;
        }
      }

      .scenarios-content {
        margin-top: 48px;
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
          background-color: whitesmoke;
          border-radius: 8px;
          box-shadow: 0px 0px 4px -2px rgba(24, 39, 75, 0.1),
            0px 4px 4px -2px rgba(24, 39, 75, 0.06);
        }

        .swiper-pagination-bullet {
          width: 24px;
          height: 4px;
          border-radius: 10px;
          background: #a4a9bd;
          opacity: 0.3;

          &-active {
            opacity: 1;
            background: #a4a9bd;
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

export const ScenarioCardStyledWrapper = styled.div(
  ({
    theme: {
      colors: { LightBorderMid, LightTextMid, LightTextLow, DarkBGGrade4 },
    },
  }: ThemeStyledProps) => {
    return css`
      border-radius: 12px;
      /* background-color: linear-gradient(
        89.94deg,
        #ffffff 40.64%,
        #f0f0f7 68.21%
      ); */
      border: 1px solid ${LightBorderMid};
      box-shadow: 0px 0px 8px rgba(24, 39, 75, 0.06),
        0px 2px 16px -2px rgba(24, 39, 75, 0.02);
      padding: clamp(16px, 4.7vw, 40px);
      max-width: 421px;
      min-height: 331px;

      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .title {
        display: flex;
        align-items: center;
        h4 {
          color: ${LightTextMid};
          font-weight: 700;
          margin: unset;
          font-size: clamp(16px, 4.7vw, 22px);
        }
        .icon {
          width: 50px;
          height: 50px;
          margin-inline-end: 10px;
        }
      }
      p {
        color: ${LightTextLow};
        font-weight: 400;
        font-size: 15px;
        margin: unset;
        margin-top: 8px;
      }
    `;
  }
);
