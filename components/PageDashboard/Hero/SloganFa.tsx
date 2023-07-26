import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { StyledSloganFa } from "./hero.style";

export default function SloganFa() {
  const { t } = useTranslation("dashboard");

  return (
    <StyledSloganFa>
      <h1>
        <span className="sparkle">
          {t("hero.slogan.0")}
          <SvgIcon title="sparkleIcon" viewBox="0 0 56 57" />
        </span>
        <motion.span
          className="better"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("hero.slogan.1")}{" "}
          <span className="better-highlight">{t("hero.slogan.2")} </span>
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="infrastructure"
        >
          {t("hero.slogan.3")}
        </motion.span>
      </h1>
    </StyledSloganFa>
  );
}
