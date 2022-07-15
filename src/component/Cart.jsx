import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      {state.map((product) => (
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height={200}
                width={180}
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X ${product.price} = ${" "}
                {product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
              >
                -
              </button>
              <button
                className="btn btn-outline-dark me-4"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cart;
