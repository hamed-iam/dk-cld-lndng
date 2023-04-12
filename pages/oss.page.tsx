import { Layout } from "@/components";
import { OssCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const OssPage = ({ toggleTheme, theme }: PageProps) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <OssCTR />
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common",'oss'])),
    },
  };
}

export default OssPage;
