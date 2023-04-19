import Link from "next/link";
import { Col, Row } from "antd";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import FooterCallbackForm from "./FooterCallbackForm";
import SvgIcon from "../SvgIcon";

import StyleWrapper from "./footer.style";

dayjs.extend(jalaliday);

const Footer = () => {
  const router = useRouter();
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
            <p>{t("footer.callback.text")}</p>
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
              <SvgIcon
                title={
                  router.locale === "fa" ? "brandingIconFa" : "brandingIcon"
                }
                viewBox="0 0 146 32"
              />
              <p className="info-branding-desc">
               {t('footer.brand-desc')}
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
            <p className="info-products-title">{t("footer.products.title")}</p>
            <div className="info-products-links">
              <Link href="/cloud-computing">
                {t("footer.products.cloud-computing")}
              </Link>
              <Link href="/oss">{t("footer.products.oss")}</Link>
              <Link href="/edge-services">
                {t("footer.products.edge-services")}
              </Link>
            </div>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            className="info-contact"
          >
            <p className="info-contact-title">{t("footer.contact.title")}</p>
            <div className="info-contact-links">
              <Link href="/about"> {t("footer.contact.presentation")}</Link>
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
          {t("footer.copyright.text", {
            date:
              router.locale === "fa"
                ? dayjs().calendar("jalali").format("YYYY")
                : dayjs().format("YYYY"),
          })}
          <Link href="/">{t("footer.copyright.link")}</Link>
        </span>
      </div>
    </StyleWrapper>
  );
};

export default Footer;
