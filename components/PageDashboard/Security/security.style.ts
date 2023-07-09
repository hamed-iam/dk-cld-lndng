import styled, { css } from "styled-components";
import { ThemeStyledProps } from "@/styles/themes";

export default styled.div(
  ({
    theme: {
      colors: { DarkNatural100, LightTextLightLow },
    },
  }: ThemeStyledProps) => {
    return css`
      color: white;
      background: conic-gradient(
        from 180deg at 38.57% 50%,
        #101021 0deg,
        #171727 82.5deg,
        #40435d 180deg,
        #bdd7ff 360deg
      );
      display: flex;

      @media (max-width: 500px) {
        background: conic-gradient(
          from 270deg at 38.57% 36%,
          #101021 0deg,
          #171727 82.5deg,
          #40435d 180deg,
          #bdd7ff 360deg
        );
      }

      .container {
        height: 100%;
        width: min(90%, 74rem);
        margin-inline: auto;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-top: calc(60px + (80 - 24) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(
          60px + (80 - 24) * ((100vw - 320px) / (1920 - 320))
        );

        .title-wrapper {
          max-width: 428px;

          &-super {
            font-weight: 400;
            font-size: 14px;
            color: ${DarkNatural100};
          }

          &-heading {
            /* TODO: There is a DarkThemePrimary800 with different color */
            color: #8bbcfc;
            line-height: 0.9;
            font-weight: 700;
            h2 {
              margin: 10px 0 10px 0;
              font-size: 88px;
              font-size: clamp(55px, 5.7vw, 88px);
              max-height: 172px;
            }
            h3 {
              margin: unset;
              font-size: 32px;
              font-size: clamp(20px, 6.7vw, 32px);
              max-height: 172px;
            }
            .highlight-wrapper {
              background: linear-gradient(
                  89.74deg,
                  #cb5ff2 0.2%,
                  #ff5a82 84.73%
                ),
                linear-gradient(0deg, #8bbcfc, #8bbcfc);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          &-sub {
            font-size: 14px;
            font-weight: 400;
            line-height: 27px;
            letter-spacing: 0px;
            text-align: left;
            padding-top: 20px;
          }
        }
        .content {
          max-width: 592px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 40px;
        }
      }
      .data {
        &-title {
          margin: unset;
          padding: unset;
          display: flex;
          font-size: 40px;
          font-weight: bold;

          .icon {
            width: 5px;
            margin: 0 5px 0 5px;
          }
        }
        &-sub {
          font-size: 15px;
          font-weight: 600;
          color: ${LightTextLightLow};
          margin: 0 15px 0 15px;
        }
      }
    `;
  }
);
