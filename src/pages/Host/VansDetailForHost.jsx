import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import vansData from "../../data/vansData";

const VansDetailForHost = () => {
  const { id } = useParams();

  const location = useLocation();

  const newStyle = {
    textDecoration: "underline",
    color: "black",
    fontWeight: "700",
  };

  const van = vansData[id - 1];
  return (
    <div className="container detail" style={{ overflow: "hidden" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Link
        to="/host/vans"
        className="text-decoration-underline ms-3"
        style={{ color: "#201F1D" }}
      >
        Back to all vans
      </Link>
      <div style={{ background: "white" }} className="p-3 my-5">
        <div className="d-flex gap-4">
          <figure className="col-5">
            <img src={van.imageUrl} className="w-100"></img>
          </figure>
          <div className="d-flex flex-column justify-content-center gap-1 gap-lg-3">
            <span
              className="px-3 py-1 rounded d-inline-block name"
              style={{
                background:
                  van.type === "simple"
                    ? "#E17654"
                    : van.type === "rugged"
                    ? "#115E59"
                    : "#161616",
                color: "#FFEAD0",
                fontSize: "larger",
                width: "fit-content",
              }}
            >
              {van.type}
            </span>
            <h1 className="name" style={{ fontWeight: "700" }}>
              {van.name}
            </h1>
            <h2 className="name">
              <span style={{ fontWeight: "700" }}>${van.price}</span>/day
            </h2>
          </div>
        </div>
        <nav className="navbar navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                style={
                  location.pathname === `/host/vans/${id}`
                    ? {
                        textDecoration: "underline",
                        color: "black",
                        fontWeight: "700",
                      }
                    : { textDecoration: "none", color: "rgba(0,0,0,0.65)" }
                }
                className="nav-link ps-0"
                to=""
              >
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? newStyle : null)}
                className="nav-link"
                to="pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? newStyle : null)}
                className="nav-link"
                to="photos"
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet context={van} />
      </div>
    </div>
  );
};

export default VansDetailForHost;
