import { Layout } from "@/components";
import { CloudComputingCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const CloudComputingPage = ({ toggleTheme, theme }: PageProps) => {
  const { t } = useTranslation("cloud-computing");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <CloudComputingCTR />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "cloud-computing"])),
    },
  };
}

export default CloudComputingPage;
