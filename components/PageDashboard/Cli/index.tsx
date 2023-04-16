import { useTranslation } from "next-i18next";
import StyledWrapper from "./cli.style";

const Cli = () => {
  const { t } = useTranslation("dashboard");

  return (
    <StyledWrapper>
      <div>
        <p>{t("cli.super-h1")}</p>
      </div>
      <div>
        <h1>{t("cli.h1")}</h1>
      </div>
      <div>
        <p>{t("cli.sub-h1")}</p>
      </div>
      <div>
        <p>{t("cli.desc")}</p>
      </div>
    </StyledWrapper>
  );
};

export default Cli;
