import { useTranslation } from "next-i18next";
import StyledWrapper from "./productsFeatures.style";

const ProductsFeatures = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("products.super-h1")}</p>
      </div>
      <div>
        <h1>{t("products.h1-cloud-c")}</h1>
      </div>
      <div>
        <p>{t("products.sub-h1")}</p>
      </div>
    </StyledWrapper>
  );
};

export default ProductsFeatures;
