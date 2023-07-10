import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";

function Products() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  // ...

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

  // ...

  console.log(productList);

  return (
    <Layout>
      <SearchComponent />
      {isLoading ? <p>Loading...</p> : <ProductList products={productList} />}
    </Layout>
  );
}

export default Products;
