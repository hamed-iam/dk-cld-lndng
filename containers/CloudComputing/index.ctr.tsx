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
      title: "test1",
      desc: t("define.dns-desc"),
    },
    {
      title: "test2",
      desc: t("define.dns-desc"),
    },
    {
      title: "test3",
      desc: t("define.dns-desc"),
    },
  ];

  const caseStudyPanels = [
    {
      key: "1",
      panelHeader: "This is cloud panel header 1",
      panelContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolores!",
    },
    {
      key: "2",
      panelHeader: "This is cloud panel header 2",
      panelContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi consequatur et, minima modi sit?",
    },
    {
      key: "3",
      panelHeader: "This is cloud panel header 3",
      panelContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolor non, iure quo similique ab soluta dolorum reiciendis exercitationem sunt.",
    },
    {
      key: "4",
      panelHeader: "This is cloud panel header 4",
      panelContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, suscipit minus. Adipisci blanditiis aut cumque impedit laborum sunt provident nisi fuga doloremque reprehenderit nulla a, quibusdam culpa quas fugiat numquam.",
    },
  ];

  return (
    <StyledWrapper>
      <ProductDefineSection
        cards={cloudComputingDefineCards}
        superTitle="Cloud Computing Product"
        title="Cloud Computing"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        icon={{
          title: "cloudComputingPageIcon",
          viewBox: "0 0 72 72",
        }}
      />
      <CloudBenefitsSection />
      <Solutions />
      <SuccessStory />
      <CloudPricingSection />
      <CaseStudy
        title="Cloud Computing"
        panels={caseStudyPanels}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
      <Faq />
    </StyledWrapper>
  );
};

export default CloudComputingCtr;
