import SvgIcon from "@/components/SvgIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EdgePricingCardStyledWrapper } from "./edgePricingSection.style";

export type Item = {
  title: string;
  status: boolean;
};

interface CloudBenefitCardPropTypes {
  title: string;
  subtitle: string;
  items: Array<Item> | never[];
  background: string;
}

export default function EdgePricingCard({
  title,
  subtitle,
  items,
  background,
}: CloudBenefitCardPropTypes) {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(150);
  const { t } = useTranslation("edge-services");

  return (
    <EdgePricingCardStyledWrapper
      backgroundImage={background}
      active={isActive}
    >
      <div className="container">
      {/* TODO: It should be improved by removing checkbox and a sloution based on pure CSS */}
        <input
          type="checkbox"
          className="view-more-state"
          checked={isActive}
          onChange={() => {
            setIsActive(!isActive);
          }}
          style={{ display: "none" }}
        />
        <div className="header">
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
        </div>
        <div className="content">
          {items.map((item, index) => {
            return (
              <div key={index} className="content-item">
                {item.status ? (
                  <SvgIcon title="okIcon" viewBox="0 0 16 16" />
                ) : (
                  <SvgIcon title="notOkIcon" viewBox="0 0 16 16" />
                )}
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
            setHeight(isActive ? 200 : 150);
          }}
          className={
            isActive
              ? "view-button view-button-expand"
              : "view-button view-button-collapse"
          }
        >
          {isActive ? (
            <p>{t("pricing.action.view-less")}</p>
          ) : (
            <p>{t("pricing.action.view-more")}</p>
          )}
          <SvgIcon title="edgeFeatureArrowIcon" viewBox="0 0 18 18" />
        </div>
      </div>
    </EdgePricingCardStyledWrapper>
  );
}
