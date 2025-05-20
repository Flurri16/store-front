import React from 'react'
import { Link } from 'react-router-dom'

export default function Przedmiot() {
  return (
    <Link to={`/id`} className='przedmiot'>
      <h2>Title</h2>
      <img src="./img/mern.png" alt="" />
      <div className="button-cost">
        <span>36zł</span>
        <button>Do kosza</button>
      </div>
    </Link>
  )
}
