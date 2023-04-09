import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const RouterLoading = ({ children }: any) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <Spin
      size="large"
      spinning={loading}
      indicator={antIcon}
    >
      {children}
    </Spin>
  );
};

export default RouterLoading;
