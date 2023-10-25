import React from "react";
import { useState, useEffect } from "react";

import "./Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi yêu cầu đăng nhập đến backend
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lưu trữ token vào localStorage hoặc Cookie
        localStorage.setItem("token", data.token);

        // Điều hướng đến trang bảo vệ hoặc trang chính
        // Ví dụ: history.push('/protected');
      })
      .catch((error) => {
        console.error("Đăng nhập thất bại:", error);
      });
  };
  return (
    <div className="wrapper bg-light d-flex align-items-center justify-content-center ">
      <div className="login mb-lg-4 ">
        <h2 className="mb-5">Login Form</h2>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group was-validated mb-2">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group was-validated mb-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group form-check mb-2 mx-3">
            <input type="checkbox" className="form-check-input " />
            <label htmlFor="check" className="form-check-lable ">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-outline-success w-100 mt-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
