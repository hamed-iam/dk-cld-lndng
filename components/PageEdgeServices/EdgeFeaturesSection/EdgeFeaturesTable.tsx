import SvgIcon from "@/components/SvgIcon";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import EdgeFeaturesTableMobile from "./EdgeFeaturesTableMobile";

import { EdgeFeaturesTableStyledWrapper } from "./featuresSection.style";

export interface EdgeFeatureProps {
  key: number;
  name: ReactNode;
  desc: ReactNode;
  bestFor: ReactNode;
}

export default function EdgeFeaturesTable() {
  const { t } = useTranslation("edge-services");

  const columns: ColumnsType<EdgeFeatureProps> = [
    {
      key: "feature",
      title: <div className="">{t("approach.features-col.name")}</div>,
      dataIndex: "name",
      width: "219px",
      render: (text: string, record: any, index: number) => {
        return (
          <div>
            <SvgIcon title="edgeFeatureCircleIcon" viewBox="0 0 24 24" />
            <div>{text}</div>
          </div>
        );
      },
    },
    {
      key: "desc",
      title: t("approach.features-col.desc"),
      dataIndex: "desc",
      width: "650px",
      render: (text: string, record: any, index: number) => {
        return (
          <div>
            <SvgIcon title="edgeFeatureCircleIcon" viewBox="0 0 24 24" />
            <div>{text}</div>
          </div>
        );
      },
    },
    {
      key: "bestFor",
      title: t("approach.features-col.bestFor"),
      dataIndex: "bestFor",
      width: "230px",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="bold-column">
            <SvgIcon title="edgeFeatureCircleIcon" viewBox="0 0 24 24" />
            <div>{text}</div>
          </div>
        );
      },
    },
  ];

  const records: EdgeFeatureProps[] = [
    {
      key: 0,
      name: t("approach.features.0.name"),
      desc: t("approach.features.0.desc"),
      bestFor: t("approach.features.0.bestFor"),
    },
    {
      key: 1,
      name: t("approach.features.1.name"),
      desc: t("approach.features.1.desc"),
      bestFor: t("approach.features.1.bestFor"),
    },
    {
      key: 2,
      name: t("approach.features.2.name"),
      desc: t("approach.features.2.desc"),
      bestFor: t("approach.features.2.bestFor"),
    },
  ];

  return (
    <EdgeFeaturesTableStyledWrapper>
      <div className="table-wrapper">
        <Table<EdgeFeatureProps>
          columns={columns}
          dataSource={records}
          bordered
          pagination={false}
        />
      </div>
      <EdgeFeaturesTableMobile dataSource={records} />
    </EdgeFeaturesTableStyledWrapper>
  );
}
