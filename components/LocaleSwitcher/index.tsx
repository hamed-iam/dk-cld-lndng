import Link from "next/link";
import { useRouter } from "next/router";

import StyleWrapper from "./localeSwitcher.style";

import { Select, Button } from "antd";
import SvgIcon from "../SvgIcon";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || [])
    .filter((locale) => locale !== activeLocale)
    .filter((item) => item !== "default");

  const handleLocaleChange = () => {
    const handleReplaceRoute = () => {
      const current = new URL(window.location.href);
      document.cookie = `NEXT_LOCALE=${otherLocales.join("")}`;
      window.location.replace(current.href);
    };
    router.events.on("routeChangeComplete", handleReplaceRoute);
  };

  return (
    <StyleWrapper>
      <span className="lang-flag">
        <SvgIcon
          title={activeLocale === "en" ? "enLangIcon" : "faLangIcon"}
          viewBox={activeLocale === "en" ? "0 0 60 30" : "0 0 630 360"}
        />
      </span>
      <Select
        placeholder={activeLocale?.toUpperCase()}
        className="locale-select"
        bordered={false}
        dropdownRender={() => (
          <div className="locale-list">
            {otherLocales.map((locale) => {
              const { pathname, query, asPath } = router;
              return (
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  key={locale}
                >
                  <Button onClick={handleLocaleChange}>
                    {locale.toUpperCase()}
                  </Button>
                </Link>
              );
            })}
          </div>
        )}
      />
    </StyleWrapper>
  );
}
