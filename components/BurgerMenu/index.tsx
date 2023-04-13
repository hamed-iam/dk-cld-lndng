import { Button, Drawer, Space, Switch } from "antd";
import StyledWrapper from "./burgerMenu.style";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../LocaleSwitcher";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { DatePicker, Input, Select } from "../DataEntry";
import SvgIcon from "../SvgIcon";

const BurgerMenu = ({ toggleTheme, theme, isMenuShow, onCloseSideMenu }: any) => {
  const { t } = useTranslation("common");
  const productsLabel: string = t("header.products-label");

  const { locale, pathname, push } = useRouter();

  const options = [
    { value: "cloud-computing", label: t("header.products.cloud-computing") },
    { value: "oss", label: t("header.products.oss") },
    { value: "edge-services", label: t("header.products.edge-services") },
  ];

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      products: pathname.slice(1),
      date: "",
      input: "",
    },
  });

  const handleCurrentRoute = () => {
    onCloseSideMenu();
    setValue("products", "");
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleProductSelectChange = (value: string) => {
    onCloseSideMenu();
    push(value);
  };

  const handleDateChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };

  return (
    <StyledWrapper>
      <Drawer
        title="Menu"
        placement={locale === "fa" ? "left" : "right"}
        headerStyle={{}}
        onClose={onCloseSideMenu}
        closeIcon={null}
        open={isMenuShow}
        extra={
          <Space>
            <Button type="ghost" onClick={onCloseSideMenu}>
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
              {t("header.overview")}
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Select
                name="products"
                options={options}
                onChange={handleProductSelectChange}
                control={control}
                placeholder={productsLabel}
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
              {t("header.about-us")}{" "}
            </Link>
            <Link
              href="/docs"
              aria-disabled
              className="page-links-link"
              onClick={handleCurrentRoute}
            >
              {t("header.docs")}
            </Link>
          </div>

          <Switch
            checkedChildren={<SvgIcon title="moonIcon" viewBox="0 0 24 24" />}
            unCheckedChildren={<SvgIcon title="sunIcon" viewBox="0 0 24 24" />}
            checked={theme === "light"}
            onChange={toggleTheme}
          />
        </div>
      </Drawer>
    </StyledWrapper>
  );
};

export default BurgerMenu;
