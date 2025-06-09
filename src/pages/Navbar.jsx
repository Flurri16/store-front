import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { toast } from 'react-toastify'
// import '../index.scss'
export default function Navbar() {
  const dispatch = useDispatch()
  // const message = useSelector(state => state.auth.message)
  const items = useSelector(state => state.cart.items) 
  const navigate = useNavigate()
  const email = useSelector(state => state.auth.email)
  const isOkej = useSelector(state => state.auth.isOkej)
  const [cartCount, setCartcount] = useState(0)

  let [cartActive, setCartActive] = useState(false)
  const cartActiveHandler = () => {
    setCartActive(state => !state)
  }
  const logoutHandler = () => {
    try {
      dispatch(logout())
      toast("Zostaleś wylogowany.")
      // console.log("Zostaleś wylogowany.")
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    setCartcount(items.length)
    // console.log(items)
  }, [items])
  return (
    <div>
      <nav className='nav'>
        <Link className='nav-item' to="/">Bambuk</Link>
        {email === 'admin@gmail.com' && <Link to='/add'>add</Link>}
        {
          isOkej ?
            <div className="cart-logout-flex">
              <div className="cart-count-flex">
                <img src={`https://store-front-production-5db9.up.railway.app/img/cart.png`} alt="" onClick={cartActiveHandler} />
                <span>({cartCount})</span>
              </div>
              <div className=""><h3>{email ? email : null}</h3></div>

              <button className='nav-item nav-logout' onClick={logoutHandler}>Logout</button>
              {cartActive && <Cart></Cart>}

            </div>
            : <Link className='nav-item nav-login' to='/register'>Login</Link>}
      </nav>
    </div>
  )
}
