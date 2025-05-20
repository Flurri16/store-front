import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
// import Sklep from './pages/Sklep';
import Main from './pages/Main';
function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
