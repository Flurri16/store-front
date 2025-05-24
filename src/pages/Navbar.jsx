import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
// import '../index.scss'
export default function Navbar() {
    const isAuth = true
    let [cartActive, setCartActive] = useState(true)
    const cartActiveHandler = () => {
      setCartActive(state => !state)
    }
  return (
    <div>
        <nav className='nav'>
            <Link className='nav-item' to="/">Bambuk</Link>
            {
            isAuth ? 
            <div className="cart-logout-flex">
              <img src="./img/cart.png" alt="" onClick={cartActiveHandler} />
              <Link className='nav-item nav-logout' to='/register'>Logout</Link>
{cartActive && <Cart></Cart>}
                
            </div> 
              : <Link className='nav-item nav-login' to='/register'>Login</Link>}
        </nav>
    </div>
  )
}
