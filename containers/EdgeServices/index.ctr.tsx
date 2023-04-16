import { useTranslation } from "next-i18next";
import StyledWrapper from "./edgeServicesCtr.style";
import { CaseStudy, Faq, SuccessStory } from "@/components";
import {
  EdgeFeaturesSection,
  EdgePricingSection,
} from "@/components/PageEdgeServices";
import { Solutions, ProductDefineSection } from "@/components";

const EdgeServicesCtr = () => {
  const { t } = useTranslation("edge-services");

  return (
    <StyledWrapper>
      <ProductDefineSection />
      <EdgeFeaturesSection />
      <Solutions />
      <SuccessStory />
      <EdgePricingSection />
      <CaseStudy />
      <Faq />
    </StyledWrapper>
  );
};

export default EdgeServicesCtr;
