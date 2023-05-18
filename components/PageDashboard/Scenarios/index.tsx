import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StyledWrapper from "./scenarios.style";
import ScenarioCard from "./ScenarioCard";

const Scenarios = () => {
  const { t } = useTranslation("dashboard");

  const cards = [
    {
      id: 1,
      title: "Improved user experience and performance",
      desc: "Our Edge services, including DNS and CDN, help businesses improve the overall user experience and performance of their applications and services. By moving data and compute resources closer to users, businesses can reduce latency and improve response times, ultimately enhancing the user experience.",
      logo: { title: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
    },
    {
      id: 2,
      title: "Scalable infrastructure for growing businesses",
      desc: "With our Infrastructure as a Service (IaaS) solution, businesses can easily scale their infrastructure to meet the growing needs of their business. Our IaaS services provide a flexible and secure infrastructure that can be tailored to meet the specific needs of each business.",
      logo: { title: "divingMaskIcon", viewBox: "0 0 21 20" },
    },
    {
      id: 3,
      title: "Some Scenario or something",
      desc: "With our Infrastructure as a Service (IaaS) solution, businesses can easily scale their infrastructure to meet the growing needs of their business. Our IaaS services provide a flexible and secure infrastructure that can be tailored to meet the specific needs of each business.",
      logo: { title: "diamondEmojiIcon", viewBox: "0 0 48 48" },
    },
    {
      id: 4,
      title: "Im not even trying",
      desc: "With our Infrastructure as a Service (IaaS) solution, businesses can easily scale their infrastructure to meet the growing needs of their business. Our IaaS services provide a flexible and secure infrastructure that can be tailored to meet the specific needs of each business.",
      logo: { title: "spaceshipEmojiIcon", viewBox: "0 0 48 48" },
    },
    {
      id: 5,
      title: "Something important",
      desc: "With our Infrastructure as a Service (IaaS) solution, businesses can easily scale their infrastructure to meet the growing needs of their business. Our IaaS services provide a flexible and secure infrastructure that can be tailored to meet the specific needs of each business.",
      logo: { title: "divingMaskIcon", viewBox: "0 0 21 20" },
    },
  ];

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
    <StyledWrapper>
      <div className="container">
        <div className="scenarios-header">
          {/* <h1>{t("scenarios.h1")}</h1> */}
          <h2>
            Top 5 <span>business scenarios</span>
          </h2>
          <h3> for Digicloud</h3>
        </div>

        <div className="scenarios-content">
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
            {cards.map((card, index: number) => (
              <SwiperSlide
                key={card.title}
                virtualIndex={index}
                style={{ paddingBottom: "40px" }}
              >
                <ScenarioCard
                  title={card.title}
                  desc={card.desc}
                  logo={card.logo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Scenarios;
