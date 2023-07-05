import Link from "next/link";
import { useTranslation } from "react-i18next";
import StyleWrapper from "./aboutUsSection.style";
import TagFrame from "./TagFrame";

export default function AboutUsSection() {
  const { t } = useTranslation("about");
  const links = [
    {
      title: t("aboutus.media.link.0.title"),
      label: t("aboutus.media.link.0.label"),
      url: "#",
    },
    {
      title: t("aboutus.media.link.1.title"),
      label: t("aboutus.media.link.1.label"),
      url: "#",
    },
    {
      title: t("aboutus.media.link.2.title"),
      label: t("aboutus.media.link.2.label"),
      url: "#",
    },
  ];

  return (
    <StyleWrapper>
      <div className="container">
        <div className="about-header">
          <p className="about-header-super">{t("aboutus.header.super")}</p>
          <div className="about-header-title">
            <h1>{t("aboutus.header.title")}</h1>
          </div>
          <p className="about-header-sub">{t("aboutus.header.sub")}</p>
        </div>
        <div className="about-media">
          <div className="about-media-cards">
            {links.map((link, index) => {
              return (
                <Link className="card-wrapper" key={index} href={link.url}>
                  <p className="card-wrapper-title">{link.title}</p>
                  <p className="card-wrapper-link">{link.label}</p>
                </Link>
              );
            })}
          </div>
          <div className="about-media-video">
            <video width="100%" height="100%" controls>
              <source
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
              This browser does not support video tag.
            </video>
            <div className="tag-frame-friendly">
              <TagFrame>
                <span>{t("aboutus.media.tag.0")}</span>
              </TagFrame>
            </div>
            <div className="tag-frame-supportive">
              <TagFrame>
                <span>{t("aboutus.media.tag.1")}</span>
              </TagFrame>
            </div>
            <div className="tag-frame-professional">
              <TagFrame>
                <span>{t("aboutus.media.tag.2")}</span>
              </TagFrame>
            </div>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
}
