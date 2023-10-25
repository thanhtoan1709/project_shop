/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Products = () => {
  const [data, setData] = useState([]);
  const [Products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => [(componentMounted = false)];
    };
    getProducts();
  }, []);
  const TypeProduct = (cat) => {
    const UpdateProduct = data.filter((x) => x.category === cat);
    setProducts(UpdateProduct);
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setProducts(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => TypeProduct("men's clothing")}
          >
            men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => TypeProduct("women's clothing")}
          >
            women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => TypeProduct("electronics")}
          >
            Chair
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => TypeProduct("jewelery")}
          >
            jewelery
          </button>
        </div>
        {Products.map((product) => {
          return (
            <div className="col-md-3 mb-5" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <h5 className="card-title">{product.category}</h5>

                  <p className="card-text lead fw-bold ">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-4 fw-bold text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
