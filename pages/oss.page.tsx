import { Layout } from "@/components";
import { OssCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const OssPage = ({ toggleTheme, theme }: PageProps) => {
  const { t } = useTranslation("oss");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <OssCTR />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "oss"])),
    },
  };
}

export default OssPage;
