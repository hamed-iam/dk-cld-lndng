import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import SvgIcon from "../SvgIcon";
import SuccessStoryCard from "./SuccessStoryCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StyleWrapper from "./successStory.style";

type Card = {
  title: string;
  desc: string;
  id: number;
  logo: {
    title: string;
    viewBox: string;
  };
};

interface SuccessStorySectionPropType {
  cards: Card[];
  mainTitle: string;
  desc: string;
  imageSrc: string;
}

export default function SuccessStorySection({
  cards,
  mainTitle,
  desc,
  imageSrc,
}: SuccessStorySectionPropType) {
  const swiperRef = useRef<any>();
  const [isMobile, setIsMobile] = useState(false);

  // ! better solution needed.
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

  return (
    <StyleWrapper>
      <div className="container">
        <div className="success-header">
          <div className="success-header-super">
            <p>Did You Know?</p>
          </div>
          <h3 className="success-header-superMain">
            Know about Customers Using
          </h3>
          <h2 className="success-header-main">{mainTitle}</h2>
          <p className="success-header-desc">{desc}</p>
          <Link href="/about">
            Request fo Call Back{" "}
            <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="image-wrapper"
        >
          <Image
            src={imageSrc}
            width="373"
            height="333"
            alt=""
          />
        </motion.div>
      </div>
      <div className="success-content">
        <Swiper
          spaceBetween={12}
          navigation={!isMobile}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={isMobile ? 1.2 : 2.5}
          pagination={isMobile ? pagination : false}
          modules={[Pagination, Navigation]}
          centeredSlides={false}
        >
          {cards.map((card: Card, index: number) => (
            <SwiperSlide
              key={card.id}
              virtualIndex={index}
              style={{ paddingBottom: "40px" }}
            >
              <SuccessStoryCard
                title={card.title}
                desc={card.desc}
                logo={card.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyleWrapper>
  );
}
