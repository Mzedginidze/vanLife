import { NavLink, Outlet, useLocation } from "react-router-dom";

const HostLayout = () => {
  const newStyle = {
    textDecoration: "underline",
    color: "black",
    fontWeight: "700",
  };
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={
                  location.pathname === "/host"
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none", color: "rgba(0,0,0,0.65)" }
                }
                to="/host"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="income"
              >
                Income
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="vans"
              >
                Vans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? newStyle : null)}
                to="review"
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
