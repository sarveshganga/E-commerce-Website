import React, { useState } from "react";
import { useFetch } from "./useFetch";
import ProductItem from "./ProductItem";
import "./Style.css";

const ProductList = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter products based on search term
  const filteredProducts = data?.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-Search">
      <h1>Product List</h1>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="product-list">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <ProductItem product={product} />
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
