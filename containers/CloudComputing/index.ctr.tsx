import { useTranslation } from "next-i18next";
import StyledWrapper from "./cloudComputingCtr.style";
import { InfoBox, PostList } from "@/components";

const CloudComputingCtr = () => {
  const { t } = useTranslation("cloud-computing");
  return (
    <StyledWrapper>
      <h1>{t("h1")}</h1>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </StyledWrapper>
  );
};

export default CloudComputingCtr;
