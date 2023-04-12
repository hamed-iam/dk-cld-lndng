import { InfoBox, PostList } from "@/components";
import useData from '@/hooks/useTranslate';

const AboutPage = () => {
  const data = useData('fa', 'common');
  return (
    <>
      <InfoBox>ℹ️ This .data is loaded on client and not prefetched</InfoBox>
      <PostList />
      {/* {JSON.stringify(data)} */}
      <h1>{data.h1}</h1>
    </>
  );
};

export default AboutPage;
