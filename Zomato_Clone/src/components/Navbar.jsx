import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='con-1'>
    <div className='con'>
      <div className='navbar'>
        <div className="navbar-one">
            <h1>Zomato</h1>
        </div>
        <div className="navbar-two">
            <ul>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Add restaurant</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Sign up</a></li>
            </ul>
        </div>
      </div>
    </div>    
      <div className="con-2">
        <h1>Zomato</h1>
      </div>
    </div>
  )
}

export default Navbar
