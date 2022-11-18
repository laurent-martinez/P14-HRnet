import { Link } from "react-router-dom";
import Logo from "../Logo";

interface NavProps {
  title: string;
  currentPage: string;
  goTo: string;
}

function Nav({ title, currentPage, goTo }: NavProps) {
  return (
    <nav className="nav-header">
      <Logo />
      <h2>{title}</h2>
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
            {goTo}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
