import { useTranslation } from "next-i18next";
import StyledWrapper from "./cloudComputingCtr.style";
import {
  CaseStudy,
  Faq,
  ProductDefineSection,
  SolutionsSection,
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
      title: t("define.cards.0.title"),
      desc: t("define.cards.0.desc"),
    },
    {
      title: t("define.cards.1.title"),
      desc: t("define.cards.1.desc"),
    },
    {
      title: t("define.cards.2.title"),
      desc: t("define.cards.2.desc"),
    },
    {
      title: t("define.cards.3.title"),
      desc: t("define.cards.3.desc"),
    },
    {
      title: t("define.cards.4.title"),
      desc: t("define.cards.4.desc"),
    },
  ];

  const solutionsCards = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
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

  const successStoryCards = [
    {
      id: 1,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "diginextLogo", viewBox: "0 0 74 17" },
    },
    {
      id: 2,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 3,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 4,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 5,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
  ];

  return (
    <StyledWrapper>
      <ProductDefineSection
        cards={cloudComputingDefineCards}
        superTitle={t("define.super-h1")}
        title={t("define.h1")}
        desc={t("define.desc")}
        icon={{
          title: "cloudComputingPageIcon",
          viewBox: "0 0 72 72",
        }}
      />
      <CloudBenefitsSection />
      <SolutionsSection cards={solutionsCards} />
      <SuccessStory
        imageSrc="/assets/cloudStoryHero.png"
        cards={successStoryCards}
        mainTitle={t("success.h2")}
        desc={t("success.desc")}
      />
      <CloudPricingSection />
      <CaseStudy
        title={t("usecases.h1")}
        panels={caseStudyPanels}
        desc={t("usecases.desc")}
      />
      <Faq
        loc="cloud-computing"
        links={{
          next: { href: "/oss", text: t("faq.links.next") },
          back: { href: "/edge-services", text: t("faq.links.back") },
        }}
      />
    </StyledWrapper>
  );
};

export default CloudComputingCtr;
