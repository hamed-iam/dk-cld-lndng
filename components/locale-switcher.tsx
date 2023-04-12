import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

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
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;

          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <Button onClick={handleLocaleChange}>{locale}</Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
