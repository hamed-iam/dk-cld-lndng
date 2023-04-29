import { Collapse } from "antd";
import { motion } from "framer-motion";

interface CloudComputingContentPropsType {
  onPanelChange: (panel: string[] | string) => void;
  activePanel: any;
}

const { Panel } = Collapse;

const panelStyle = {
  marginBottom: 18,
  background: "#FFFFFF",
  maxWidth: "542px",
  borderRadius: 12,
  border: "1px solid #DADCED",
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function CloudComputingContent({
  onPanelChange,
  activePanel,
}: CloudComputingContentPropsType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="content"
    >
      <div className="content-column">
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          expandIconPosition="end"
          onChange={onPanelChange}
          accordion
          destroyInactivePanel
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 1</h3>
                {activePanel.panel1.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="1"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 2</h3>
                {activePanel.panel2.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="2"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 3</h3>
                {activePanel.panel3.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="3"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
      <div className="content-column">
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          onChange={onPanelChange}
          accordion
          destroyInactivePanel
          expandIconPosition="end"
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 4</h3>
                {activePanel.panel4.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="4"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 5</h3>
                {activePanel.panel5.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="5"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 6</h3>
                {activePanel.panel6.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="6"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>Cloud panel 7</h3>
                {activePanel.panel7.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="7"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </motion.div>
  );
}
