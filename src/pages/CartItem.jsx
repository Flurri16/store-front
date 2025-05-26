import React from 'react'

export default function CartItem() {
  return (
    <div className='cartitem'>
        <img src="./img/mern.png" alt="" />
        <div className="buttons">
            <p>13zł</p>
            <button className='add'>+</button>
            <button className='pull'>-</button>
        </div>
    </div>
  )
}
