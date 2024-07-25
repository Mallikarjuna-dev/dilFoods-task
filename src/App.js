import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Login from './components/Auth/login';
import Register from './components/Auth/Register';
import Navbar from './components/Nav';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
