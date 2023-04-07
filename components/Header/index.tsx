import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Select, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import StyleWrapper from "./header.style";
import SvgIcon from "../SvgIcon";

const Header = ({ toggleTheme, theme }: any) => {
  const { pathname, push } = useRouter();

  const handleChange = (value: string) => {
    push(value);
  };

  return (
    <StyleWrapper>
      <header>
        <div className="logo-lang">
          <SvgIcon title="brandingIcon" viewBox="0 0 146 32" />
          <p>Lang</p>
        </div>

        <div className="page-links">
          <Link href="/" className="page-links-link">
            Overview
          </Link>

          <Select
            className="page-links-link"
            style={{ width: 120 }}
            onChange={handleChange}
            placeholder="Products"
            options={[
              { value: "cloud-computing", label: "Cloud Computing" },
              { value: "oss", label: "OSS Storage" },
              { value: "edge-services", label: "Edge Services" },
            ]}
          />

          <Link href="/about" className="page-links-link">
            About/Contact us
          </Link>
          <Link href="/docs" aria-disabled className="page-links-link">
            Docs
          </Link>
        </div>

        <Switch
          checkedChildren={<SvgIcon title="moonIcon" viewBox="0 0 24 24" />}
          unCheckedChildren={<SvgIcon title="sunIcon" viewBox="0 0 24 24" />}
          checked={theme === "light"}
          onChange={toggleTheme}
        />
      </header>
    </StyleWrapper>
  );
};

export default Header;
