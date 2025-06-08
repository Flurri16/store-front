import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/authSlice'
import { toast } from 'react-toastify'
export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const message = useSelector(state => state.auth.message)
  const state = useSelector(state => state.auth)
  const isOkej = useSelector(state => state.auth.isOkej)
  const handlerSubmit = (e) => {
    try {
      dispatch(registerUser({email, password}))
    }
    catch(err) {
      toast(message)
      console.log(err)
    }
  }
useEffect(() => {
  if (message) toast(message)
  if(isOkej) navigate('/')
}, [message, isOkej])
  return (
    <div className='form'>
      <form onSubmit={e => e.preventDefault()}>
        <h1>Rejestracja:</h1>
        <div className="inputs-flex">
          {/* <input type="text" placeholder='Imię' /> */}
          <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder='Hasło' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="form-buttons-flex">
          <Link to="/login" className='form-buttons-flex-link'>Już masz konto?</Link>
          <button onClick={handlerSubmit}>Zarejestruj się</button>
        </div>
      </form>
    </div>
  )
}
