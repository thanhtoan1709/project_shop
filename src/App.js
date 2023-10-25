import "./App.css";
import Navbar from "./component/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Checkout from "./component/Checkout";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
