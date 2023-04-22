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
      {/* <div className="cards">
        <Swiper
          spaceBetween={50}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={2}
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
        </div> */}
      {/* </div> */}

      <Row>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="product-desc"
        >
          <p className="product-desc-super">{superTitle}</p>
          <h1 className="product-desc-title">
            <span className="title-icon">
              <SvgIcon title={icon.title} viewBox={icon.viewBox} />
              {title}
            </span>
            For{" "}
            <span className="highlight">
              <span className="highlight-word">All-Sized </span>
              Companies
            </span>
          </h1>
          <p className="product-desc-sub">{desc}</p>
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="cards"
        >
          <Swiper
            spaceBetween={50}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
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
