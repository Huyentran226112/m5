// import logo from "./logo.svg";
import "./App.css";
import Contact from "./pages/Contact";
import Shop  from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
