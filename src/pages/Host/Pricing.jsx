import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const van = useOutletContext();

  return (
    <div className="py-3">
      <span style={{ fontSize: "24px", color: "#161616" }}>
        ${van.price}.00
      </span>
      <span style={{ fontSize: "16px", color: "#4D4D4D" }}>/day</span>
    </div>
  );
};

export default Pricing;
