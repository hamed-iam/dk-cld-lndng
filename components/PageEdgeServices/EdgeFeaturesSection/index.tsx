import { Button, Col, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../SvgIcon";

import "swiper/css";
import "swiper/css/pagination";
import StyledWrapper from "./featuresSection.style";
import EdgeFeaturesTable from "./EdgeFeaturesTable";
import { useTranslation } from "react-i18next";

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
              <h1>{t("approach.h1-bold")}</h1>
              <span className="title-rest">{t("approach.h1")}</span>
            </div>
          </div>
          <h2 className="title-wrapper-subheading">
            {t("approach.h2")}{" "}
            <span className="highlight">
              <span className="highlight-word">{t("approach.h2-colored")}</span>
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
