import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const navigate = useNavigate()
  const location = useLocation() // получаем текущий путь

  const totalCost = items.reduce((summ, item) => item.cost * item.quantity + summ, 0)

  const navigateHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart'>
      <div className="cart-totalcost">
        <h4>Koszyk:</h4>
        <p>{totalCost} zł</p>
      </div>

      <div className="cart-items-flex-col">
        {
          items && items.length > 0 ? items.map(el => (
            <CartItem key={el._id} item={el} />
          )) : <p>Na razie pusty.</p>
        }
      </div>

      {/* Кнопка не показывается, если мы уже на /checkout */}
      {location.pathname !== '/checkout' && (
        <button className={items.length < 1 ? 'null' : 'pay-cart'} onClick={navigateHandler}>
          Zapłacić
        </button>
      )}
    </div>
  )
}
