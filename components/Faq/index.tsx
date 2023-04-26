import { useTranslation } from "next-i18next";
import StyledWrapper from "./faq.style";
import SvgIcon from "../SvgIcon";
import Image from "next/image";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Row, theme } from "antd";
import { PointerEvent, useState } from "react";
import Link from "next/link";

type FaqPropsType = {
  isNextStepShow?: boolean;
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

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

const Faq = ({ links, isNextStepShow = true }: FaqPropsType) => {
  const { t } = useTranslation("common");
  const [activePanel, setActivePanel] = useState(defaultState);
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 18,
    background: "#FFFFFF",
    maxWidth: "542px",
    borderRadius: 12,
    border: "1px solid #DADCED",
  };

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

        <div className="content">
          <div className="content-column">
            <Collapse
              bordered={false}
              defaultActiveKey={["0"]}
              expandIconPosition="end"
              onChange={handlePanelChange}
              accordion
              destroyInactivePanel
            >
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 1</h3>
                    {activePanel.panel1.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="1"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 2</h3>
                    {activePanel.panel2.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="2"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 3</h3>
                    {activePanel.panel3.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="3"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
          <div className="content-column">
            <Collapse
              bordered={false}
              defaultActiveKey={["0"]}
              onChange={handlePanelChange}
              accordion
              destroyInactivePanel
              expandIconPosition="end"
            >
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 4</h3>
                    {activePanel.panel4.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="4"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 5</h3>
                    {activePanel.panel5.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="5"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 6</h3>
                    {activePanel.panel6.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="6"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className="panel-header">
                    <h3>This is panel header 7</h3>
                    {activePanel.panel7.isHeaderSumShow && <p>{text}</p>}
                  </div>
                }
                key="7"
                style={panelStyle}
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>

        <div className="faq-contact">
          <SvgIcon title="divingMaskIcon" viewBox="0 0 21 20" />
          <p>Have any other question?</p>
          <Link href="/about">Contact Us</Link>
        </div>

        {isNextStepShow && (
          <div className="faq-next-step" onPointerMove={handlePointerMove}>
            <Row justify="space-between">
              <Col
                xs={24}
                sm={24}
                md={18}
                lg={18}
                xl={18}
                className="faq-next-step-title"
              >
                <div className="d-f align-c">
                  <h2>Do you know the next step?</h2>
                  <SvgIcon title="sirenIcon" viewBox="0 0 40 45" />
                </div>
                <p>
                  You Can Catch This Service Either Other Product of Digicloud
                  In 1 Minutes
                </p>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <div className="faq-actions">
                  <Button type="primary" className="faq-actions-tryout">
                    Try Edge Services
                  </Button>
                  <Button type="default" className="faq-actions-callback">
                    Request for Call Back
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        )}

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
