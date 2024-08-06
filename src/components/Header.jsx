import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
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
              <Link
                className="nav-link"
                style={
                  location.pathname === "/host"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="/host"
              >
                Host
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={
                  location.pathname === "/about"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={
                  location.pathname === "/vans"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="/vans"
              >
                Vans
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
