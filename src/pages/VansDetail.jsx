import { Link, useParams } from "react-router-dom";
import vansData from "../data/vansData";

const VansDetail = () => {
  let { id } = useParams();
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
        to="/vans"
        className="text-decoration-underline ms-3"
        style={{ color: "#201F1D" }}
      >
        Back to all vans
      </Link>

      <figure className="my-4" style={{ width: "100%" }}>
        <img
          src={van.imageUrl}
          alt={van.description}
          style={{ width: "100%", objectFit: "cover", borderRadius: "5px" }}
        />
      </figure>
      <span
        className="px-3 py-1 rounded"
        style={{
          background:
            van.type === "simple"
              ? "#E17654"
              : van.type === "rugged"
              ? "#115E59"
              : "#161616",
          color: "#FFEAD0",
          fontSize: "larger",
        }}
      >
        {van.type}
      </span>
      <div className="mt-3 mb-5 d-flex flex-column gap-3">
        <h2 className="fw-bold">{van.name}</h2>
        <h4>
          <span className="fw-bold">${van.price}</span>/day
        </h4>
        <p>{van.description}</p>
        <button
          className="btn col-12 text-white"
          style={{ background: "#FF8C38" }}
        >
          Rent this van
        </button>
      </div>
    </div>
  );
};

export default VansDetail;
