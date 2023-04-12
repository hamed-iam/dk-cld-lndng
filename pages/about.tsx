import { Layout } from "@/components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageProps {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
}

export default function AboutPage({ toggleTheme, theme }: PageProps) {
  const { t } = useTranslation("common");

  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <h1>{t("h1")}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
