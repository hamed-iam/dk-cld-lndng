import { useTranslation } from "next-i18next";
import StyledWrapper from "./faq.style";
import SvgIcon from "../SvgIcon";
import Image from "next/image";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PointerEvent, useState } from "react";
import Link from "next/link";
import CloudComputingContent from "./CloudComputingContent";
import OSSContent from "./OSSContent";
import EdgeServicesContent from "./EdgeServicesContent";
import AboutContent from "./AboutContent";
import NextStep from "./NextStep";

type FaqPropsType = {
  isNextStepShow?: boolean;
  loc: "cloud-computing" | "oss" | "edge-services" | "about" | "dashboard";
  links: {
    next: {
      href: string;
      text: string;
    };
    back: {
      href: string;
      text: string;
    };
  } | null;
};

const defaultState = {
  panel1: {
    isHeaderSumShow: true,
    key: 1,
  },
  panel2: {
    isHeaderSumShow: true,
    key: 2,
  },
  panel3: {
    isHeaderSumShow: true,
    key: 3,
  },
  panel4: {
    isHeaderSumShow: true,
    key: 4,
  },
  panel5: {
    isHeaderSumShow: true,
    key: 5,
  },
  panel6: {
    isHeaderSumShow: true,
    key: 6,
  },
  panel7: {
    isHeaderSumShow: true,
    key: 7,
  },
};

const Faq = ({ links, isNextStepShow = true, loc }: FaqPropsType) => {
  const { t } = useTranslation("common");
  const [currentTab, setCurrentTab] = useState(
    loc === "dashboard" ? "cloud-computing" : loc
  );
  const [activePanel, setActivePanel] = useState(defaultState);

  const handlePanelChange = (panel: string[] | string) => {
    if (panel.length === 0) return setActivePanel(defaultState);
    const panelKey = +(panel as string[]).join("");
    setActivePanel((panel) => ({
      ...panel,
      [`panel${panelKey}`]: { key: panelKey, isHeaderSumShow: false },
    }));
  };

  // for handling background animation
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty("--posX", (x - l - w / 2).toString());
    el.style.setProperty("--posY", (y - t - h / 2).toString());
  };

  // ! fix type later
  const handleFaqProductTabChange = (tab: any) => {
    setCurrentTab(tab);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="faq-header">
          <div className="faq-header-icon">
            <SvgIcon title="lightBulbIcon" viewBox="0 0 94 149" />
          </div>

          <div className="faq-header-title">
            <div className="d-f align-c">
              <Image
                src="/assets/lightBulb.png"
                width={30}
                height={48}
                alt=""
              />
              <h1>{t("faq.h1")}</h1>
            </div>
            <p className="faq-header-title-sub">{t("faq.desc")}</p>
          </div>
        </div>

        {loc === "dashboard" && (
          <div className="faq-tabs">
            <div className="faq-tabs-btns">
              <Button
                onClick={() => handleFaqProductTabChange("cloud-computing")}
                className={`faq-tabs-btns-btn ${
                  currentTab === "cloud-computing" ? "active" : ""
                }`}
              >
                {t("faq.tabs.cloud.title")}
              </Button>
              <Button
                onClick={() => handleFaqProductTabChange("oss")}
                className={`faq-tabs-btns-btn ${
                  currentTab === "oss" ? "active" : ""
                }`}
              >
                {t("faq.tabs.oss.title")}
              </Button>
              <Button
                onClick={() => handleFaqProductTabChange("edge-services")}
                className={`faq-tabs-btns-btn ${
                  currentTab === "edge-services" ? "active" : ""
                }`}
              >
                {t("faq.tabs.edge.title")}
              </Button>
            </div>
          </div>
        )}

        {currentTab === "cloud-computing" && (
          <CloudComputingContent
            onPanelChange={handlePanelChange}
            activePanel={activePanel}
          />
        )}
        {currentTab === "oss" && (
          <OSSContent
            onPanelChange={handlePanelChange}
            activePanel={activePanel}
          />
        )}
        {currentTab === "edge-services" && (
          <EdgeServicesContent
            onPanelChange={handlePanelChange}
            activePanel={activePanel}
          />
        )}

        {loc === "about" && (
          <AboutContent
            onPanelChange={handlePanelChange}
            activePanel={activePanel}
          />
        )}

        <div className="faq-contact">
          <SvgIcon title="divingMaskIcon" viewBox="0 0 21 20" />
          <p>{t("faq.contact")}</p>
          <Link href="/about">{t("faq.contact-link")}</Link>
        </div>

        {isNextStepShow && <NextStep onPointerMove={handlePointerMove} />}

        {links && (
          <div className="faq-links">
            <Link href={links.back.href}>
              <ArrowLeftOutlined />
              {links.back.text}
            </Link>
            <Link href={links.next.href}>
              {links.next.text}
              <ArrowRightOutlined />
            </Link>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

export default Faq;
