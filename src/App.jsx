import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About/About'
import HomePage from './pages/HomePage/HomePage'
import Partners from './pages/Partners/Partners';
import Catalog from './pages/Catalog/Catalog';
import CardProduct from './pages/CardProduct/CardProduct';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart/Cart';


function App() {


  return (
    <>
    <CartProvider>
     <Header/>
    
    
     <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/partners" element={<Partners/>} />
      <Route path="/catalog" element={<Catalog/>} />
       <Route path="/product/:id" element={<CardProduct />} />
       <Route path="/cart" element={<Cart/>} />
      
      {/* Маршрут для 404 страницы. path="*" сработает, если ни один из путей не совпал */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes> 
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App
