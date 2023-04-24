import { Collapse, theme } from "antd";
import StyledWrapper from "./caseStudySection.style";
import SvgIcon from "../SvgIcon";

const { Panel } = Collapse;

interface CaseStudyPropsType {
  title: string;
  desc: string;
  panels: {
    panelHeader: string;
    panelContent: string;
    key: string;
  }[];
}

export default function CaseStudySection({
  title,
  desc,
  panels,
}: CaseStudyPropsType) {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 16,
    borderRadius: "8px",
    border: "1px solid #36384A",
    color: "white",
  };

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
          >
            {panels.map((panel) => (
              <Panel
                header={panel.panelHeader}
                key={panel.key}
                style={panelStyle}
              >
                <p>{panel.panelContent}</p>
              </Panel>
            ))}
          </Collapse>
        </div>

        <div className="content">
          <p className="content-super">Guidance</p>
          <h2 className="content-title">Use Cases In</h2>
          <h2 className="content-subtitle">
            {title}{" "}
            <span>
              <SvgIcon title="telescopeIcon" viewBox="0 0 56 56" />
            </span>
          </h2>

          <p className="content-desc">{desc}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}
