import { InfoBox, Layout, PostList } from "@/components";
import { EdgeServicesCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Head from "next/head";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const EdgeServicesPage = ({ toggleTheme, theme }: PageProps) => {
  const { t } = useTranslation("edge-services");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <EdgeServicesCTR />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "edge-services"])),
    },
  };
}

export default EdgeServicesPage;
