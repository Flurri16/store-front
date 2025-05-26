import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
// import Sklep from './pages/Sklep';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import AddItem from './pages/AddItem';
import {ToastContainer} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './redux/authSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/add' element={<AddItem></AddItem>}></Route>
        </Routes>
      <ToastContainer position="bottom-right"></ToastContainer>
      </Layout>
    </div>
  );
}

export default App;
