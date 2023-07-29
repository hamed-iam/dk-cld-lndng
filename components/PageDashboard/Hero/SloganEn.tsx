import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";
import { StyledSloganEn } from "./hero.style";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function SloganEn() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation("dashboard");

  // ! need to find a better solution for this. preferably with css only
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
  }, []);

  return (
    <StyledSloganEn>
      <h1>
        {t("hero.slogan.0")}
        <br />
        <motion.span
          className={!isMobile ? "better" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="better-highlight">{t("hero.slogan.1")} </span>
          {isMobile && <br />}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`better-infrastructure ${isMobile ? "better" : ""}`}
          >
            {t("hero.slogan.2")}
          </motion.span>
        </motion.span>
        , <br />
        <span className="sparkle">
          {t("hero.slogan.3")}
          <SvgIcon title="sparkleIcon" viewBox="0 0 56 57" />
        </span>
      </h1>
    </StyledSloganEn>
  );
}
