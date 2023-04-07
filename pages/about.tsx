import { InfoBox, PostList } from "@/components";

const AboutPage = () => {
  return (
    <>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </>
  );
};

export default AboutPage;
