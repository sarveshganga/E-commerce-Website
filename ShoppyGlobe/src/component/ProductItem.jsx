import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent navigation when clicking "Add to Cart"
    dispatch(addToCart(product));
    console.log("Added to cart:", product);
  };

  return (
    <div className="product-items">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="product-images" />
        <h2>{product.title}</h2>
        <p className="price">${product.price} </p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem; 




