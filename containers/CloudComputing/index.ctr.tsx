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

  const cloudComputingDefineCards = [
    {
      title: t("define.storage"),
      desc: t("define.storage-desc"),
    },
    {
      title: t("define.dns"),
      desc: t("define.dns-desc"),
    },
    {
      title:'test1',
      desc: t("define.dns-desc"),
    },
    {
      title: 'test2',
      desc: t("define.dns-desc"),
    },
    {
      title: 'test3',
      desc: t("define.dns-desc"),
    },
  ];

  return (
    <StyledWrapper>
      <ProductDefineSection cards={cloudComputingDefineCards} />
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
