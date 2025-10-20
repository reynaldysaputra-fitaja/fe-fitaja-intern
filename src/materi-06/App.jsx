import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ListProduct from "./components/ListProduct";
import DetailProduct from "./components/DetailProduct";
import CartPage from "./components/CartPage";
import { useState } from "react";
import Navigasi from "./components/Navigasi";
import Footer from "./components/Footer";

export default function Materi06() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedSize) => {
    if (!selectedSize) {
    alert("Please select a size first!");
    return;
  }
    
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, size: selectedSize, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, size, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
  };


  return (
    <>
      <Navigasi cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ListProduct />} />
        <Route path="/product/:id" element={<DetailProduct addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>

      <Footer/>
    </>
  );
}
