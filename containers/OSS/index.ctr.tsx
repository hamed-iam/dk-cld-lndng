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
      <Solutions />
      <SuccessStory />
      <Faq
        links={{
          next: { href: "/edge-services", text: "Edge Services?" },
          back: { href: "/oss", text: "Object Storage?" },
        }}
      />
    </StyledWrapper>
  );
};

export default OssCtr;
