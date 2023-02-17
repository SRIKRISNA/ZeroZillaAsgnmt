import React from 'react'
import './style.scss'
const Header = () => {
  return (
    <div className='header-container'> 
         <div className="logo"><h1>Logo.</h1></div>
         <div className="menu">
            <ul>
                <li>Who we are</li>
                <li>Scoo Rentals</li>
                <li>Scoo Luxe</li>
                <li>Scoo Ninja</li>
                <li>Let's Scoo</li>
                <li>Blogs</li>
                <li>Contact Us</li>
            </ul>
         </div>
         <div className="btn">
            <button>Rent Now</button>
         </div>
    </div>
  )
}

export default Header