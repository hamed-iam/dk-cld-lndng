import { Col, Row } from "antd";
import GoogleMaps from "./GoogleMaps";
import StyleWrapper from "./addressSection.style";
import SvgIcon from "@/components/SvgIcon";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function AddressSection() {
  const { t } = useTranslation("about");
  return (
    <StyleWrapper>
      <Row>
        <Col
          className="w-100"
          xl={{ span: 12 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          {/* <GoogleMaps /> */}

          {/* <Image src="/assets/map.png" width={400} height={300} alt="" /> */}
          <div className="map"></div>
        </Col>
        <Col
          className="w-100"
          xl={{ span: 12 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div className="address">
            <div className="address-title">
              <SvgIcon title="addressMarkerIcon" viewBox="0 0 32 32" />
              <h3>{t("address.title")}</h3>
            </div>
            <p>{t("address.desc")}</p>
          </div>
        </Col>
      </Row>
    </StyleWrapper>
  );
}
