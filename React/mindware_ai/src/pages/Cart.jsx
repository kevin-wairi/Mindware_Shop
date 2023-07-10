import React from "react";
import Layout from "../components/Layout";
import CartComponent from "../components/CartComponent";

const Cart = () => {
  const products = [
    {
      name: "Apple Watch",
      image: "/docs/images/products/apple-watch.png",
      price: "$599",
    },
    {
      name: 'iMac 27"',
      image: "/docs/images/products/imac.png",
      price: "$2499",
    },
    {
      name: "iPhone 12",
      image: "/docs/images/products/iphone-12.png",
      price: "$999",
    },
  ];

  return (
    <Layout>
      <CartComponent products={products} />
    </Layout>
  );
};

export default Cart;
