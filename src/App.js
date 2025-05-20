import {Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout';
function App() {
  return (
    <div className="">
      <Layout></Layout>
      <Routes>
        <Route path='/' element></Route>
      </Routes>
    </div>
  );
}

export default App;
