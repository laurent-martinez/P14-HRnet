import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./Nav.scss";

interface NavProps {
  currentPage: string;
  goTo: string;
}
/**
 *
 * functionnal component who render the navigation bar
 * two props who will change the nav links depending on which pages we are in
 *
 */
function Nav({ currentPage, goTo }: NavProps) {
  return (
    <nav className="nav-header">
      <Logo />
      <ul className="nav-header__titles">
        <li>
          {" "}
          <Link
            aria-disabled="true"
            to={`/${currentPage}`}
            className="nav-header__titles__title change"
          >
            {currentPage || "Register"}
          </Link>
        </li>
        <li>
          {" "}
          <Link to={`/${goTo}`} className="nav-header__titles__title">
            {goTo || "Register"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
