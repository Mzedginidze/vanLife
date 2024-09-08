import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogedIn from "../data/LogedIn";

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { logedIn, setLogedIn } = LogedIn();

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const checkIfAccountExcists = async (e) => {
    e.preventDefault();

    await fetch("https://davits-api.vercel.app/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.result))
      .catch((error) => console.error("Error:", error));

    let succeded = users.some(
      (user) => user.email === form.email && user.password === form.password
    );
    if (succeded) {
      setLogedIn(true);
      navigate("/host");
      console.log(logedIn);
    } else {
      alert("wrong email address or password!!!" + "\nTry again");
      setForm({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container col-12 col-lg-6">
      {!logedIn ? (
        <>
          <h1 className="text-center mb-5" style={{ fontWeight: "700" }}>
            Sign in to your account
          </h1>
          <form className="mb-4" onSubmit={(e) => checkIfAccountExcists(e)}>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={form.email}
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
                value={form.password}
                required
              />
            </div>

            <button
              type="submit"
              className="btn col-12"
              style={{ background: "#FF8C38", color: "white" }}
            >
              Sign in
            </button>
          </form>
          <h6 className="text-center" style={{ fontWeight: "500" }}>
            Don't have an account?{" "}
            <Link style={{ color: "#FF8C38", textDecoration: "none" }}>
              Create one now
            </Link>
          </h6>
        </>
      ) : (
        <>
          <h1 className="text-center mb-4">you're alredy loged in</h1>
          <button
            className="btn col-12"
            style={{ background: "#FF8C38", color: "white" }}
            onClick={() => setLogedIn(false)}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default LogIn;
