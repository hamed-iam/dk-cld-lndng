import { useTranslation } from "next-i18next";
import {
  HelpSection,
  AboutUsSection,
  CallbackSection,
  AddressSection,
} from "@/components/AboutUs";
import StyledWrapper from "./aboutCtr.style";
import { Faq } from "@/components/Dashboard";

const AboutCtr = ({}: any) => {
  const { t } = useTranslation("about");

  return (
    <StyledWrapper>
      <HelpSection />
      <AboutUsSection />
      <CallbackSection />
      <AddressSection />
      <Faq />
    </StyledWrapper>
  );
};

export default AboutCtr;
