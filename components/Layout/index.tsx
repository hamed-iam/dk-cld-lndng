import StyledWrapper from "./layout.style";

import Header from "../Header";
import Footer from "../Footer";
import RouterLoading from "../RouterLoading";

const Layout = ({ children, toggleTheme, theme }: any) => {
  return (
    // <RouterLoading>
      <StyledWrapper>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className="main">{children}</main>
        <Footer />
      </StyledWrapper>
    // </RouterLoading>
  );
};

export default Layout;
