import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
// import Sklep from './pages/Sklep';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
