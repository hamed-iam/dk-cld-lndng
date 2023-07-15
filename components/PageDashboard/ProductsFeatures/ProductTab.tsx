import SvgIcon from "@/components/SvgIcon";
import TitleFrame from "@/components/TitleFrame";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ProductTabsStyledWrapper } from "./productsFeatures.style";
import { Button, Collapse } from "antd";
import { useRouter } from "next/router";

const { Panel } = Collapse;

interface ProductTabPropTypes {
  superTitle: string;
  title: string;
  desc: string;
  sub: string;
  detailUrl: string;
  activate: boolean;
}

export default function ProductTab({
  superTitle,
  title,
  desc,
  sub,
  detailUrl,
  activate,
}: ProductTabPropTypes) {
  const { t } = useTranslation("dashboard");
  const { locale } = useRouter();

  return (
    <ProductTabsStyledWrapper>
      <div className="tab">
        <div className="tab-intro">
          <p className="tab-super">{superTitle}</p>
          <div className="tab-title">
            <TitleFrame>
              <h2>{title}</h2>
            </TitleFrame>
          </div>
          <p className="tab-desc">{desc}</p>
          <div className="tab-actions">
            <Button className="tab-actions-create">
              {t("products.info-action-create")}
            </Button>
            <Button className="tab-actions-details">
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
        <div className="charts-wrapper">
          <div className={"chart " + (activate ? "chart-movement" : "")}>
            <div className="chart-content">
              <div className="chart-content-donut">
                <SvgIcon title="donutChartIcon" viewBox="0 0 96 96" />
              </div>
              <div className="chart-content-info">
                <div className="content-heading">
                  <span className="content-heading-colored">
                    {t("products.chart-donut-heading.0")}
                  </span>
                  /{t("products.chart-donut-heading.1")}
                </div>
                <div className="content-title">
                  {t("products.chart-donut-info")}
                </div>
              </div>
            </div>
            <div className="chart-sub">{t("products.chart-donut-sub")}</div>
          </div>
          <div className={"chart " + (activate ? "chart-movement" : "")}>
            <div className="chart-content">
              <div className="chart-content-bar">
                <SvgIcon title="barChartIcon" viewBox="0 0 96 96" />
              </div>
              <div className="chart-content-info">
                <p>{t("products.chart-donut-info")}</p>
              </div>
            </div>
            <div className="chart-sub">{t("products.chart-bar-sub")}</div>
          </div>
        </div>
      </div>
    </ProductTabsStyledWrapper>
  );
}
