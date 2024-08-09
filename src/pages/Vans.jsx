import vansData from "../data/vansData";
import { useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const res = searchParams.get("type");

  const display = res
    ? vansData.filter((van) => van.type.toLowerCase() === res)
    : [...vansData];

  return (
    <div className="container">
      <h2 className="fw-bold">Explore our van options</h2>
      <div className="d-flex gap-1 gap-lg-3 flex-wrap mt-3">
        <button
          className="btn"
          style={{
            background: res === "simple" ? "#E17654" : "#FFEAD0",
            color: res === "simple" ? "#FFEAD0" : "#4D4D4D",
          }}
          onClick={() => setSearchParams("?type=simple")}
        >
          Simple
        </button>
        <button
          className="btn"
          style={{
            background: res === "luxury" ? "#161616" : "#FFEAD0",
            color: res === "luxury" ? "#FFEAD0" : "#4D4D4D",
          }}
          onClick={() => setSearchParams("?type=luxury")}
        >
          Luxury
        </button>

        <button
          className="btn"
          style={{
            background: res === "rugged" ? "#115E59" : "#FFEAD0",
            color: res === "rugged" ? "#FFEAD0" : "#4D4D4D",
          }}
          onClick={() => setSearchParams("?type=rugged")}
        >
          Rugged
        </button>
        <button
          className="btn"
          style={{ textDecoration: "underline" }}
          onClick={() => setSearchParams("")}
        >
          Clear filters
        </button>
      </div>
      <div className="d-flex flex-wrap gap-4 my-5">
        {display.map((item, index) => (
          <div style={{ width: "14rem" }} key={index} className="van">
            <img
              src={item.imageUrl}
              className="img-fluid rounded"
              alt={item.description}
            />
            <div className="pt-3">
              <div className="d-flex justify-content-between fw-bold">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <div className="d-flex justify-content-between pt-1">
                <span
                  className="px-3 py-1 rounded"
                  style={{
                    background:
                      item.type === "simple"
                        ? "#E17654"
                        : item.type === "rugged"
                        ? "#115E59"
                        : "#161616",
                    color: "#FFEAD0",
                    fontSize: "larger",
                  }}
                >
                  {item.type}
                </span>
                <span>/day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
