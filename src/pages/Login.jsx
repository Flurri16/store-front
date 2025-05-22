import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='form'>
    <form>
        <h1>Logowanie:</h1>
        <div className="inputs-flex">
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Hasło' />
        </div>
        <div className="form-buttons-flex">
            <Link to="/register" className='form-buttons-flex-link'>Nie masz konta?</Link>
            <button>Zalogij się</button>
        </div>
    </form>
</div>
  )
}
