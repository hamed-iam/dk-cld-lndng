import { useTranslation } from "next-i18next";
import StyledWrapper from "./cloudComputingCtr.style";
import {
  CaseStudy,
  Faq,
  ProductDefineSection,
  Solutions,
  SuccessStory,
} from "@/components";
import {
  CloudBenefitsSection,
  CloudPricingSection,
} from "@/components/PageCloudComputing";

const CloudComputingCtr = () => {
  const { t } = useTranslation("cloud-computing");
  return (
    <StyledWrapper>
      <ProductDefineSection />
      <CloudBenefitsSection />
      <Solutions />
      <SuccessStory />
      <CloudPricingSection />
      <CaseStudy />
      <Faq />
    </StyledWrapper>
  );
};

export default CloudComputingCtr;
