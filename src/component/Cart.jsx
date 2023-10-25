import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DelCart } from "../redux/action/index";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(DelCart(item));
  };
  const cartItems = (cartItems) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItems.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(cartItems)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItems.image}
                alt={cartItems.title}
                height="280"
                width="180px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {" "}
                {cartItems.category}
              </h4>
              <h1 className="display-5">{cartItems.title}</h1>
              <p className="lead fw-bolder">
                Rating : {cartItems.rating && cartItems.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-semibold my-4">
                $ {cartItems.price}
              </h3>
              <p className="lead ">{cartItems.description}</p>
              <NavLink
                to="/products"
                className="btn btn-outline-dark ms-4 px-3 py-2"
              >
                Go To Product
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emtyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
    );
  };
  const buttonCheckOut = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink to="/checkout" className="btn btn-outline-secondary mb-5">
              Check Out
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {state.length === 0 && emtyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttonCheckOut()}
    </>
  );
};
export default Cart;
