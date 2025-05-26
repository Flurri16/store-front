import React from 'react'
import CartItem from './CartItem'

export default function Cart() {
  const items = []
  return (
    <div className='cart'>
      <div className="cart-totalcost">
        <h4>Koszyk:</h4>
        <p>12zł</p>
      </div>
        {
          // items.length > 0 ? items : <p>Na razie pusty.</p>
        }
        <div className="cart-items-flex-col">
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
    </div>
  )
}
