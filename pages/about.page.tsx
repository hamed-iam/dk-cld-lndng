import { Layout } from "@/components";
import { AboutCTR } from "@/containers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

export default function AboutPage({ toggleTheme, theme }: PageProps) {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <AboutCTR />
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about","dashboard"])),
    },
  };
}
