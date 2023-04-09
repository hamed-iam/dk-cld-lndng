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
// import { cookies } from "next/headers";

export default function App({ Component, pageProps ,...rest}: AppProps) {
  console.log('rest', rest)
  const [queryClient] = useState(() => new QueryClient());
  // const cookieStore = cookies();
  // const lang = cookieStore.get("lang");
  // console.log("lang", lang);
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




// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   // you will need to parse the cookies by writing a method yourself or using something like the `cookie` npm package
//   const cookies = parseTheCookies(appContext.req.headers.cookie);
//   const searchesFromCookie = cookies;
//   return { ...appProps, searchesFromCookie };
// };

// export async function getServerSideProps(context) {
//   console.log('context', context)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
