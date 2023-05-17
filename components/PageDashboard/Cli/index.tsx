import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { Button, Col, Row, notification } from "antd";
import TitleFrame from "@/components/TitleFrame";
import SvgIcon from "@/components/SvgIcon";

import StyledWrapper from "./cli.style";
import { useState } from "react";
import Link from "next/link";

const cloudCode = `digicloud instance create test --instance-type test`;

const edgeCode = `digicloud edge domain create test`;

const ossCode = `
                function greet(name) {
               console.log('Hello, ' + name + '!');
                }
                greet('World');`;

const codes: any = {
  cloud: cloudCode,
  edge: edgeCode,
  oss: ossCode,
};

const cloudCodeLines = cloudCode.trim().split("\n");
const cloudLineNumbers = Array.from(
  { length: cloudCodeLines.length },
  (_, index) => index + 1
);

const edgeCodeLines = edgeCode.trim().split("\n");
const edgeLineNumbers = Array.from(
  { length: edgeCodeLines.length },
  (_, index) => index + 1
);

const ossCodeLines = ossCode.trim().split("\n");
const ossLineNumbers = Array.from(
  { length: ossCodeLines.length },
  (_, index) => index + 1
);

const Cli = () => {
  const [activeTab, setActiveTab] = useState("cloud");

  const { t } = useTranslation("dashboard");

  const copyToClipboard = (item: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = item;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    notification.success({ message: "Copied To Clipboard" });
  };

  return (
    <StyledWrapper>
      {/* <div>
        <p>{t("cli.super-h1")}</p>
      </div>
      <div>
        <h1>{t("cli.h1")}</h1>
      </div>
      <div>
        <p>{t("cli.sub-h1")}</p>
      </div>
      <div>
        <p>{t("cli.desc")}</p>
      </div> */}

      <div className="container">
        <Row gutter={[32, 32]}>
          <Col
            className="w-100 info"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <p className="info-super">{t("cli.super-h1")}</p>

            <div className="info-title">
              <TitleFrame>
                <h2>{t("cli.h1")}</h2>
              </TitleFrame>
            </div>

            <div className="info-sub">
              <h4>
                Fast and <span>Handicraft</span>
              </h4>
              <SvgIcon title="fireEmojiIcon" viewBox="0 0 32 33" />
            </div>
            <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="info-tags">
              <span>Primary</span>
              <span>Recommended</span>
            </div>
          </Col>
          <Col
            className="w-100 cli"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className="code-sample">
              <div className="code-sample-tabs">
                <Button
                  type="ghost"
                  className={`code-sample-tabs-btn ${
                    activeTab === "cloud" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("cloud")}
                >
                  Cloud Computing
                </Button>
                <Button
                  type="ghost"
                  className={`code-sample-tabs-btn ${
                    activeTab === "edge" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("edge")}
                >
                  Edge Services
                </Button>
                <Button
                  type="ghost"
                  className={`code-sample-tabs-btn ${
                    activeTab === "oss" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("oss")}
                >
                  Object Storage
                </Button>
              </div>
              {activeTab === "cloud" && (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <code>
                    {cloudCodeLines.map((line, index) => (
                      <div key={index}>
                        <span className="line-number">
                          {cloudLineNumbers[index]}
                        </span>
                        {line}
                      </div>
                    ))}
                  </code>
                </motion.pre>
              )}
              {activeTab === "edge" && (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <code>
                    {edgeCodeLines.map((line, index) => (
                      <div key={index}>
                        <span className="line-number">
                          {edgeLineNumbers[index]}
                        </span>
                        {line}
                      </div>
                    ))}
                  </code>
                </motion.pre>
              )}
              {activeTab === "oss" && (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <code>
                    {ossCodeLines.map((line, index) => (
                      <div key={index}>
                        <span className="line-number">
                          {ossLineNumbers[index]}
                        </span>
                        {line}
                      </div>
                    ))}
                  </code>
                </motion.pre>
              )}
            </div>

            <div className="copy-section">
              <Button
                className="copy-section-btn"
                onClick={() => copyToClipboard(codes[activeTab])}
              >
                <SvgIcon title="copyIcon" viewBox="0 0 20 20" />
                Copy Starting CLI Code
              </Button>

              <p className="contact-us">
                Have any questions?
                <Link href="/about"> Contact Us</Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </StyledWrapper>
  );
};

export default Cli;
