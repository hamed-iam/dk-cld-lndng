import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";
import { light, dark } from "@/styles/themes";
import { useDarkMode } from "@/hooks/useDarkMode";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Layout } from "@/components";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [theme, toggleTheme] = useDarkMode();
  const { locale = "en" } = useRouter();
  const themeMode = theme === "light" ? light : dark;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={themeMode(locale)}>
          <GlobalStyle />
          <Layout toggleTheme={toggleTheme} theme={theme}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
