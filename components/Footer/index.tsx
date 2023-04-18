import { Col, Row } from "antd";
import FooterCallbackForm from "./FooterCallbackForm";
import StyleWrapper from "./footer.style";

import { useTranslation } from "next-i18next";
import SvgIcon from "../SvgIcon";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <StyleWrapper>
      <div className="callback">
        <Row>
          <Col
            lg={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            className="callback-title"
          >
            <SvgIcon title="callbackIcon" viewBox="0 0 32 32" />
            <p>Request for callback</p>
          </Col>

          <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
            <FooterCallbackForm />
          </Col>
        </Row>
      </div>

      <div className="info">
        <Row gutter={[24, 24]}>
          <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }}>
            <div className="info-branding">
              <SvgIcon title="brandingIcon" viewBox="0 0 146 32" />
              <p className="info-branding-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, quos!
              </p>
              <div className="info-branding-social">
                <a href="#">
                  <SvgIcon title="socialInstagramIcon" viewBox="0 0 20 20" />
                </a>
                <a href="#">
                  <SvgIcon title="socialLinkedinIcon" viewBox="0 0 20 20" />
                </a>
                <a href="#">
                  <SvgIcon title="socialTwitterIcon" viewBox="0 0 20 20" />
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            className="info-products"
          >
            <p className="info-products-title">Products</p>
            <div className="info-products-links">
              <Link href="/cloud-computing">
                Cloud Computing as a Service (IaaS)
              </Link>
              <Link href="/oss">Object Storage as a Service (OSS)</Link>
              <Link href="/edge-services">Edge Services</Link>
            </div>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            className="info-contact"
          >
            <p className="info-contact-title">Contact Us</p>
            <div className="info-contact-links">
              <Link href="/about">Request for free trial demo</Link>
              <Link href="mailto:Support@digicloud.com">
                Support@digicloud.com
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="copyright">
        <SvgIcon title="copyrightIcon" viewBox="0 0 18 19" />
        <span>
          {new Date().getFullYear()}.All rights reserved by{" "}
          <Link href="/">DIGICLOUD</Link>
        </span>
      </div>
    </StyleWrapper>
  );
};

export default Footer;
