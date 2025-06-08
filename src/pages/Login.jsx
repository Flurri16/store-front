import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/authSlice'
import { toast } from 'react-toastify'
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const message = useSelector(state => state.auth.message)
  const isOkej = useSelector(state => state.auth.isOkej)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handlerSubmit = () => {
    try {
      dispatch(loginUser({email, password}))
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if(message) toast(message)
    if(isOkej) navigate("/")
  }, [message, isOkej])
  return (
    <div className='form'>
      <form onSubmit={e => e.preventDefault()}>
        <h1>Logowanie:</h1>
        <div className="inputs-flex">
          <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder='Hasło' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="form-buttons-flex">
          <Link to="/register" className='form-buttons-flex-link'>Nie masz konta?</Link>
          <button onClick={handlerSubmit}>Zaloguj się</button>
        </div>
      </form>
    </div>
  )
}
