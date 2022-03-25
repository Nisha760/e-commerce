import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import './global.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          {/* <Home /> */}
        </Layout>
      </Router>
    </>
  );
}

export default App;
