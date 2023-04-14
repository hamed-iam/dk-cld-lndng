import { useTranslation } from "next-i18next";
import StyledWrapper from "./dashboardCtr.style";
import { Hero, InfoBox, PostList } from "@/components";

const DashboardCtr = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <h1>{t("h1")}</h1>

      <Hero />
      {/* <InfoBox>This page shows how to use SSG with React-Query.</InfoBox>
      <PostList /> */}
    </StyledWrapper>
  );
};

export default DashboardCtr;
