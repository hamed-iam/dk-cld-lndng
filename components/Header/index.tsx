import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Drawer, Space, Switch } from "antd";
import { useForm } from "react-hook-form";
import CustomSelect from "../DataEntry/Select";
import SvgIcon from "../SvgIcon";
import StyleWrapper from "./header.style";

import { DatePicker, Input } from "../DataEntry";
import LocaleSwitcher from "../locale-switcher";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = ({ toggleTheme, theme }: any) => {
  const { pathname, push, locale } = useRouter();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const handleCloseSideMenu = () => {
    setOpen(false);
  };

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      products: pathname.slice(1),
      date: "",
      input: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const options = [
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "oss", label: "OSS Storage" },
    { value: "edge-services", label: "Edge Services" },
  ];

  const handleProductSelectChange = (value: string) => {
    handleCloseSideMenu();
    push(value);
  };
  const handleDateChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };

  const handleCurrentRoute = () => {
    handleCloseSideMenu();
    setValue("products", "");
  };
  return (
    <StyleWrapper>
      <header>
        <div className="logo-lang">
          <SvgIcon title="brandingIcon" viewBox="0 0 146 32" />
          <Button type="ghost" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>

        <div>
          <Drawer
            title="Menu"
            placement={locale === "fa" ? "left" : "right"}
            headerStyle={{}}
            onClose={handleCloseSideMenu}
            closeIcon={null}
            open={open}
            extra={
              <Space>
                <Button type="ghost" onClick={handleCloseSideMenu}>
                  <CloseOutlined />
                </Button>
              </Space>
            }
          >
            <div>
              <LocaleSwitcher />
              <div className="page-links">
                <Link
                  href="/"
                  className="page-links-link"
                  onClick={handleCurrentRoute}
                >
                  Overview
                </Link>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <CustomSelect
                    name="products"
                    options={options}
                    onChange={handleProductSelectChange}
                    control={control}
                    placeholder="Products"
                  />

                  <DatePicker
                    placeholder="Start Date"
                    control={control}
                    onChange={handleDateChange}
                    name="date"
                  />
                  <Input
                    placeholder="Input"
                    control={control}
                    onChange={handleInputChange}
                    name="input"
                  />
                  <input type="submit" />
                </form>

                <Link
                  href="/about"
                  className="page-links-link"
                  onClick={handleCurrentRoute}
                >
                  About/Contact us
                </Link>
                <Link
                  href="/docs"
                  aria-disabled
                  className="page-links-link"
                  onClick={handleCurrentRoute}
                >
                  Docs
                </Link>
              </div>

              <Switch
                checkedChildren={
                  <SvgIcon title="moonIcon" viewBox="0 0 24 24" />
                }
                unCheckedChildren={
                  <SvgIcon title="sunIcon" viewBox="0 0 24 24" />
                }
                checked={theme === "light"}
                onChange={toggleTheme}
              />
            </div>
          </Drawer>
        </div>
      </header>
    </StyleWrapper>
  );
};

export default Header;
