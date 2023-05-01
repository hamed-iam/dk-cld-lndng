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
  Solutions,
} from "@/components/PageDashboard";
import { Faq, SolutionsSection } from "@/components";

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

const DashboardCtr = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <Hero />
      <ProductsFeatures />
      <AboutUs />
      <SaveMore />
      {/* <SolutionsSection cards={solutionsCards} /> */}
      <Solutions />
      <Scenarios />
      <Security />
      <Cli />
      <Customers />
      <Faq loc="dashboard" links={null} isNextStepShow={false} />
      <EasyAccess />
      <Share />
    </StyledWrapper>
  );
};

export default DashboardCtr;
