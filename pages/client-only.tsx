import { InfoBox, PostList } from "@/components";

const ClientOnly = () => {
  return (
    <>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </>
  );
};

export default ClientOnly;
