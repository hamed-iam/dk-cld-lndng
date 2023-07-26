import { Button, Col, Row } from "antd";
import StyledWrapper from "./edgePricingSection.style";
import SvgIcon from "../../SvgIcon";
import EdgePricingCard from "./EdgePricingCard";
import { useTranslation } from "next-i18next";

type Icon = {
  title: string;
  viewBox: string;
};

interface DefinePricingProps {
  superTitle: string;
  icon: Icon;
  desc: string;
}

export default function EdgePricingSection({
  superTitle,
  icon,
  desc,
}: DefinePricingProps) {
  const { t } = useTranslation("edge-services");

  const cards = [
    {
      title: t("pricing.cards.0.title"),
      subtitle: t("pricing.cards.0.subtitle"),
      desc: t("pricing.cards.0.desc"),
      background: "/assets/edgePricing1.jpg",
      items: [
        {
          title: t("pricing.cards.0.item-title.0"),
          status: true,
        },
        {
          title: t("pricing.cards.0.item-title.1"),
          status: false,
        },
        {
          title: t("pricing.cards.0.item-title.2"),
          status: false,
        },
        {
          title: t("pricing.cards.0.item-title.3"),
          status: true,
        },
        {
          title: t("pricing.cards.0.item-title.4"),
          status: true,
        },
      ],
    },
    {
      title: t("pricing.cards.1.title"),
      subtitle: t("pricing.cards.1.subtitle"),
      desc: t("pricing.cards.1.desc"),
      background: "/assets/edgePricing2.jpg",
      items: [
        {
          title: t("pricing.cards.1.item-title.0"),
          status: false,
        },
        {
          title: t("pricing.cards.1.item-title.1"),
          status: true,
        },
        {
          title: t("pricing.cards.1.item-title.2"),
          status: true,
        },
        {
          title: t("pricing.cards.1.item-title.3"),
          status: false,
        },
        {
          title: t("pricing.cards.1.item-title.4"),
          status: false,
        },
      ],
    },
    {
      title: t("pricing.cards.2.title"),
      subtitle: t("pricing.cards.2.subtitle"),
      desc: t("pricing.cards.2.desc"),
      background: "/assets/edgePricing3.jpg",
      items: [
        {
          title: t("pricing.cards.2.item-title.0"),
          status: true,
        },
        {
          title: t("pricing.cards.2.item-title.1"),
          status: false,
        },
        {
          title: t("pricing.cards.2.item-title.2"),
          status: false,
        },
        {
          title: t("pricing.cards.2.item-title.3"),
          status: true,
        },
        {
          title: t("pricing.cards.2.item-title.4"),
          status: true,
        },
      ],
    },
  ];

  return (
    <StyledWrapper>
      <Row className="container">
        <Col
          xl={{ span: 21 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div className="title-wrapper">
            <p className="title-wrapper-super">{superTitle}</p>
            <div className="title-wrapper-title">
              <div className="icon-wrapper">
                <SvgIcon title={icon.title} viewBox={icon.viewBox} />
              </div>
              <h2>
                <span className="blur">
                  <span className="blur-word">
                    {t("pricing.title.h1-blur")}
                  </span>
                </span>
              </h2>
              <div className="title-wrapper-title-rest">
                {t("pricing.title.h1")}
              </div>
            </div>
            <div className="title-wrapper-sub">
              <p>{desc}</p>
            </div>
          </div>
        </Col>
        <Col
          lg={{ span: 3 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="title-wrapper-action"
        >
          <Button type="primary" className="start-btn">
            {t("pricing.action.get-started")}
          </Button>
        </Col>
      </Row>
      <Row className="container">
        <div className="cards-wrapper">
          {cards.map((card, index) => {
            return (
              <EdgePricingCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                background={card.background}
                items={card.items}
              />
            );
          })}
        </div>
      </Row>
    </StyledWrapper>
  );
}
