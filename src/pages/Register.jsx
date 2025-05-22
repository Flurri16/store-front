import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='form'>
        <form>
            <h1>Rejestracja:</h1>
            <div className="inputs-flex">
                <input type="text" placeholder='Imię' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Hasło' />
            </div>
            <div className="form-buttons-flex">
                <Link to="/login" className='form-buttons-flex-link'>Już masz konto?</Link>
                <button>Zarejestruj się</button>
            </div>
        </form>
    </div>
  )
}
