import { ConfigProvider } from "antd";
import GlobalStyle from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { useDarkMode } from "@/hooks/useDarkMode";
import { dark, light } from "./themes";

const WithTheme = (node: JSX.Element) => {
  const [theme] = useDarkMode();

  const { locale = "en" } = useRouter();
  const themeMode = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={themeMode(locale)}>
      <GlobalStyle />
      <ConfigProvider
        direction={locale === "fa" ? "rtl" : "ltr"}
        theme={{
          token: {
            colorPrimary: "#3D88EB",
          },
          components: {
            Button: {
              borderRadius: 8,
            },
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default WithTheme;
