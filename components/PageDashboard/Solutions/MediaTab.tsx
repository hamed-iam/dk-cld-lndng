import { Collapse } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

const { Panel } = Collapse;

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
const panelStyle = {
  marginBottom: 18,
  background: "#FFFFFF",
  maxWidth: "542px",
  borderRadius: 12,
  border: "1px solid #DADCED",
};

const defaultState = {
  panel1: {
    isHeaderSumShow: true,
    key: 1,
  },
  panel2: {
    isHeaderSumShow: true,
    key: 2,
  },
  panel3: {
    isHeaderSumShow: true,
    key: 3,
  },
  panel4: {
    isHeaderSumShow: true,
    key: 4,
  },
  panel5: {
    isHeaderSumShow: true,
    key: 5,
  },
  panel6: {
    isHeaderSumShow: true,
    key: 6,
  },
  panel7: {
    isHeaderSumShow: true,
    key: 7,
  },
};

export default function MediaTab() {
  const [activePanel, setActivePanel] = useState(defaultState);
  const [openPanel, setOpenPanel] = useState<string[] | string>([]);

  const handlePanelChange = (panel: string[] | string) => {
    setOpenPanel(panel);
    if (panel.length === 0) return setActivePanel(defaultState);
    const panelKey = +(panel as string[]).join("");
    setActivePanel(() => ({
      ...defaultState,
      [`panel${panelKey}`]: { key: panelKey, isHeaderSumShow: false },
    }));
  };

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
          activeKey={openPanel}
          expandIconPosition="end"
          onChange={handlePanelChange}
          accordion
          destroyInactivePanel
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>Media Panel 1</h3>
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
                <h3>Media Panel 2</h3>
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
                <h3>Media Panel 3</h3>
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
          activeKey={openPanel}
          onChange={handlePanelChange}
          accordion
          destroyInactivePanel
          expandIconPosition="end"
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>Media Panel 4</h3>
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
                <h3>Media Panel 5</h3>
                {activePanel.panel5.isHeaderSumShow && <p>{text}</p>}
              </div>
            }
            key="5"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </motion.div>
  );
}
