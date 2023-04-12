import StyleWrapper from "./footer.style";

import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <StyleWrapper>
      <p>{t("description")}</p>
    </StyleWrapper>
  );
};

export default Footer;
