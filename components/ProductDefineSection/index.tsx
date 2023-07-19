import ProductDefineCard from "./ProductDefineCard";
import { Button, Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../SvgIcon";

import "swiper/css";
import "swiper/css/pagination";
import StyledWrapper from "./productDefineSection.style";
import { useTranslation } from "react-i18next";

type Card = {
  title: string;
  desc: string;
};

type Icon = {
  title: string;
  viewBox: string;
};

interface DefineProductProps {
  cards: Card[];
  superTitle: string;
  icon: Icon;
  title: string;
  desc: string;
}

export default function DefineSection({
  cards,
  superTitle,
  icon,
  title,
  desc,
}: DefineProductProps) {
  const swiperRef = useRef<any>();
  const { t } = useTranslation("common");

  const [isMobile, setIsMobile] = useState(false);

  // ! need to find a better solution for this. preferably with css only
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
  }, []);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
    // console.log("swiperRef prev ===>", swiperRef);
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <StyledWrapper>
      {/* gutter={[40, 16]} */}
      <Row className="container">
        <Col
          xl={{ span: 12 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="product-desc"
        >
          <p className="product-desc-super">{superTitle}</p>
          <h1 className="product-desc-heading">
            <span className="title-icon">
              <SvgIcon title={icon.title} viewBox={icon.viewBox} />
              <span>{title}</span>
            </span>
          </h1>
          <h2 className="product-desc-subheading">
            {t("define.sub-h1.0")}{" "}
            <span className="highlight">
              <span className="highlight-word">{t("define.sub-h1.1")} </span>
              {t("define.sub-h1.2")}
            </span>
          </h2>
          <p className="product-desc-subdesc">{desc}</p>

          <div className="product-desc-actions">
            <Button type="primary" className="start-btn">
              {t("define.action-start")}
            </Button>
            <Button className="contact-btn">
              {t("define.action-contact")}
              <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
            </Button>
          </div>
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className={`cards ${!isMobile ? "mobile" : ""}`}
        >
          <Swiper
            spaceBetween={16}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={isMobile ? 1.2 : 1.5}
            pagination={isMobile ? pagination : false}
            modules={[Pagination]}
            // {...(isMobile && { pagination, modules: [Pagination] })}
            centeredSlides={false}
          >
            {cards.map((card: Card, index) => (
              <SwiperSlide
                key={card.title}
                virtualIndex={index}
                style={{ paddingBottom: "40px" }}
              >
                <ProductDefineCard
                  key={card.title}
                  title={card.title}
                  desc={card.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <div className="actions">
              <Button onClick={handlePrevSlide} className="slide-btn prev">
                <SvgIcon title="leftArrowIcon" viewBox="0 0 18 19" />
              </Button>
              <Button onClick={handleNextSlide} className="slide-btn">
                <SvgIcon title="rightArrowIcon" viewBox="0 0 18 19" />
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </StyledWrapper>
  );
}
