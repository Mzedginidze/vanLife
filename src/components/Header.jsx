import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const newStyle = {
    textDecoration: "underline",
    color: "black",
    fontWeight: "700",
  };

  return (
    <div>
      <header className="container d-flex justify-content-between flex-wrap align-items-center py-3">
        <Link
          to="/"
          className="link-offset-2 link-underline link-underline-opacity-0"
          style={{ color: "black" }}
        >
          <h2 style={{ fontWeight: "700" }}>#VANLIFE</h2>
        </Link>
        <nav className="navbar">
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="/host"
              >
                Host
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="/vans"
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
