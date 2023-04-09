// import type { DocumentContext, DocumentInitialProps } from "next/document";
// import Document from "next/document";
// import { ServerStyleSheet, StyleSheetManager } from "styled-components";
// import stylisRTLPlugin from "stylis-plugin-rtl";

// export default class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(
//               // ! stylesheet manager causes the prop classname mismatch warning, needs more R&D
//               // <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
//               <App {...props} />
//               // </StyleSheetManager>
//             ),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: [initialProps.styles, sheet.getStyleElement()],
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

// ? this is the reference of code for antd ssr and it seem to work, needs more testing https://github.com/vercel/next.js/pull/44015/files#diff-94faec492176ae2f396da10c6159c337f7cf23e28aac6a62f5229b285555096b
// ? related doc https://beta.nextjs.org/docs/styling/css-in-js
// @ts-ignore
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache();
    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App:any) => (props:any) =>
          sheet.collectStyles(
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
        enhanceComponent: (Component:any) => Component,
      });

    let cookies = null;

    if (ctx.req && ctx.req.headers.cookie) {
      console.log("cookie values: ", ctx.req.headers.cookie.split("lang="));
      cookies = ctx.req.headers.cookie;
    }

    const initialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();

    const handleDir = (arg: any) => {
      // arg?.includes("lang")
      //   ? this.props.cookies.split("lang=")[1]
      //   : this.props.locale === "en"
      //   ? "ltr"
      //   : "rtl";

      if (arg?.includes("lang")) {
        if (arg.split("lang=")[1] === "fa") {
          return "rtl";
        } else return "ltr";
      }
    };

    // return { ...intialProps, styles };
    return {
      ...initialProps,
      handleDir,
      cookies,
      styles: (
        <>
          {initialProps.styles}
          {...styles}
          {/* hacky code, `extractStyle` does not currently support returning JSX or related data. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `</script>${extractStyle(cache)}<script>`,
            }}
          />
        </>
      ),
    };
  }

  render() {
    // console.log("hasCookie: ", this.props.cookies);

    console.log(
      "this.props.handleDir(this.props.cookies)",
      // @ts-ignore
      this.props.handleDir(this.props.cookies)
    );
    return (
      <Html
        lang={this.props.locale}
        // @ts-ignore
        dir={this.props.handleDir(this.props.cookies)}
      >
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
