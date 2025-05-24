import React from 'react'

export default function Cart() {
  const items = []
  return (
    <div className='cart'>
        <h4>Koszyk:</h4>
        {
          items > 0 ? items : <p>Na razie pusty.</p>
        }
    </div>
  )
}
