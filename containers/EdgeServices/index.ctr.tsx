import { useTranslation } from "next-i18next";
import StyledWrapper from "./edgeServicesCtr.style";
import { SuccessStory } from "@/components";
import { DefineSection, FeaturesSection } from "@/components/EdgeServices";
import { Solutions } from "@/components";

const EdgeServicesCtr = () => {
  const { t } = useTranslation("edge-services");

  return (
    <StyledWrapper>
      <DefineSection />
      <FeaturesSection />
      <Solutions />
      <SuccessStory />
    </StyledWrapper>
  );
};

export default EdgeServicesCtr;
