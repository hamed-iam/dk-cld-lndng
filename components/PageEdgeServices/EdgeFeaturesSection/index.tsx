import { Button, Col, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../SvgIcon";

import "swiper/css";
import "swiper/css/pagination";
import StyledWrapper from "./featuresSection.style";
import EdgeFeaturesTable from "./EdgeFeaturesTable";
import { useTranslation } from "react-i18next";

type Icon = {
  title: string;
  viewBox: string;
};

interface DefineFeaturesProps {
  superTitle: string;
  desc: string;
}

export default function EdgeFeaturesSection({
  superTitle,
  desc,
}: DefineFeaturesProps) {
  const { t } = useTranslation("edge-services");

  return (
    <StyledWrapper>
      <Row className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">{superTitle}</p>
          <div style={{ display: "flex", flex: 1 }}>
            <div className="title-wrapper-title">
              <h1>{t("feature-section.title.h1")}</h1>
              <span className="title-rest">
                {t("feature-section.title.rest")}
              </span>
            </div>
          </div>
          <h2 className="title-wrapper-subheading">
            {t("feature-section.title.subheading")}{" "}
            <span className="highlight">
              <span className="highlight-word">
                {t("feature-section.title.subheading-highlight")}
              </span>
            </span>
          </h2>
          <div className="title-wrapper-sub">
            <p>{desc}</p>
            <SvgIcon title="arrowCloudBenefitsIcon" viewBox="0 0 70 78" />
          </div>
        </div>
      </Row>
      <Row className="container">
        <EdgeFeaturesTable />
      </Row>
    </StyledWrapper>
  );
}
