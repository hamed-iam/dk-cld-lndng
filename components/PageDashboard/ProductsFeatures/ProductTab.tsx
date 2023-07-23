import SvgIcon from "@/components/SvgIcon";
import TitleFrame from "@/components/TitleFrame";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ProductTabsStyledWrapper } from "./productsFeatures.style";
import { Button, Collapse } from "antd";
import { useRouter } from "next/router";
import ProductCharts from "./ProductCharts";

const { Panel } = Collapse;

interface ProductTabPropTypes {
  title: string;
  desc: string;
  sub: string;
  detailsUrl: string;
  activate: boolean;
}

export default function ProductTab({
  title,
  desc,
  sub,
  detailsUrl,
  activate,
}: ProductTabPropTypes) {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();

  return (
    <ProductTabsStyledWrapper>
      <div className="tab">
        <div className="tab-intro">
          <p className="tab-super">{t("products.super-h1")}</p>
          <div className="tab-title">
            <TitleFrame>
              <h2>{title}</h2>
            </TitleFrame>
          </div>
          <p className="tab-desc">{desc}</p>
          <div className="tab-actions">
            <Button
              className="tab-actions-create"
              href={
                locale === "fa" ? "/fa/about#callback" : "/en/about#callback"
              }
            >
              {t("products.info-action-create")}
            </Button>
            <Button
              className="tab-actions-details"
              href={locale === "fa" ? "/fa/" + detailsUrl : "/en/" + detailsUrl}
            >
              {t("products.info-action-details")}
              <SvgIcon title="moreAboutUsArrowIcon" viewBox="0 0 20 21" />
            </Button>
          </div>
          <div className="tab-sub">
            <span>{t("products.info-sub")}</span>{" "}
            <Link href="/" className="products.info-sub-link">
              {t("products.info-sub-link")}
            </Link>
          </div>
        </div>
        <ProductCharts activate={activate} />
      </div>
    </ProductTabsStyledWrapper>
  );
}
