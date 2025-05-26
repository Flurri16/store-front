import React from 'react'
import { Link } from 'react-router-dom'
export default function AddItem() {
  return (
<div className='form'>
    <form onSubmit={e => e.preventDefault()}>
        <h1>Dodaj przedmiot:</h1>
        <div className="inputs-flex">
            <input type="file" multiple />
            <input type="text" placeholder='Zagłówek:' />
            <input type="number" placeholder='Cena:' />
            <textarea type="text" placeholder='Informacja:' />
        </div>
        <div className="form-buttons-flex">
            <Link to="/" className='form-buttons-flex-link'>Na główną</Link>
            <button className='clearform'>Wyciść</button>
            <button>Dodaj</button>
        </div>
    </form>
</div>
  )
}
