import { Link } from "react-router-dom";
import star from "../../assets/Star 3.png";
import vansData from "../../data/vansData";

const Dashboard = () => {
  const index = vansData.length < 3 ? vansData.length : 3;
  const top3 = vansData.slice(0, index);

  return (
    <div>
      <section style={{ background: " #FFEAD0" }} className="mt-3">
        <div className="d-flex justify-content-between align-items-center container">
          <div className="d-flex flex-column gap-3 py-3 welcome">
            <h2>Welcome!</h2>
            <h6 style={{ color: "#4D4D4D" }}>
              income last{" "}
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                30 days
              </span>
            </h6>
            <h2>$2,260</h2>
          </div>
          <Link
            to="income"
            className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
          >
            Details
          </Link>
        </div>
      </section>
      <section style={{ background: "#FFDDB2" }}>
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex gap-3" style={{ fontWeight: "700" }}>
            <h3>Review score</h3>
            <img src={star} style={{ transform: "scale(0.8)" }}></img>
            <h3>
              5.0<span style={{ fontWeight: "500", color: "#4D4D4D" }}>/5</span>
            </h3>
          </div>
          <Link
            to="review"
            className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
          >
            Details
          </Link>
        </div>
      </section>
      <section className="container">
        <div className="d-flex justify-content-between align-items-center py-5">
          <h3>Your listed vans</h3>
          <Link to="vans" style={{ textDecoration: "none", color: "black" }}>
            view all
          </Link>
        </div>
        <div>
          {top3.map((van) => {
            return (
              <div key={van.id} className="card mb-3">
                <div className="row g-0 p-lg-5 p-1">
                  <div className="col-4">
                    <img
                      src={van.imageUrl}
                      className="img-fluid rounded"
                      alt={van.description}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title">{van.name}</h4>
                      <h6 className="card-text">${van.price}/day</h6>
                      <p className="card-text description">{van.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
