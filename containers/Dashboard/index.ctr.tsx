import { useTranslation } from "next-i18next";
import StyledWrapper from "./dashboardCtr.style";
import {
  AboutUs,
  Hero,
  ProductsFeatures,
  SaveMore,
} from "@/components/Dashboard";

const DashboardCtr = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <Hero />
      <ProductsFeatures />
      <AboutUs />
      <SaveMore />
    </StyledWrapper>
  );
};

export default DashboardCtr;
