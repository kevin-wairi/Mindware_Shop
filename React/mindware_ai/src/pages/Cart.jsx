import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CartComponent from "../components/CartComponent";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the cart items from the API
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  }, []);

  // console.log(cartItems);

  return (
    <Layout>
      <h1>Cart</h1>
      <CartComponent cartItems={[...cartItems]} />
    </Layout>
  );
};

export default Cart;
