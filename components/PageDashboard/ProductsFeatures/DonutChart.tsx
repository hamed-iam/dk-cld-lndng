import SvgIcon from "@/components/SvgIcon";
import { useTranslation } from "react-i18next";
import { DonutChartStyledWrapper } from "./productsFeatures.style";

interface DonutChartPropTypes {}

export default function DonutChart({}: DonutChartPropTypes) {
  const { t } = useTranslation("dashboard");

  return (
    <DonutChartStyledWrapper>
      <div className="chart">
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
    </DonutChartStyledWrapper>
  );
}
