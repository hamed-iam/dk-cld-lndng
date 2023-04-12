import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { InfoBox, PostList, Layout } from "@/components";
import { fetchPosts } from "@/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const Home = ({ toggleTheme, theme }: PageProps) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <div style={{ marginInlineStart: "200px" }}>hi</div>
      <InfoBox>This page shows how to use SSG with React-Query.</InfoBox>
      <PostList />
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts(10));

  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
