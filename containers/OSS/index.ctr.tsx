import { useTranslation } from "next-i18next";
import StyledWrapper from "./ossCtr.style";
import { BenefitsSection } from "@/components/PageOss";
import {
  SuccessStory,
  Faq,
  Solutions,
  ProductDefineSection,
} from "@/components";

const OssCtr = () => {
  const { t } = useTranslation("oss");

  return (
    <StyledWrapper>
      <ProductDefineSection />
      <BenefitsSection />
      <Solutions />
      <SuccessStory />
      <Faq />
    </StyledWrapper>
  );
};

export default OssCtr;
