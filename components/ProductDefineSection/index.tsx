import StyledWrapper from "./productDefineSection.style";
import ProductDefineCard from "./ProductDefineCard";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import SvgIcon from "../SvgIcon";

type Card = {
  title: string;
  desc: string;
};

interface DefineProductProps {
  cards: Card[];
}

export default function DefineSection({ cards }: DefineProductProps) {
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
      <div className="cards">
        <Swiper
          spaceBetween={50}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={2}
          centeredSlides={false}
          // onSlideChange={(e) => console.log("slide change", e)}
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
      </div>
    </StyledWrapper>
  );
}
