import { useTranslation } from "next-i18next";
import StyledWrapper from "./saveMore.style";

import { Col, Collapse, Row } from "antd";
import Link from "next/link";
import SvgIcon from "@/components/SvgIcon";

const { Panel } = Collapse;

const SaveMore = () => {
  const { t } = useTranslation("dashboard");

  const payAsYouGoHeader = (
    <div className="panel-header payAsGo">
      <SvgIcon title="payAsYouGoIcon" viewBox="0 0 32 32" />
      <p>Pay as you go</p>
    </div>
  );

  const packagesHeader = (
    <div className="panel-header packages">
      <SvgIcon title="packagesIcon" viewBox="0 0 32 32" />
      <p>Packages</p>
    </div>
  );

  return (
    <StyledWrapper>
      <div className="container">
        <Row className="container-row" gutter={[32, 32]}>
          <Col
            className="w-100 save-collapses"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              accordion
            >
              <Panel header={payAsYouGoHeader} key="1" className="panel">
                <p className="panel-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="panel-tags">
                  <span>Object Storage</span>
                  <span>Cloud Computing</span>
                </div>
              </Panel>
              <Panel header={packagesHeader} key="2" className="panel">
                <p className="panel-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="panel-tags">
                  <span>Object Storage</span>
                  <span>Cloud Computing</span>
                </div>
              </Panel>
            </Collapse>
          </Col>
          <Col
            className="w-100 save-info"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <p className="save-info-super">{t("save.super-h1")}</p>
            <h2 className="save-info-title gradient-text">{t("save.h1")}</h2>
            <div className="save-info-sub">
              <p>{t("save.sub-h1")}</p>{" "}
              <SvgIcon title="moneyEmojiIcon" viewBox="0 0 40 40" />
            </div>
            <p className="save-info-desc">{t("save.desc")}</p>
            <p className="save-info-contact">
              Have any question? <Link href="/about">Contact Us</Link>
            </p>
          </Col>
        </Row>
      </div>
    </StyledWrapper>
  );
};

export default SaveMore;
