import { Link } from "react-router-dom";
import image54 from "../assets/image 54.png";

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <figure className="mb-0" style={{ width: "100%" }}>
        <img
          src={image54}
          alt="man sitting on the van, looking at the stars"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </figure>
      <div
        className="d-flex flex-column gap-4 container py-5 info"
        style={{ color: "#161616" }}
      >
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div style={{ background: "#FFCC8D" }} className="p-5 rounded">
          <h3>Your destination is waiting.</h3>
          <h3>Your van is ready.</h3>
          <Link
            to="/vans"
            className="btn mt-3"
            style={{ background: " #161616", color: "white", fontSize: "20px" }}
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
