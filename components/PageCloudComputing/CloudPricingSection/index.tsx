import { Col, Row } from "antd";
import StyledWrapper from "./cloudPricingSection.style";
import ConfigFlavors from "./ConfigFlavors";
import SvgIcon from "@/components/SvgIcon";

export default function CloudPricingSection() {
  return (
    <StyledWrapper>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col
            className="w-100"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <div className="info-wrapper">
              <p className="info-wrapper-super">Pricing and Payment</p>
              <h3 className="info-wrapper-title">Pricing</h3>
              <div className="info-wrapper-sub">
                <SvgIcon title="payAsYouGoIcon" viewBox="0 0 32 32" />
                <p>Pay as you go</p>
              </div>
              <p className="info-wrapper-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </Col>
          <Col
            className="w-100"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <ConfigFlavors />
          </Col>
        </Row>
      </div>
    </StyledWrapper>
  );
}
