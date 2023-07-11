import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";

function Products() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProductList(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    console.log(productId);
    try {
      const response = await fetch("http://localhost:3000/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1, // Replace with the actual user ID
          product_id: productId,
          quantity: 1, // Replace with the desired quantity
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      console.log("Product added to cart:", data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const getFilteredProducts = () => {
    if (searchQuery === "") {
      return productList;
    }

    const query = searchQuery.toLowerCase();
    return productList.filter((product) => {
      const { name, description } = product;
      return (
        name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      );
    });
  };

  return (
    <Layout>
      <SearchComponent onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ProductList
          products={getFilteredProducts()}
          handleAddToCart={handleAddToCart}
        />
      )}
    </Layout>
  );
}

export default Products;
