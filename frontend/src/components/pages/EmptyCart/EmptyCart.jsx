import React from 'react';
import './EmptyCart.css';
import { assets } from '../../../assets/assets';


const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-content">
        <img src={"https://cdn-icons-png.flaticon.com/512/2038/2038854.png"} alt="Empty Cart" className="empty-cart-image" />
        <h2>Your Cart is Empty</h2>
        <p>Add some delicious food to your cart to enjoy!</p>
        <button className="shop-now-button" onClick={() => window.location.href='/'}>Shop Now</button>
      </div>
    </div>
  );
}

export default EmptyCart;
