import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Button, Col, Row } from "antd";
import TitleFrame from "@/components/TitleFrame";
import SvgIcon from "@/components/SvgIcon";

import StyledWrapper from "./share.style";

const Share = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col
            className="w-100 info-section"
            xl={{ span: 14 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className="info-section-title">
              <p className="info-section-title-super">{t("share.super-h1")}</p>

              <TitleFrame>
                <h2>
                  <span className="highlight">{t("share.h1-start")} </span>
                  {t("share.h1")}
                </h2>
              </TitleFrame>
            </div>
            <div className="info-section-desc">
              <p>{t("share.desc")}</p>
              {/* <SvgIcon title="foldedHandsEmojiIcon" viewBox="0 0 32 32" /> */}
            </div>
            <div className="info-section-action">
              <Button
                className="info-section-action-btn"
                type="primary"
                href="http://172.16.140.100:8080/digicloud-stage-public/documents/digicloud_Intro.pdf"
                download
                target="_blank"
              >
                <SvgIcon title="downloadIcon" viewBox="0 0 24 24" />
                {t("share.action")}
              </Button>
              <SvgIcon
                title="arrowDashboardSolutionsIcon"
                viewBox="0 0 153 68"
              />
            </div>
          </Col>
          <Col
            className="w-100 image-section"
            xl={{ span: 8 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Image
              src="/assets/shareSection.png"
              width={369}
              height={307}
              alt="share-section"
            />
          </Col>
        </Row>
      </div>
    </StyledWrapper>
  );
};

export default Share;
