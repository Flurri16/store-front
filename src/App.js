import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import { Navigate } from 'react-router-dom'
// import Sklep from './pages/Sklep';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import AddItem from './pages/AddItem';
import {ToastContainer} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './redux/authSlice';
import PrzedmiotStrona from './pages/PrzedmiotStrona';
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import CheckoutForm from './pages/CheckoutForm'
function App() {
  const dispatch = useDispatch()
  const email = useSelector(state => state.auth.email)
  const items = useSelector(state => state.cart.items)
  
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
    useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }, [items])
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="/add"
        
        element={
          email === 'admin@gmail.com'
            ? <AddItem />
            : <Navigate to="/" replace />
        }
      />
          <Route path='/:id' element={<PrzedmiotStrona></PrzedmiotStrona>}></Route>
          <Route path='/success' element={<Success></Success>}></Route>
          <Route path='/cancel' element={<Cancel></Cancel>}></Route>
        <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      <ToastContainer position="bottom-right"></ToastContainer>
      </Layout>
    </div>
  );
}

export default App;
