import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({  }) {
    const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <header className="header">
      <h1 className="header-title">ShoppyGlobe</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
}

export default Header;

