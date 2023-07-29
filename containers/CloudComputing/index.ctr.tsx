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
      panelHeader: t("usecase.cards.0.title"),
      panelContent: t("usecase.cards.0.desc"),
    },
    {
      key: "2",
      panelHeader: t("usecase.cards.1.title"),
      panelContent: t("usecase.cards.1.desc"),
    },
    {
      key: "3",
      panelHeader: t("usecase.cards.2.title"),
      panelContent: t("usecase.cards.2.desc"),
    },
    {
      key: "4",
      panelHeader: t("usecase.cards.3.title"),
      panelContent: t("usecase.cards.3.desc"),
    },
  ];

  const successStoryCards = [
    {
      id: 1,
      title: t("success.cards.0.title"),
      desc: t("success.cards.0.desc"),
      logo: { title: "diginextLogo", viewBox: "0 0 74 17" },
    },
    {
      id: 2,
      title: t("success.cards.1.title"),
      desc: t("success.cards.1.desc"),
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 3,
      title: t("success.cards.2.title"),
      desc: t("success.cards.2.desc"),
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 4,
      title: t("success.cards.3.title"),
      desc: t("success.cards.3.desc"),
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 5,
      title: t("success.cards.4.title"),
      desc: t("success.cards.4.desc"),
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 6,
      title: t("success.cards.5.title"),
      desc: t("success.cards.5.desc"),
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 7,
      title: t("success.cards.6.title"),
      desc: t("success.cards.6.desc"),
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
        title={t("usecase.h2")}
        desc={t("usecase.desc")}
        panels={caseStudyPanels}
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
