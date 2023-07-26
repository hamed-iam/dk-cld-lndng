import { Collapse } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface OSSContentPropsType {
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

export default function OSSContent({
  onPanelChange,
  activePanel,
}: OSSContentPropsType) {
  const { t } = useTranslation("common");
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
                <h3>{t("faq.tabs.oss.questions.0.problem")}</h3>
                {activePanel.panel1.isHeaderSumShow && (
                  <p>{t("faq.tabs.oss.questions.0.solution")}</p>
                )}
              </div>
            }
            key="1"
            style={panelStyle}
          >
            <p>{t("faq.tabs.oss.questions.0.solution")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("faq.tabs.oss.questions.1.problem")}</h3>
                {activePanel.panel2.isHeaderSumShow && (
                  <p>{t("faq.tabs.oss.questions.1.solution")}</p>
                )}
              </div>
            }
            key="2"
            style={panelStyle}
          >
            <p>{t("faq.tabs.oss.questions.1.solution")}</p>
          </Panel>
          <Panel
            header={
              <div className="panel-header">
                <h3>{t("faq.tabs.oss.questions.2.problem")}</h3>
                {activePanel.panel3.isHeaderSumShow && (
                  <p>{t("faq.tabs.oss.questions.2.solution")}</p>
                )}
              </div>
            }
            key="3"
            style={panelStyle}
          >
            <p>{t("faq.tabs.oss.questions.2.solution")}</p>
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
                <h3>{t("faq.tabs.oss.questions.3.problem")}</h3>
                {activePanel.panel4.isHeaderSumShow && (
                  <p>{t("faq.tabs.oss.questions.3.solution")}</p>
                )}
              </div>
            }
            key="4"
            style={panelStyle}
          >
            <p>{t("faq.tabs.oss.questions.3.solution")}</p>
          </Panel>
        </Collapse>
      </div>
    </motion.div>
  );
}
