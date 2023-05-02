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
        cards={[]}
        superTitle="Object Storage Product"
        title="Object Storage"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        mainTitle="Object Storage"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,
                  consectetur"
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
