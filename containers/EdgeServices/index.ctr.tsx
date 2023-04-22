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
      <ProductDefineSection
        cards={[]}
        superTitle="Edge Services Product"
        title="Edge Services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        icon={{
          title: "edgeServicesPageIcon",
          viewBox: "0 0 72 72",
        }}
      />

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
