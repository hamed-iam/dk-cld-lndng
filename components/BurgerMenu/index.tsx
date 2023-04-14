import { Button, Drawer, Space, Switch, Collapse } from "antd";
import StyledWrapper from "./burgerMenu.style";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../LocaleSwitcher";

import Link from "next/link";
import SvgIcon from "../SvgIcon";

const { Panel } = Collapse;

const BurgerMenu = ({
  toggleTheme,
  theme,
  isMenuShow,
  onCloseSideMenu,
}: any) => {
  const { t } = useTranslation("common");
  const productsLabel: string = t("header.products-label");


  const { locale } = useRouter();

  const options = [
    { value: "cloud-computing", label: t("header.products.cloud-computing") },
    { value: "oss", label: t("header.products.oss") },
    { value: "edge-services", label: t("header.products.edge-services") },
  ];

  const handleCurrentRoute = () => {
    onCloseSideMenu();
  };

  return (
    <StyledWrapper>
      <Drawer
        title={t('header.menu')}
        placement={locale === "fa" ? "left" : "right"}
        onClose={onCloseSideMenu}
        className="burger-menu"
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
        <div className="menu-container">
          <div className="page-links">
            <button
              type="button"
              className="page-links-btn"
              onClick={handleCurrentRoute}
            >
              <Link href="/" className="page-links-link">
                {t("header.overview")}
              </Link>
            </button>

            <Collapse className="burger-menu-products" expandIconPosition="end">
              <Panel header={productsLabel} key="1">
                {options.map((product) => (
                  <div key={product.value} className="products-container">
                    <button
                      type="button"
                      className="product-btn"
                      onClick={handleCurrentRoute}
                    >
                      <Link href={product.value}>{product.label}</Link>
                    </button>
                  </div>
                ))}
              </Panel>
            </Collapse>
            <button
              type="button"
              className="page-links-btn"
              onClick={handleCurrentRoute}
            >
              <Link href="/about" className="page-links-link">
                {t("header.about-us")}
              </Link>
            </button>

            <button
              type="button"
              className="page-links-btn docs"
              disabled={true}
              onClick={handleCurrentRoute}
            >
              <Link href="/docs" aria-disabled className="page-links-link">
                {t("header.docs")}
              </Link>
            </button>

            <LocaleSwitcher />
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
