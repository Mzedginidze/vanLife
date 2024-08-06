import { Link } from "react-router-dom";
import image53 from "../assets/image 53.png";

const Home = () => {
  return (
    <div
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
      className="position-relative d-flex justify-content-center"
    >
      <figure className="mb-0" style={{ height: "100%", width: "100%" }}>
        <img
          src={image53}
          alt="Home"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </figure>
      <div className="position-absolute top-50 translate-middle-y text-white d-flex flex-column gap-4 p-4  travel">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="btn text-white col-12"
          style={{ background: "#FF8C38" }}
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
