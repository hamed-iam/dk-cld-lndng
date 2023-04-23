import StyledWrapper from "./productDefineSection.style";
import ProductDefineCard from "./ProductDefineCard";
import { Button, Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import SvgIcon from "../SvgIcon";

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

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
    // console.log("swiperRef prev ===>", swiperRef);
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
    // console.log("swiperRef next ===>", swiperRef);
  };

  return (
    <StyledWrapper>
      {/* gutter={[40, 16]} */}
      <Row  className="container">
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
            For{" "}
            <span className="highlight">
              <span className="highlight-word">All-Sized </span>
              Companies
            </span>
          </h2>
          <p className="product-desc-subdesc">{desc}</p>

          <div className="product-desc-actions">
            <Button type="primary" className="start-btn">
              Get Started
            </Button>
            <Button className="contact-btn">
              Contact Us
              <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
            </Button>
          </div>
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="cards"
        >
          <Swiper
            spaceBetween={16}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.5}
            centeredSlides={false}
          >
            {cards.map((card: Card, index) => (
              <SwiperSlide key={card.title} virtualIndex={index}>
                <ProductDefineCard
                  key={card.title}
                  title={card.title}
                  desc={card.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="actions">
            <Button onClick={handlePrevSlide} className="slide-btn prev">
              <SvgIcon title="leftArrowIcon" viewBox="0 0 18 19" />
            </Button>
            <Button onClick={handleNextSlide} className="slide-btn">
              <SvgIcon title="rightArrowIcon" viewBox="0 0 18 19" />
            </Button>
          </div>
        </Col>
      </Row>
    </StyledWrapper>
  );
}
