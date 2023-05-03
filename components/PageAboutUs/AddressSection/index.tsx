import { Col, Row } from "antd";
import GoogleMaps from "./GoogleMaps";
import StyleWrapper from "./addressSection.style";
import SvgIcon from "@/components/SvgIcon";

export default function AddressSection() {
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
          <GoogleMaps />
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
              <h3>Address</h3>
            </div>
            <p>
              Tehran District 3. 31, Vanak Plaza Building, Shadi Alley, Khoddami
              St.
            </p>
          </div>
        </Col>
      </Row>
    </StyleWrapper>
  );
}
