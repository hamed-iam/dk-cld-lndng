import { Layout } from "@/components";
import { CloudComputingCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

const CloudComputingPage = ({ toggleTheme, theme }: PageProps) => {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <CloudComputingCTR />
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "cloud-computing"])),
    },
  };
}

export default CloudComputingPage;
