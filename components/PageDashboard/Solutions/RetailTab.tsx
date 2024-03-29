import { Collapse } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const { Panel } = Collapse;

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

export default function RetailTab() {
  const { t } = useTranslation("dashboard");
  const [activePanel, setActivePanel] = useState(defaultState);
  const [openPanel, setOpenPanel] = useState<string[] | string>([]);

  const handlePanelChange = (panel: string[] | string) => {
    setOpenPanel(panel);
    if (panel.length === 0) return setActivePanel(defaultState);
    const panelKey = +(panel as string[]).join("");
    setActivePanel(() => ({
      ...defaultState,
      [`panel${panelKey}`]: { isHeaderSumShow: false, key: panelKey },
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
          destroyInactivePanel={true}
          expandIconPosition="end"
          onChange={handlePanelChange}
          accordion
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.0.h3")}</h3>
                {activePanel.panel1.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.0.desc")}</p>
                )}
              </div>
            }
            key="1"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.0.desc")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.1.h3")}</h3>
                {activePanel.panel2.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.1.desc")}</p>
                )}
              </div>
            }
            key="2"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.1.desc")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.2.h3")}</h3>
                {activePanel.panel3.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.2.desc")}</p>
                )}
              </div>
            }
            key="3"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.2.desc")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.3.h3")}</h3>
                {activePanel.panel5.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.3.desc")}</p>
                )}
              </div>
            }
            key="4"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.3.desc")}</p>
          </Panel>
        </Collapse>
      </div>
      <div className="content-column">
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          onChange={handlePanelChange}
          activeKey={openPanel}
          accordion
          destroyInactivePanel
          expandIconPosition="end"
        >
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.4.h3")}</h3>
                {activePanel.panel4.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.4.desc")}</p>
                )}
              </div>
            }
            key="5"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.4.desc")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.5.h3")}</h3>
                {activePanel.panel5.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.5.desc")}</p>
                )}
              </div>
            }
            key="6"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.5.desc")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("solutions.tabs.industry.panel.6.h3")}</h3>
                {activePanel.panel5.isHeaderSumShow && (
                  <p>{t("solutions.tabs.industry.panel.6.desc")}</p>
                )}
              </div>
            }
            key="7"
            style={panelStyle}
          >
            <p>{t("solutions.tabs.industry.panel.6.desc")}</p>
          </Panel>
        </Collapse>
      </div>
    </motion.div>
  );
}
