import { InfoBox, PostList } from "@/components";

const EdgeServicesPage = () => {
  return (
    <>
      <h1>Edge Services Page</h1>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </>
  );
};

export default EdgeServicesPage;
