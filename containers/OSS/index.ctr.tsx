import { useTranslation } from "next-i18next";
import StyledWrapper from "./ossCtr.style";
import {
  BenefitsSection,
  DefineSection,
} from "@/components/Oss";
import { SuccessStory,Faq ,Solutions} from "@/components";

const OssCtr = () => {
  const { t } = useTranslation("oss");

  return (
    <StyledWrapper>
      <DefineSection />
      <BenefitsSection />
      <Solutions/>
      <SuccessStory />
      <Faq />
    </StyledWrapper>
  );
};

export default OssCtr;
