import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const van = useOutletContext();
  return (
    <div>
      <figure className="col-4">
        <img src={van.imageUrl} style={{ width: "100%" }}></img>
      </figure>
    </div>
  );
};

export default Photos;
