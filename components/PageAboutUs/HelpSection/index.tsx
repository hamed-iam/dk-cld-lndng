import SvgIcon from "@/components/SvgIcon";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import HelpCard from "./HelpCard";
import StyleWrapper from "./helpSection.style";

type Icon = {
  title: string;
  viewBox: string;
};

interface HelpSectionProps {
  superTitle: string;
  icon: Icon;
}

export default function HelpSection({ superTitle, icon }: HelpSectionProps) {
  const { t } = useTranslation("about");
  const { locale } = useRouter();
  const cards = [
    {
      icon: { name: "mailIcon", viewBox: "0 0 40 40" },
      title: t("define.cards.0.title"),
      desc: t("define.cards.0.desc"),
      footer: (
        <Link href="mailto:Support@digicloud.com">Support@digicloud.com</Link>
      ),
      className: "card-first-bg",
    },
    {
      icon: { name: "phoneIcon", viewBox: "0 0 41 40" },
      title: t("define.cards.1.title"),
      desc: t("define.cards.1.desc"),
      footer: <Link href="tel:02161930777">{t("define.cards.1.footer")}</Link>,
      className: "card-second-bg",
    },
    {
      icon: { name: "dateIcon", viewBox: "0 0 41 40" },
      title: t("define.cards.2.title"),
      desc: t("define.cards.2.desc"),
      footer: (
        <Link href="#callback" scroll={false}>
          {t("define.cards.2.footer")}
        </Link>
      ),
      className: "card-third-bg",
    },
  ];

  return (
    <StyleWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">{superTitle}</p>
          <div className="title-wrapper-heading">
            <span>{t("define.title.heading.0")}</span>
            <span className="title-icon">
              <SvgIcon title={icon.title} viewBox={icon.viewBox} />
            </span>
          </div>
          <h1>
            {t("define.title.heading.1")}{" "}
            <span className="highlight">
              <span className="highlight-word">
                {t("define.title.heading.2")}
              </span>
              {t("define.title.heading.3")}
            </span>
          </h1>
          <div className="title-wrapper-sub">
            <span className="highlight">
              {t("define.title.sub.0")}
              <span className="highlight-word">{t("define.title.sub.1")}</span>
              {t("define.title.sub.2")}
            </span>
            <span>
              <SvgIcon title="medalIcon" viewBox="0 0 16 16" />
            </span>
          </div>
        </div>
        <div className="cards-wrapper">
          <div className={locale === "fa" ? "emoji-fa" : "emoji"}>
            <Image
              src="/assets/emoji_astronaut-light.png"
              width={240}
              height={240}
              alt=""
              className="help-emoji"
            />
          </div>
          {cards.map((card, index) => {
            return (
              <HelpCard
                key={card.title}
                icon={{ name: card.icon.name, viewBox: card.icon.viewBox }}
                title={card.title}
                desc={card.desc}
                zIndex={cards.length - index}
                footer={card.footer}
                className={card.className}
              />
            );
          })}
        </div>
      </div>
    </StyleWrapper>
  );
}
