import React, { ReactNode, useState } from "react";
import { Card } from "antd";
import { useTranslation } from "next-i18next";

import { EdgeFeaturesTableMobileStyledWrapper } from "./featuresSection.style";
import SvgIcon from "@/components/SvgIcon";
import { EdgeFeatureProps } from "./EdgeFeaturesTable";

interface EdgeFeaturesTableMobileProps {
  dataSource: EdgeFeatureProps[];
}

export default function EdgeFeaturesTableMobile({
  dataSource,
}: EdgeFeaturesTableMobileProps) {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation("edge-services");

  return (
    <EdgeFeaturesTableMobileStyledWrapper>
      <input
        type="checkbox"
        className="view-more-state"
        checked={isActive}
        onChange={() => {
          setIsActive(!isActive);
        }}
        style={{ display: "none" }}
      />
      <div className="view-more-wrap">
        {dataSource.map((record, index) => (
          <Card
            className={index > 2 ? "view-more-target" : "view-fixed-target"}
            key={record.key}
          >
            <h3>{record.name}</h3>
            <div>{record.desc}</div>
            <h4>{t("define.table.2.title")}</h4>
            <div>{record.bestFor}</div>
          </Card>
        ))}
      </div>
      <div
        id="ViewMore"
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="view-more-trigger"
      >
        {isActive ? <p>View Less</p> : <p>View More</p>}
        <SvgIcon title="edgeFeatureArrowIcon" viewBox="0 0 18 18" />
      </div>
    </EdgeFeaturesTableMobileStyledWrapper>
  );
}
