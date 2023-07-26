import { Layout } from "@/components";
import { AboutCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

export default function AboutPage({ toggleTheme, theme }: PageProps) {
  const { t } = useTranslation("about");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <AboutCTR />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
