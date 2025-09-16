// App.jsx - Componente principal de la aplicación que renderiza la barra de navegación y la página de inicio.
// Esta componente suele contener las rutas principales de la aplicación.

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Index from './components/Pages/Index.jsx';
import ProductDetails from './components/Pages/ProductDetails.jsx';
import Wishlist from './components/Pages/Wishlist.jsx';
import Cart from './components/Pages/Cart.jsx';
import Checkout from './components/Pages/Checkout.jsx';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
