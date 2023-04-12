import { InfoBox, Layout, PostList } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const CloudComputingPage = ({ toggleTheme, theme }: PageProps) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <h1>Cloud Computing Page</h1>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
    },
  };
}

export default CloudComputingPage;
