import { Link, Outlet, useLocation } from "react-router-dom";

const HostLayout = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
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
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={
                  location.pathname === "/host/income"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="income"
              >
                Income
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={
                  location.pathname === "/host/vans"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="vans"
              >
                Vans
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={
                  location.pathname === "/host/review"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none" }
                }
                to="review"
              >
                Review
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
