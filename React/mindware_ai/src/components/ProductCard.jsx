import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProductCard = ({ product, id }) => {
  const [cartStatus, setCartStatus] = useState(false);

  const handleSubmit = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    fetch(`http://127.0.0.1:3000/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        product_id: 1,
        quantity: 1,
      }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not OK");
      })
      .then(function (data) {
        console.log(data);
        setCartStatus(true); // Update the cart status
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={product.image_url}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="mb-6 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.price}
          </span>
          {cartStatus ? (
            <span className="text-green-500">Added to cart!</span>
          ) : (
            <a
              href="#"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
