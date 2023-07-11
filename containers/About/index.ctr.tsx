import { useTranslation } from "next-i18next";
import {
  HelpSection,
  AboutUsSection,
  CallbackSection,
  AddressSection,
} from "@/components/PageAboutUs";
import StyledWrapper from "./aboutCtr.style";
import { Faq } from "@/components";

const AboutCtr = ({}: any) => {
  const { t } = useTranslation("about");

  return (
    <StyledWrapper>
      <HelpSection
        superTitle={t("help.title.super")}
        icon={{
          title: "aboutHandIcon",
          viewBox: "0 0 72 72",
        }}
      />
      <AboutUsSection />
      <CallbackSection />
      <AddressSection />
      <Faq loc="about" links={null} isNextStepShow={false} />
    </StyledWrapper>
  );
};

export default AboutCtr;
