import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Select } from "antd";
import { useRouter } from "next/router";
import StyledWrapper from "./navigationBar.style";

const NavigationBar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const productsLabel: string = t("header.products-label");

  const handleChange = (value: string) => {
    router.push(value);
  };

  const options = [
    { value: "cloud-computing", label: t("header.products.cloud-computing") },
    { value: "oss", label: t("header.products.oss") },
    { value: "edge-services", label: t("header.products.edge-services") },
  ];

  const handleDefaultValue = () => {
    const productsRoutes = options.map((item) => item.value);
    const currentProductRoute = productsRoutes.find(
      (item) => item == router.pathname.slice(1)
    );
    if (currentProductRoute) return currentProductRoute;
    return null;
  };

  const handleActiveClassName = (link: string | string[]) => {
    let currentPath = router.pathname.slice(1);
    if (Array.isArray(link) && link.includes(currentPath)) return "active";
    if (link === currentPath) return "active";
    return "";
  };

  return (
    <StyledWrapper>
      <span className={`nav ${handleActiveClassName("")}`}>
        <Link href="/">{t("header.overview")}</Link>
      </span>

      <Select
        defaultValue={handleDefaultValue()}
        placeholder={productsLabel}
        className={`nav ${handleActiveClassName([
          "oss",
          "cloud-computing",
          "edge-services",
        ])}`}
        bordered={false}
        onChange={handleChange}
        options={options}
      />

      <span className={`nav ${handleActiveClassName("about")}`}>
        <Link href="/about">{t("header.about-us")}</Link>
      </span>

      <span>
        <Link href="/docs" aria-disabled className="nav docs">
          {t("header.docs")}
        </Link>
      </span>
    </StyledWrapper>
  );
};

export default NavigationBar;
