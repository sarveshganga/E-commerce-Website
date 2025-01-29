import { useSelector } from 'react-redux';

const CartCount = () => {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cart count by summing item quantities
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <span>Cart Count: {cartCount}</span>
    </div>
  );
};

export default CartCount;
