import { InfoBox, PostList } from "@/components";

const CloudComputingPage = () => {
  return (
    <>
      <h1>Cloud Computing Page</h1>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </>
  );
};

export default CloudComputingPage;
