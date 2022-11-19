import { Link } from "react-router-dom";
import Logo from "../Logo";

interface NavProps {
  currentPage: string;
  goTo: string;
}

function Nav({ currentPage, goTo }: NavProps) {
  return (
    <nav className="nav-header">
      <Logo />
      <ul className="nav-header__titles">
        <li>
          {" "}
          <Link
            aria-disabled
            to={`/${currentPage}`}
            className="register__title change"
          >
            {currentPage}
          </Link>
        </li>
        <li>
          {" "}
          <Link to={`/${goTo}`} className="register__title">
            {goTo || "Register"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
