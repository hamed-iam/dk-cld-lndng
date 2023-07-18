import { useTranslation } from "next-i18next";
import StyledWrapper from "./customers.style";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Col, Row } from "antd";
import SvgIcon from "@/components/SvgIcon";
import SectionCTA from "./SectionCTA";

const Customers = () => {
  const { t } = useTranslation("dashboard");
  const digifyConstraintsRef = useRef(null);
  const smartechConstraintsRef = useRef(null);
  const pindoConstraintsRef = useRef(null);
  const komodaConstraintsRef = useRef(null);
  const digistyleConstraintsRef = useRef(null);
  const digikalaConstraintsRef = useRef(null);
  const fidiboConstraintsRef = useRef(null);

  const logos = [
    { name: "fidibo", ref: fidiboConstraintsRef },
    { name: "digify", ref: digifyConstraintsRef },
    { name: "digikala", ref: digikalaConstraintsRef },
    { name: "pindo", ref: pindoConstraintsRef },
    { name: "komoda", ref: komodaConstraintsRef },
    { name: "smartech", ref: smartechConstraintsRef },
    { name: "digistyle", ref: digistyleConstraintsRef },
  ];

  return (
    <StyledWrapper>
      {/* <div>
        <p>{t("customers.super-h1")}</p>
      </div>
      <div>
        <h1>{t("customers.h1")}</h1>
      </div> */}
      <div className="container">
        <Row className="container-row" gutter={[32, 32]}>
          <Col
            className="w-100 info"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <p className="info-super">{t("customers.super-h1")}</p>

            <h3>
              <span>{t("customers.h1-start")}</span>
              {t("customers.h1-a")}
            </h3>
            <div className="info-sub">
              <p>
                {t("customers.h1-b")}
                <span> {t("customers.h1-end")} </span>
              </p>
              <SvgIcon title="spaceshipEmojiIcon" viewBox="0 0 48 48" />
            </div>
            <p className="info-desc">{t("customers.desc")}</p>
          </Col>
          <Col
            className="w-100 logos"
            xl={{ span: 12 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            {logos.map((logo) => (
              <div key={logo.name} className={`${logo.name}-ctr drag-ctr`}>
                <motion.div className="drag-area" ref={logo.ref}>
                  <motion.div
                    initial={{ opacity: 0, y: "-30%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="drag-item"
                    drag
                    dragConstraints={logo.ref}
                  />
                </motion.div>
              </div>
            ))}
          </Col>
        </Row>

        <SectionCTA />
      </div>
    </StyledWrapper>
  );
};

export default Customers;
