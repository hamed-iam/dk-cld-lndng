import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { useTranslation } from "next-i18next";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleFrame from "../TitleFrame";
import SvgIcon from "../SvgIcon";
import SolutionCard from "./SolutionCard";

import "swiper/css";
import "swiper/css/pagination";

import StyledWrapper from "./solutions.style";
interface SolutionsSectionPropsType {
  cards: { title: string; desc: string }[];
}

const SolutionsSection = ({ cards }: SolutionsSectionPropsType) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>();

  const { t } = useTranslation("common");

  // ! need to find a better solution for this. preferably with css only
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
    setCurrentSlide(swiperRef.current.realIndex);
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
    setCurrentSlide(swiperRef.current.realIndex);
  };

  return (
    <StyledWrapper>
      <div className="solution-title-wrapper">
        <p className="solution-title-wrapper-super">
          {t("solutions.super-h1")}
        </p>
        <div style={{ display: "flex", flex: 1 }}>
          <TitleFrame>
            {/* {t("solutions.h1")} */}
            <div className="solution-title-wrapper-title">
              <h1>Solutions</h1>
              <span className="title-rest">
                for
                <span className="title-rest_industry">Industry</span>
                <div className="icon-wrapper">
                  <SvgIcon title="keyEmojiIcon" viewBox="0 0 40 40" />
                </div>
              </span>
            </div>
          </TitleFrame>
          <span> </span>
        </div>

        <p className="solution-title-wrapper-sub">
          Economical <span>and</span> Professional
        </p>
      </div>

      {/* <div>
        <p>{t("solutions.super-h1")}</p>
      </div>
      <div>
        <h1>{t("solutions.h1")}</h1>
      </div>
      <div>
        <p>{t("solutions.sub-h1")}</p>
      </div> */}
      <div className="solution-content-wrapper">
        <div className="solution-content-wrapper-slides">
          <Swiper
            spaceBetween={16}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            pagination={isMobile ? pagination : false}
            modules={[Pagination]}
            onTransitionEnd={(e) => setCurrentSlide(e.realIndex)}
            centeredSlides={false}
          >
            {cards.map((card, index: number) => (
              <SwiperSlide
                key={card.title}
                virtualIndex={index}
                style={{ paddingBottom: "40px" }}
              >
                <SolutionCard
                  key={card.title}
                  title={card.title}
                  desc={card.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <div className="actions">
              <Button
                onClick={handlePrevSlide}
                className="slide-btn prev"
                disabled={currentSlide === 0}
              >
                <SvgIcon title="leftArrowIcon" viewBox="0 0 18 19" />
              </Button>
              <p className="position">
                {currentSlide + 1} of {cards.length}
              </p>
              <Button
                onClick={handleNextSlide}
                className="slide-btn"
                disabled={currentSlide === cards.length - 1}
              >
                <SvgIcon title="rightArrowIcon" viewBox="0 0 18 19" />
              </Button>
            </div>
          )}
        </div>
        <div className="solution-content-wrapper-related">
          <SvgIcon title="officeEmojiIcon" viewBox="0 0 64 64" />
          <h3 className="title">Related Industry</h3>
          <ul>
            <li>Banking </li>
            <li> Education </li>
            <li> Media and Intertainment </li>
            <li> Retail</li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SolutionsSection;
