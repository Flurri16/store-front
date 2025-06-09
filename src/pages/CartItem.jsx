import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, removeFromCart} from '../redux/cartSlice.js'

export default function CartItem({item}) {
  const dispatch = useDispatch()
  const isOkej = useSelector(state => state.auth.isOkej)

  const addToCartHandler = () =>{
    if(isOkej === true) dispatch(addToCart(item))
      console.log(isOkej)
    

  }
    const removeFromCartHandler = () =>{
    dispatch(removeFromCart(item))

  }
  return (
    <div className='cartitem'>
        <img src={`https://store-back-production-d6cb.up.railway.app${item.imagesPaths[0]}`} alt="" />
        {/* <p>{item.cost}zł</p> */}
        <div className="cart-info">
          <div className="cart-title">
            <h1>{item.title}</h1>
          </div>
          <div className="cost-and-quantity">
            <p className="quantity">Ilość: <span>{item.quantity} szt</span></p>
            <p className="cost">Cena: <span>{item.cost * item.quantity} zł</span></p>
          </div>
          <div className="buttons">
              <button className='add' onClick={addToCartHandler}>+</button>
              <button className='pull' onClick={removeFromCartHandler}>-</button>
          </div>
        </div>
    </div>
  )
}
