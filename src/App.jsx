import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // 🆕
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ComputerSets from "./pages/ComputerSets.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);
  const updateQuantity = (id, qty) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="products/:id"
          element={
              <ProductDetail addToCart={addToCart} />
          }
        />
        <Route
          path="computersets/:id"
          element={
              <ProductDetail addToCart={addToCart} />
          }
        />
        <Route path="/" element={<Layout cart={cart} />}>
          <Route
            index
            element={
                <Home addToCart={addToCart} />
            }
          />
          <Route
            path="products"
            element={
                <Products addToCart={addToCart} />
            }
          />
          <Route
            path="computersets"
            element={
                <ComputerSets addToCart={addToCart} />
            }
          />
          <Route
            path="contact"
            element={
                <Contact />
            }
          />
          <Route
            path="cart"
            element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  updateQuantity={updateQuantity}
                />
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
