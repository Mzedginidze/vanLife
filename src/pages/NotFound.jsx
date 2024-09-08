import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <div className="container">
      <h1 style={{ fontWeight: "700", color: "#161616" }}>
        Sorry, the page you were looking for was not found.
      </h1>
      <button
        className="col-12 btn mt-3 fw-bold py-2"
        style={{
          background: "#161616",
          color: "white",
        }}
        onClick={() => navigator("/")}
      >
        Return to home
      </button>
    </div>
  );
};

export default NotFound;
