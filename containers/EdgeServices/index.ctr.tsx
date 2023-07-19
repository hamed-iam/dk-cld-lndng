import { useTranslation } from "next-i18next";
import StyledWrapper from "./edgeServicesCtr.style";
import { CaseStudy, Faq, SuccessStory } from "@/components";
import {
  EdgeFeaturesSection,
  EdgePricingSection,
} from "@/components/PageEdgeServices";
import { SolutionsSection, ProductDefineSection } from "@/components";

const EdgeServicesCtr = () => {
  const { t } = useTranslation("edge-services");

  const edgeDefineCards = [
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
      panelHeader: "This is edge services panel header 1",
      panelContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolores!",
    },
    {
      key: "2",
      panelHeader: "This is edge services panel header 2",
      panelContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi consequatur et, minima modi sit?",
    },
    {
      key: "3",
      panelHeader: "This is edge services panel header 3",
      panelContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolor non, iure quo similique ab soluta dolorum reiciendis exercitationem sunt.",
    },
    {
      key: "4",
      panelHeader: "This is edge services panel header 4",
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
        cards={edgeDefineCards}
        superTitle={t("define.super-h1")}
        title={t("define.h1")}
        desc={t("define.desc")}
        icon={{
          title: "edgeServicesPageIcon",
          viewBox: "0 0 72 72",
        }}
      />

      <EdgeFeaturesSection
        superTitle={t("protect.super-h1")}
        desc={t("protect.sub")}
      />
      <SolutionsSection cards={solutionsCards} />
      <SuccessStory
        cards={successStoryCards}
        imageSrc="/assets/edgeStoryHero.png"
        mainTitle={t("success.h2")}
        desc={t("success.desc")}
      />
      <EdgePricingSection
        superTitle={t("pricing.super")}
        desc={t("pricing.desc")}
        icon={{
          title: "ghostEmojiIcon",
          viewBox: "0 0 40 40",
        }}
      />
      <CaseStudy
        panels={caseStudyPanels}
        title="Edge Services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
      />
      <Faq
        loc="edge-services"
        links={{
          next: { href: "/oss", text: t("faq.links.next") },
          back: { href: "/cloud-computing", text: t("faq.links.back") },
        }}
      />
    </StyledWrapper>
  );
};

export default EdgeServicesCtr;
