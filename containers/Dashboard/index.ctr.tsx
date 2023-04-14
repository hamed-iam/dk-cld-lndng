import { useTranslation } from "next-i18next";
import StyledWrapper from "./dashboardCtr.style";
import {
  AboutUs,
  Cli,
  Customers,
  EasyAccess,
  Faq,
  Hero,
  ProductsFeatures,
  SaveMore,
  Scenarios,
  Security,
  Share,
  Solutions,
} from "@/components/Dashboard";

const DashboardCtr = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <Hero />
      <ProductsFeatures />
      <AboutUs />
      <SaveMore />
      <Solutions />
      <Scenarios />
      <Security />
      <Cli />
      <Customers />
      <Faq />
      <EasyAccess />
      <Share />
    </StyledWrapper>
  );
};

export default DashboardCtr;
