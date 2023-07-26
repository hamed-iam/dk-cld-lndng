import SvgIcon from "@/components/SvgIcon";
import StyledWrapper from "./cloudBenefitsSection.style";
import CloudBenefitCard from "./CloudBenefitCard";
import { useTranslation } from "next-i18next";

export default function CloudBenefitsSection() {
  const { t } = useTranslation("cloud-computing");
  const cards = [
    {
      icon: { name: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
      title: t("benefits.cards.0.title"),
      desc: t("benefits.cards.0.desc"),
    },
    {
      icon: { name: "playgroundIcon", viewBox: "0 0 33 32" },
      title: t("benefits.cards.1.title"),
      desc: t("benefits.cards.1.desc"),
    },
    {
      icon: { name: "trophyIcon", viewBox: "0 0 33 32" },
      title: t("benefits.cards.2.title"),
      desc: t("benefits.cards.2.desc"),
    },
    {
      icon: { name: "robotIcon", viewBox: "0 0 32 32" },
      title: t("benefits.cards.3.title"),
      desc: t("benefits.cards.3.desc"),
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">{t("benefits.h3")}</p>
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
              <CloudBenefitCard
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
