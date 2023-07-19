import { useTranslation } from "next-i18next";
import StyledWrapper from "./ossCtr.style";
import { BenefitsSection } from "@/components/PageOss";
import {
  SuccessStory,
  Faq,
  SolutionsSection,
  ProductDefineSection,
} from "@/components";

const OssCtr = () => {
  const { t } = useTranslation("oss");

  const ossDefineCards = [
    {
      title: t("define.features.0.title"),
      desc: t("define.features.0.desc"),
    },
    {
      title: t("define.features.1.title"),
      desc: t("define.features.1.desc"),
    },
    {
      title: t("define.features.2.title"),
      desc: t("define.features.2.desc"),
    },
    {
      title: t("define.features.3.title"),
      desc: t("define.features.3.desc"),
    },
    {
      title: t("define.features.4.title"),
      desc: t("define.features.4.desc"),
    },
  ];

  const solutionsCards = [
    {
      title: t("solutions.cards.0.title"),
      desc: t("solutions.cards.0.desc"),
    },
    {
      title: t("solutions.cards.1.title"),
      desc: t("solutions.cards.1.desc"),
    },
    {
      title: t("solutions.cards.2.title"),
      desc: t("solutions.cards.2.desc"),
    },
    {
      title: t("solutions.cards.3.title"),
      desc: t("solutions.cards.3.desc"),
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
        cards={ossDefineCards}
        superTitle={t("define.super-h1")}
        title={t("define.h1")}
        desc={t("define.desc")}
        icon={{
          title: "ossPageIcon",
          viewBox: "0 0 72 72",
        }}
      />
      <BenefitsSection />
      <SolutionsSection cards={solutionsCards} />
      <SuccessStory
        cards={successStoryCards}
        imageSrc="/assets/hero-compute.png"
        mainTitle={t("success.h2")}
        desc={t("success.desc")}
      />
      <Faq
        loc="oss"
        links={{
          next: { href: "/edge-services", text: "Edge Services?" },
          back: { href: "/oss", text: "Object Storage?" },
        }}
      />
    </StyledWrapper>
  );
};

export default OssCtr;
