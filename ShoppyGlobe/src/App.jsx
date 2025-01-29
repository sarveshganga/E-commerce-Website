import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Header from './component/Header';
import ProductList from "./component/ProductList";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import { useSelector } from "react-redux";


  function App() {
    // Get cart items from Redux, and make sure it's an empty array if undefined
    const cartItems = useSelector((state) => state.cart.items || []);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <Provider store={store}>
        <Router>
          <Header cartCount={cartCount} />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
  
  export default App;
  