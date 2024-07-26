import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Savor the best flavors from around the world, crafted with love and the freshest ingredients.</p>
        <a href="#explore-menu">
        <button className='menu_btn' >View Menu</button>
        </a>
        
      </div>
      
    </div>
  )
}

export default Header

