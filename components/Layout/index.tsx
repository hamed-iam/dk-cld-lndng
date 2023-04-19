import StyledWrapper from "./layout.style";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, toggleTheme, theme }: any) => {
  return (
    <StyledWrapper>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="main">{children}</main>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
