import StyleWrapper from "./footer.style";

import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <StyleWrapper>
      <p>{t("footer.description")}</p>
    </StyleWrapper>
  );
};

export default Footer;
