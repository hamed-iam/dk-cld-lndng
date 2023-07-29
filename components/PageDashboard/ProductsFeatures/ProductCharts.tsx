import SvgIcon from "@/components/SvgIcon";
import { useTranslation } from "next-i18next";
import { ProductChartsStyledWrapper } from "./productsFeatures.style";

interface ProductChartsPropTypes {
  activate: boolean;
}

export default function ProductCharts({ activate }: ProductChartsPropTypes) {
  const { t } = useTranslation("dashboard");

  return (
    <ProductChartsStyledWrapper>
      <div className={"chart " + (activate ? "chart-movement" : "")}>
        <div className="chart-content">
          <div className="chart-content-donut">
            <div className="flex-wrapper">
              <div className="single-chart">
                <svg viewBox="-3 -3 42 42" className="circular-chart stroke">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={"circle " + (activate ? "motion" : "")}
                    strokeDasharray="75, 100"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
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
        <div className="chart-content-bar">
          <div
            className={
              "bar-graph bar-graph-vertical " +
              (activate ? "bar-graph-two" : "")
            }
          >
            <div className="bar-one bar-container">
              <div className="bar"></div>
            </div>
            <div className="bar-two bar-container">
              <div className="bar"></div>
            </div>
          </div>
          <div className="chart-content-info">
            <p>{t("products.chart-donut-info")}</p>
          </div>
        </div>
        <div className="chart-sub">{t("products.chart-bar-sub")}</div>
      </div>
    </ProductChartsStyledWrapper>
  );
}
