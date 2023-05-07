import { Button, Col, Row } from "antd";
import { SectionCTAStyledWrapper } from "./customers.style";

export default function SectionCTA() {
  return (
    <SectionCTAStyledWrapper>
      <h4>
        Focus on running your business,
        <span> rather than maintenance your infrastructure</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <Row className="action-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="cta-actions">
            <Button className="cta-actions-account" type="primary">
              Create Digicloud Account
            </Button>
            <Button className="cta-actions-more" type="default">
              More About Us
            </Button>
          </div>
        </Col>
      </Row>
    </SectionCTAStyledWrapper>
  );
}
