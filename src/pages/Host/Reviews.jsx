import React from "react";
import group306 from "../../assets/group306.png";
import orangeStar from "../../assets/orangeStar.png";

const Reviews = () => {
  return (
    <div className="container d-flex flex-column gap-4">
      <div>
        <span style={{ fontSize: "32px", fontWeight: "700" }}>
          Your reviews
        </span>
        <span style={{ color: "#4D4D4D" }}>
          {"   "}last{" "}
          <span style={{ textDecoration: "underline", fontWeight: "700" }}>
            30 days
          </span>
        </span>
      </div>
      <figure style={{ overflow: "hidden" }}>
        <img src={group306} className="w-50 chart"></img>
      </figure>
      <div className="pb-3 info">
        <div className="d-flex">
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
        </div>
        <h6>
          Elliot<span style={{ color: "#8C8C8C" }}> December 1, 2022</span>
        </h6>
        <p>
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
      </div>
      <div className="mb-5 pb-3 info">
        <div className="d-flex">
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
          <figure>
            <img src={orangeStar}></img>
          </figure>
        </div>
        <h6>
          Elliot<span style={{ color: "#8C8C8C" }}> December 1, 2022</span>
        </h6>
        <p>
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
