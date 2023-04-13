import { useState } from "react";
import { Button } from "antd";
import SvgIcon from "../SvgIcon";
import { MenuOutlined } from "@ant-design/icons";
import StyleWrapper from "./header.style";
import BurgerMenu from "../BurgerMenu";
import NavigationBar from "../NavigationBar";
import LocaleSwitcher from "../LocaleSwitcher";

const Header = ({ toggleTheme, theme }: any) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleShowDrawer = () => {
    setIsMenuShow(true);
  };

  const handleCloseSideMenu = () => {
    setIsMenuShow(false);
  };

  return (
    <StyleWrapper>
      <header>
        <div className="container">
          <div className="container-logo">
            <SvgIcon title="brandingIcon" viewBox="0 0 146 32" />
            <span className="container-locale">
              <LocaleSwitcher />
            </span>
          </div>
          <NavigationBar />
          <Button
            type="ghost"
            className="container-burger-btn"
            onClick={handleShowDrawer}
          >
            <MenuOutlined />
          </Button>
        </div>

        <BurgerMenu
          onCloseSideMenu={handleCloseSideMenu}
          isMenuShow={isMenuShow}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </header>
    </StyleWrapper>
  );
};

export default Header;
