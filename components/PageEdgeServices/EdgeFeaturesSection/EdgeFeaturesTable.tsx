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
      title: <div className="">{t("define.table.0.title")}</div>,
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
      title: t("define.table.1.title"),
      dataIndex: "desc",
      width: "670px",
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
      title: t("define.table.2.title"),
      dataIndex: "bestFor",
      width: "211px",
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
      name: t("define.features.0.name"),
      desc: t("define.features.0.desc"),
      bestFor: t("define.features.0.bestFor"),
    },
    {
      key: 1,
      name: t("define.features.1.name"),
      desc: t("define.features.1.desc"),
      bestFor: t("define.features.1.bestFor"),
    },
    {
      key: 2,
      name: t("define.features.2.name"),
      desc: t("define.features.2.desc"),
      bestFor: t("define.features.2.bestFor"),
    },
    {
      key: 3,
      name: t("define.features.3.name"),
      desc: t("define.features.3.desc"),
      bestFor: t("define.features.3.bestFor"),
    },
    {
      key: 4,
      name: t("define.features.4.name"),
      desc: t("define.features.4.desc"),
      bestFor: t("define.features.4.bestFor"),
    },
    {
      key: 5,
      name: t("define.features.5.name"),
      desc: t("define.features.5.desc"),
      bestFor: t("define.features.5.bestFor"),
    },
    {
      key: 6,
      name: t("define.features.6.name"),
      desc: t("define.features.6.desc"),
      bestFor: t("define.features.6.bestFor"),
    },
    {
      key: 7,
      name: t("define.features.7.name"),
      desc: t("define.features.7.desc"),
      bestFor: t("define.features.7.bestFor"),
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
