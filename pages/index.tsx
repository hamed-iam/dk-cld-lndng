import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { InfoBox, PostList } from "@/components";
import { fetchPosts } from "@/hooks";

const Home = () => {
  return (
    <>
      <div style={{ marginInlineStart: "200px" }}>hi</div>
      <InfoBox>This page shows how to use SSG with React-Query.</InfoBox>
      <PostList />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
