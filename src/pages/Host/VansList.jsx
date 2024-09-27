import vansData from "../../data/vansData";
import { Link } from "react-router-dom";

const VansList = () => {
  return (
    <section className="container">
      <div className="d-flex align-items-center py-5">
        <h3>Your listed vans</h3>
      </div>
      <div>
        {vansData.map((van) => {
          return (
            <Link to={`${van.id}`} style={{ textDecoration: "none" }}>
              <div key={van.id} className="card mb-3">
                <div className="row g-0 p-lg-5 p-1">
                  <div className="col-4">
                    <img
                      src={van.imageUrl}
                      className="img-fluid rounded"
                      alt={van.description}
                    />
                  </div>
                  <div className="col-6">
                    <div className="card-body">
                      <h6 className="card-title">{van.name}</h6>
                      <p className="card-text">${van.price}/day</p>
                      <p className="card-text description">{van.description}</p>
                    </div>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <button className="btn">Edit</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default VansList;
