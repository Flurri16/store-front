import React from 'react'
import { Link } from 'react-router-dom'
// import '../index.scss'
export default function Navbar() {
    const isAuth = false
  return (
    <div>
        <nav className='nav'>
            <Link className='nav-item' to="/">Bambuk</Link>
            {isAuth ? <Link className='nav-item nav-logout' to='/register'>Logout</Link> : <Link className='nav-item nav-login' to='/register'>Login</Link>}
        </nav>
    </div>
  )
}
