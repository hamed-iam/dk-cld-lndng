import { InfoBox, Layout, PostList } from "@/components";
import { EdgeServicesCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const EdgeServicesPage = ({ toggleTheme, theme }: PageProps) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <EdgeServicesCTR />
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common",'edge-services'])),
    },
  };
}

export default EdgeServicesPage;
