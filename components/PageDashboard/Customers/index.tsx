import { useTranslation } from "next-i18next";
import StyledWrapper from './customers.style'


const Customers = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("customers.super-h1")}</p>
      </div>
      <div>
        <h1>{t("customers.h1")}</h1>
      </div>
      <div>
        <p>{t("customers.desc")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Customers;
