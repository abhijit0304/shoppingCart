import React from "react";
import background from "../assets/sale.jpg";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="card bg-dark text-white border-0">
          <img
            src={background}
            className="card-img"
            alt="background"
            height={550}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5
                className="card-title display-4 fw-bolder mb-0"
                style={{ color: "black", textAlign: "end", marginRight: 24 }}
              >
                New Season Arrivals
              </h5>
              <p
                className="card-text lead fs-2"
                style={{ color: "black", textAlign: "end", marginRight: 24 }}
              >
                Checkout all the trends
              </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
}
