import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Select, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import StyleWrapper from "./header.style";
import SvgIcon from "../SvgIcon";

const Header = ({ toggleTheme, theme }: any) => {
  const { pathname } = useRouter();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
            defaultValue="lucy"
            className="page-links-link"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />

          <Link
            href="/about"
            className="page-links-link"
          >
            About/Contact us
          </Link>
          <Link
            href="/docs"
            aria-disabled
            className="page-links-link"
          >
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
