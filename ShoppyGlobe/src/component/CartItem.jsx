import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/CartSlice";
import "./Style.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-item">
      <img src={product.images?.[0] || "/placeholder.jpg"} alt={product.title} className="cart-image" />
      <h2>{product.title}</h2>
      <p className="price">${product.price} x {product.quantity}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;

