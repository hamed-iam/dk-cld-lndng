import { useTranslation } from "next-i18next";
import StyledWrapper from "./ossCtr.style";
import {
  BenefitsSection,
  DefineSection,
  SolutionsSection,
  SuccessStorySection,
} from "@/components/Oss";
import { Faq } from "@/components/Dashboard";

const OssCtr = () => {
  const { t } = useTranslation("oss");

  return (
    <StyledWrapper>
      <DefineSection />
      <BenefitsSection />
      <SolutionsSection />
      <SuccessStorySection />
      <Faq />
    </StyledWrapper>
  );
};

export default OssCtr;
