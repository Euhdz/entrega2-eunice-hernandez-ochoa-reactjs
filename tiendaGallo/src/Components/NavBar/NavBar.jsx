import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logo-header"
          src="../img/logo_tamales_gallo.png"
          alt="Logo Tamales Gallo"
        />
      </Link>

      <Link className="navEstilo" to="/">
        <h1>Tamales Gallo</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="navEstilo" to="/categoria/1">
              Tamales
            </NavLink>
          </li>

          <li>
            <NavLink className="navEstilo" to="/categoria/2">
              Atoles
            </NavLink>
          </li>
          <li>
            <NavLink className="navEstilo" to="/categoria/3">
              Postres
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
