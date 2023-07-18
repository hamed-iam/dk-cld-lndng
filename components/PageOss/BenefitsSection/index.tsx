import SvgIcon from "@/components/SvgIcon";
import { useTranslation } from "react-i18next";
import StyledWrapper from "./benefitsSection.style";
import OssBenefitCard from "./OssBenefitsCard";

export default function OssBenefitsSection() {
  const { t } = useTranslation("oss");
  const cards = [
    {
      icon: { name: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
      title: t("benefits.cards.0.title"),
      desc: t("benefits.cards.0.desc"),
    },
    {
      icon: { name: "flyingSaucerEmojiIcon", viewBox: "0 0 48 48" },
      title: t("benefits.cards.1.title"),
      desc: t("benefits.cards.1.desc"),
    },
    {
      icon: { name: "diamondEmojiIcon", viewBox: "0 0 48 48" },
      title: t("benefits.cards.2.title"),
      desc: t("benefits.cards.2.desc"),
    },
    {
      icon: { name: "robotIcon", viewBox: "0 0 32 32" },
      title: t("benefits.cards.3.title"),
      desc: t("benefits.cards.3.desc"),
    },
    {
      icon: { name: "diamondEmojiIcon", viewBox: "0 0 48 48" },
      title: t("benefits.cards.4.title"),
      desc: t("benefits.cards.4.desc"),
    },
    {
      icon: { name: "robotIcon", viewBox: "0 0 32 32" },
      title: t("benefits.cards.5.title"),
      desc: t("benefits.cards.5.desc"),
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">{t("benefits.super-h3")}</p>
          <h3>
            <span>{t("benefits.h3-colored")}</span> {t("benefits.h3")}
          </h3>
          <h2>{t("benefits.h2")}</h2>

          <div className="title-wrapper-sub">
            <p>{t("benefits.sub")}</p>
            <SvgIcon title="arrowCloudBenefitsIcon" viewBox="0 0 70 78" />
          </div>
        </div>
        <div className="cards-wrapper">
          {cards.map((card) => {
            return (
              <OssBenefitCard
                key={card.title}
                icon={{ name: card.icon.name, viewBox: card.icon.viewBox }}
                title={card.title}
                desc={card.desc}
              />
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
}
