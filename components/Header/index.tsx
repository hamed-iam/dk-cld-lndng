import { useRouter } from "next/router";
import Link from "next/link";
import StyleWrapper from "./header.style";

const Header = ({ toggleTheme, theme }: any) => {
  const { pathname } = useRouter();

  return (
    <StyleWrapper>
      <header>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <Link href="/" className={pathname === "/" ? "is-active" : ""}>
          Home
        </Link>
        <Link
          href="/client-only"
          className={pathname === "/client-only" ? "is-active" : ""}
        >
          Client-Only
        </Link>
      </header>
    </StyleWrapper>
  );
};

export default Header;
