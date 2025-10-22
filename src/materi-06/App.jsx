import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ListProduct from "./components/ListProduct";
import DetailProduct from "./components/DetailProduct";
import CartPage from "./components/CartPage";

export default function Materi06() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ListProduct />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  );
}
