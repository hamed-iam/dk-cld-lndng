import { useTranslation } from "next-i18next";
import StyledWrapper from "./hero.style";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import SvgIcon from "../../SvgIcon";
import TitleFrame from "../../TitleFrame";
import SloganFa from "./SloganFa";
import SloganEn from "./SloganEn";
import { Button } from "antd";

interface HeroCmpPropTypes {
  videoHandler: () => void;
}

const HeroCmp = ({ videoHandler }: HeroCmpPropTypes) => {
  const { locale } = useRouter();
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="container">
        <div className="title-wrapper">
          <p className="title-wrapper-super">{t("hero.super-h1")}</p>
          <div className="title-wrapper-slogan">
            <TitleFrame>
              {locale === "fa" ? <SloganFa /> : <SloganEn />}
            </TitleFrame>
          </div>
          <div className="title-wrapper-sub">
            <SvgIcon title="heroArrowIcon" viewBox="0 0 42 103" />
            <p>{t("hero.sub-h1")}</p>
          </div>

          <div className="title-wrapper-actions">
            <Button
              type="primary"
              className="create-account-btn"
              href={
                locale === "fa" ? "/fa/about#callback" : "/en/about#callback"
              }
            >
              {t("hero.actions.create-account")}
            </Button>
            <Button
              type="default"
              className="play-btn"
              href="#media"
              onClick={videoHandler}
            >
              <SvgIcon title="playIcon" viewBox="0 0 32 32" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="image-wrapper"
        >
          <Image
            src="/assets/hero-compute.png"
            width="383"
            height="343"
            alt="cloud-compute"
          />
        </motion.div>
      </div>
    </StyledWrapper>
  );
};

export default HeroCmp;
