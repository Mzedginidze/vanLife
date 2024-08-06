import vansData from "../../data/vansData";

const VansList = () => {
  return (
    <section className="container">
      <div className="d-flex align-items-center py-5">
        <h3>Your listed vans</h3>
      </div>
      <div>
        {vansData.map((van) => {
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
  );
};

export default VansList;
