import Head from "next/head";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Layout } from "@/components";
import { fetchPosts } from "@/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DashboardCTR } from "@/containers";
import { useTranslation } from "next-i18next";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const Home = ({ toggleTheme, theme }: PageProps) => {
  const { t } = useTranslation("dashboard");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <DashboardCTR />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts(10));

  return {
    props: {
      ...(await serverSideTranslations(locale, ["dashboard", "common"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
