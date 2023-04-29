import { Button, Col, Row } from "antd";
import SvgIcon from "../SvgIcon";

interface NextStepPropTypes {
  onPointerMove: (e: any) => void;
}

export default function NextStep({ onPointerMove }: NextStepPropTypes) {
  return (
    <div className="faq-next-step" onPointerMove={onPointerMove}>
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
            You Can Catch This Service Either Other Product of Digicloud In 1
            Minutes
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
  );
}
