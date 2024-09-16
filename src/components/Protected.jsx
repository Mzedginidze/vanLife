import { Outlet, useNavigate } from "react-router-dom";
import { IsLogedIn } from "../data/LogedIn";
import { useContext, useEffect, useRef } from "react";

const Protected = () => {
  const { isLogedIn } = useContext(IsLogedIn);

  const navigate = useNavigate();

  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!isLogedIn && !hasAlerted.current) {
      alert("you are not loged in");
      hasAlerted.current = true;
      navigate("/login");
    }
  }, [isLogedIn]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
