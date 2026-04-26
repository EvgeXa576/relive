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
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import { useLocation, matchPath } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ.jsx';

function AppContent() {
    const location = useLocation();

    // Проверяем, совпадает ли текущий путь с паттерном /product/:id
    const isProductPage = matchPath("/product/:id", location.pathname);

    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product/:id" element={<CardProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>

            {/* Рендерим Footer только если мы НЕ на странице продукта */}
            {!isProductPage && <Footer />}
        </>
    );
}


function App() {
    return (
        <CartProvider>
            <AppContent />
        </CartProvider>
    );
}

export default App
