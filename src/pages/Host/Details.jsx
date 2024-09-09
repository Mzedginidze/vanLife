import { useOutletContext } from "react-router-dom";

const Details = () => {
  const van = useOutletContext();
  return (
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      <li className="mb-3">
        <span style={{ fontWeight: "700" }}>Name: </span>
        {van.name}
      </li>
      <li className="mb-3">
        <span style={{ fontWeight: "700" }}>Category: </span>
        {van.type}
      </li>
      <li className="mb-3">
        <p>
          <span style={{ fontWeight: "700" }}>Description: </span>
          {van.description}
        </p>
      </li>
      <li className="mb-3">
        <span style={{ fontWeight: "700" }}>Visibility: </span>
        Public
      </li>
    </ul>
  );
};

export default Details;
