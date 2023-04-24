import { Collapse, theme } from "antd";
import StyledWrapper from "./caseStudySection.style";

const { Panel } = Collapse;

export default function CaseStudySection() {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 16,
    borderRadius: "8px",
    border: "1px solid #36384A",
    color: "white",
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <StyledWrapper>
      <div className="container">
        <div className="collapses">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            accordion
            className="collapses-item"
            expandIconPosition="end"
            // expandIcon={({ isActive }) => (
            //   <CaretRightOutlined rotate={isActive ? 90 : 0} />
            // )}
            // style={{ background: "transparent" }}
          >
            <Panel header="This is panel header 1" key="1" style={panelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" style={panelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" style={panelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 4" key="4" style={panelStyle}>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <div className="content">
          <p className="content-super">Guidance</p>
          <h2 className="content-title">Use Cases In</h2>
          <h2 className="content-subtitle">Edge Services</h2>

          <p className="content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}
