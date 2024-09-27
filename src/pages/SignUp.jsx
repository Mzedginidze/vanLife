import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/api/auth";
import { IsLogedIn } from "../data/LogedIn";

const SignUp = () => {
  const [newUserData, setNewUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  const { setIsLogedIn } = useContext(IsLogedIn);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(newUserData);

    if (user) {
      if (user.status === 201) {
        setIsLogedIn(true);
        navigate("/protected/host");
      } else {
        alert(user.message);
      }
    } else {
      alert("something went wrong!!! Please try again.");
      setNewUserData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container col-12 col-lg-5">
      <h1 className="text-center mb-5" style={{ fontWeight: "700" }}>
        Sign Up
      </h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control mb-2"
            placeholder="First Name"
            onChange={handleChange}
            name="firstname"
            value={newUserData.firstname}
            required
          />
        </div>
        <div>
          <input
            className="form-control mb-2"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastname"
            value={newUserData.lastname}
            required
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email address"
            onChange={handleChange}
            name="email"
            value={newUserData.email}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={newUserData.password}
            minLength="6"
            required
          />
        </div>

        <button
          type="submit"
          className="btn col-12"
          style={{ background: "#FF8C38", color: "white" }}
        >
          Sign Up
        </button>
      </form>
      <h6 className="text-center" style={{ fontWeight: "500" }}>
        Already have an account?{" "}
        <Link to="/logIn" style={{ color: "#FF8C38", textDecoration: "none" }}>
          Log In
        </Link>
      </h6>
    </div>
  );
};

export default SignUp;
