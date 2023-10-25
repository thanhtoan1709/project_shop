import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="wrapper bg-light d-flex align-items-center justify-content-center ">
      <div className="login mb-lg-4 ">
        <h2 className="mb-5">Sign Up</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter FirstName"
            />
          </div>
          <div className="form-group was-validated mb-2">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter LastName"
            />
          </div>
          <div className="form-group was-validated mb-2">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter UserName"
            />
          </div>
          <div className="form-group was-validated mb-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              required
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group was-validated mb-2">
            <label>Password</label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Enter email"
            />
          </div>
          <button type="submit" className="btn btn-outline-success w-100 mt-2">
            Sign up
          </button>
          <p className="text-end mt-2">
            Already Register
            <NavLink to="/login" className=" me-1">
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
