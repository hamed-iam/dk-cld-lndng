import { useTranslation } from "next-i18next";
import StyledWrapper from "./dashboardCtr.style";
import {
  AboutUs,
  Cli,
  Customers,
  EasyAccess,
  Hero,
  ProductsFeatures,
  SaveMore,
  Scenarios,
  Security,
  Share,
} from "@/components/Dashboard";
import { Faq, Solutions } from "@/components";

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
