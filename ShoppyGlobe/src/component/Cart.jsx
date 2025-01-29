import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Style.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
