import React from 'react'
import { Link } from 'react-router-dom'

export default function Przedmiot() {
  return (
    <Link to={``} className='przedmiot'>
      <img src="./img/mern.png" alt="" />
      <h2>Title</h2>
      <div className="button-cost">
        <span>36zł</span>
        <button>Do kosza</button>
      </div>
    </Link>
  )
}
