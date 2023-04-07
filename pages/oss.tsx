import { InfoBox, PostList } from "@/components";

const OssPage = () => {
  return (
    <>
      <h1>Oss Page</h1>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </>
  );
};

export default OssPage;
