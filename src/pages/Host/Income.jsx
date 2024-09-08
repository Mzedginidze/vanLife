import React from "react";
import chart from "../../assets/chart.png";

const Income = () => {
  return (
    <div className="container d-flex flex-column gap-3 mb-5">
      <h1 style={{ fontWeight: "700" }}>Income</h1>
      <h6 style={{ color: "#4D4D4D" }}>
        Last <span style={{ textDecoration: "underline" }}>30 days</span>
      </h6>
      <h1 style={{ fontWeight: "800" }}>$2,260</h1>
      <figure style={{ overflow: "hidden" }}>
        <img src={chart} className="w-50 chart"></img>
      </figure>
      <div className="d-flex justify-content-between">
        <h6 style={{ fontWeight: "700" }}>Your transactions (3)</h6>
        <h6>
          Last <span style={{ textDecoration: "underline" }}>30 days</span>
        </h6>
      </div>
      <div
        style={{ background: "white" }}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <h1 style={{ fontWeight: "600" }}>$720</h1>
        <h6>1/11/22</h6>
      </div>
      <div
        style={{ background: "white" }}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <h1 style={{ fontWeight: "600" }}>$560</h1>
        <h6>10/11/22</h6>
      </div>
      <div
        style={{ background: "white" }}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <h1 style={{ fontWeight: "600" }}>$980</h1>
        <h6>23/11/22</h6>
      </div>
    </div>
  );
};

export default Income;
