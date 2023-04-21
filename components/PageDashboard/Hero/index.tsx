import { useTranslation } from "next-i18next";
import StyledWrapper from "./hero.style";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import TitleFrame from "@/components/TitleFrame";
import SloganFa from "./SloganFa";
import SloganEn from "./SloganEn";

const HeroCmp = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="title-wrapper">
        <p className="title-wrapper-super">{t("hero.super-h1")}</p>
        <div className="title-wrapper-slogan">
          <TitleFrame>
            {locale === "fa" ? <SloganFa /> : <SloganEn />}
          </TitleFrame>
        </div>
        <p className="title-wrapper-sub">{t("hero.sub-h1")}</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="image-wrapper"
      >
        <Image
          src="/assets/hero-compute.png"
          width="300"
          height="300"
          alt="cloud-compute"
        />
      </motion.div>
    </StyledWrapper>
  );
};

export default HeroCmp;
