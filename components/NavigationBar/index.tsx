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

  return (
    <StyledWrapper>
      <Link href="/" className="nav">
        {t("header.overview")}
      </Link>

      <Select
        defaultValue={handleDefaultValue()}
        placeholder={productsLabel}
        style={{ width: 120 }}
        className="nav"
        bordered={false}
        onChange={handleChange}
        options={options}
      />

      <Link href="/about" className="nav">
        {t("header.about-us")}
      </Link>

      <Link href="/docs" aria-disabled className="nav">
        {t("header.docs")}
      </Link>
    </StyledWrapper>
  );
};

export default NavigationBar;
