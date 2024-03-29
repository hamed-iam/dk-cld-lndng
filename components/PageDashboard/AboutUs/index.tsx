import SvgIcon from "@/components/SvgIcon";
import { Button } from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { createRef, forwardRef, Ref, useRef } from "react";
import StyledWrapper from "./aboutUs.style";
import TagFrame from "./TagFrame";

interface AboutUsPropType {
  videoRef: React.Ref<HTMLVideoElement>;
}

const VideoWrapper = forwardRef(function Input(
  props,
  ref: Ref<HTMLVideoElement>
) {
  return (
    <video width="100%" height="100%" controls ref={ref}>
      <source
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
        type="video/mp4"
      />
      This browser does not support video tag.
    </video>
  );
});

const AboutUs = ({ videoRef }: AboutUsPropType) => {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();

  const cards = [
    {
      title: t("about.link.0.title"),
      link: t("about.link.0.link"),
      url: "/about#callback",
    },
    {
      title: t("about.link.1.title"),
      link: t("about.link.1.link"),
      url: "/about#callback",
    },
    {
      title: t("about.link.2.title"),
      link: t("about.link.2.link"),
      url: "/about#callback",
    },
  ];

  return (
    <StyledWrapper>
      <div className="container" id="media">
        <div className="about-content">
          <div className="about-content-video">
            <VideoWrapper ref={videoRef} />
            <div className="tag-frame-friendly">
              <TagFrame>
                <span>{t("about.tag.0")}</span>
              </TagFrame>
            </div>
            <div className="tag-frame-supportive">
              <TagFrame>
                <span>{t("about.tag.1")}</span>
              </TagFrame>
            </div>
            <div className="tag-frame-professional">
              <TagFrame>
                <span>{t("about.tag.2")}</span>
              </TagFrame>
            </div>
          </div>
          <div className="about-content-header">
            <p className="about-header-super">{t("about.super-h1")}</p>
            <div className="about-header-title">
              <h1>{t("about.h1")}</h1>
              <p>_</p>
            </div>
            <p className="about-header-sub">{t("about.sub-h1")}</p>
            <div className="about-header-action">
              <Button
                className="more-btn"
                href={locale === "fa" ? "/fa/about" : "/en/about"}
              >
                {t("about.action")}
                <SvgIcon title="moreAboutUsArrowIcon" viewBox="0 0 20 21" />
              </Button>
            </div>
          </div>
        </div>
        <div className="about-links">
          {cards.map((card, index) => {
            return (
              <Link className="card-wrapper" key={index} href={card.url}>
                <p className="card-wrapper-title">{card.title}</p>
                <p className="card-wrapper-link">{card.link}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutUs;
