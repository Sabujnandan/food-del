import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Verify from "./components/pages/Verify/Verify";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MyOrders from "./components/pages/MyOrders/MyOrders";
import EmptyCart from "./components/pages/EmptyCart/EmptyCart";

const App = () => {
  const [showLogin , setShowLogin]=useState(false)
  return (

    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route path="/emptycart" element={<EmptyCart/>}/>
        </Routes>
      </div>
      <Footer />
      
    </>
  );
};

export default App;
