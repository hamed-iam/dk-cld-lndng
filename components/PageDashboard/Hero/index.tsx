import { useTranslation } from "next-i18next";
import StyledWrapper from "./hero.style";
import SvgIcon from "@/components/SvgIcon";

const HeroCmp = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div className="title-wrapper">
        <p className="title-wrapper-super">{t("hero.super-h1")}</p>
        <div className="title-wrapper-slogan">
          <SvgIcon title="cornerTLIcon" viewBox="0 0 10 10" />
          <SvgIcon title="cornerTRIcon" viewBox="0 0 10 10" />
          <section>
            {/* <h1>{t("hero.h1")}</h1> */}
            <h1>
              Let&apos;s build
              <br />a <span className="better">Better</span>{" "}
              <span className="infrastructure">Infrastructure</span>,
              <br />
              <span className="sparkle">
                together <SvgIcon title="sparkleIcon" viewBox="0 0 56 57" />
              </span>
            </h1>
          </section>
          <SvgIcon title="cornerBLIcon" viewBox="0 0 10 10" />
          <SvgIcon title="cornerBRIcon" viewBox="0 0 10 10" />
        </div>
        <p className="title-wrapper-sub">{t("hero.sub-h1")}</p>
      </div>

      <div className="image-wrapper">
        <SvgIcon title="heroCloudIcon" viewBox="0 0 384 343" />
      </div>
    </StyledWrapper>
  );
};

export default HeroCmp;
