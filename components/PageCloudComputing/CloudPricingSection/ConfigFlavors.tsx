import { useState } from "react";
import { Button } from "antd";
import SvgIcon from "@/components/SvgIcon";

import { ConfigFlavorsStyledWrapper } from "./cloudPricingSection.style";

const configs: any = {
  generalPurpose: {
    key: 0,
    id: "general",
    name: "g1.micro",
    cpu: "1 vCPU",
    memory: "0.5GB",
  },
  memoryOptimized: {
    key: 1,
    id: "memory",
    name: "g2.micro",
    cpu: "2 vCPU",
    memory: "1GB",
  },
  computeOptimized: {
    key: 2,
    id: "compute",
    name: "g3.micro",
    cpu: "3 vCPU",
    memory: "2GB",
  },
};

export default function ConfigFlavors() {
  const [currentConfig, setCurrentConfig] = useState(configs.generalPurpose);
  const configsOrder = [
    "generalPurpose",
    "memoryOptimized",
    "computeOptimized",
  ];

  const handleCurrentConfig = (config: any) => {
    setCurrentConfig(configs[config]);
  };

  const handleRightConfig = (config: any) => {
    let item = config.key - 1;
    if (item < 0) item = 2;
    setCurrentConfig(configs[configsOrder[item]]);
  };

  const handleLeftConfig = (config: any) => {
    let item = config.key + 1;
    if (item > 2) item = 0;
    setCurrentConfig(configs[configsOrder[item]]);
  };

  return (
    <ConfigFlavorsStyledWrapper>
      <div className="config-wrapper">
        <div className={`config-wrapper-banner ${currentConfig.id}`}>
          <h4>Config Flavors</h4>
          <p>Based on Virtual Machine Types</p>
        </div>

        <div className="config-wrapper-tabs">
          <Button
            className={`config-wrapper-tabs-btn ${
              currentConfig.id === "general" ? "active" : ""
            }`}
            onClick={() => handleCurrentConfig("generalPurpose")}
          >
            General Purpose
          </Button>
          <Button
            className={`config-wrapper-tabs-btn ${
              currentConfig.id === "memory" ? "active" : ""
            }`}
            onClick={() => handleCurrentConfig("memoryOptimized")}
          >
            Memory Optimized
          </Button>
          <Button
            className={`config-wrapper-tabs-btn ${
              currentConfig.id === "compute" ? "active" : ""
            }`}
            onClick={() => handleCurrentConfig("computeOptimized")}
          >
            Compute Optimized
          </Button>
        </div>

        <div className="config-wrapper-info">
          <Button
            className="config-wrapper-info-leftBtn"
            onClick={() => handleRightConfig(currentConfig)}
          >
            <SvgIcon title="leftArrowIcon" viewBox="0 0 18 19" />
          </Button>
          <div className="config-wrapper-info-desc">
            <div className="config-wrapper-info-desc-item">
              <p className="label">Name</p>
              <p className="value">{currentConfig.name}</p>
            </div>
            <div className="config-wrapper-info-desc-item">
              <p className="label">CPU</p>
              <p className="value">{currentConfig.cpu}</p>
            </div>
            <div className="config-wrapper-info-desc-item">
              <p className="label">Memory</p>
              <p className="value">{currentConfig.memory}</p>
            </div>
          </div>
          <Button
            className="config-wrapper-info-rightBtn"
            onClick={() => handleLeftConfig(currentConfig)}
          >
            <SvgIcon title="rightArrowIcon" viewBox="0 0 18 19" />
          </Button>
        </div>
      </div>
    </ConfigFlavorsStyledWrapper>
  );
}
