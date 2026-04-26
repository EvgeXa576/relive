import logo from '../../assets/img/logo.svg'
import cartImg from '../../assets/img/cart.svg'
import './header.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
const Header = () => {
    const { cart } = useCart();
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        const total = cart.reduce((sum, item) => {
        const count = Number(item.count) || 1; 
        return sum + count;
    }, 0);
    
    setCartCount(total);
    }, [cart])

    return (
        <header className="header">
            <nav className="header-wrap">
                <NavLink to="/" className="header-link"><img src={logo} alt="logo"></img></NavLink>
                <NavLink to="/" className="header-link">Главная</NavLink>
                <NavLink to="/catalog" className="header-link">Каталог</NavLink>
                <NavLink to="/about" className="header-link">О нас</NavLink>
                <NavLink to="/faq" className="header-link">FAQ</NavLink>
                <NavLink to="/partners" className="header-link">Партнеры</NavLink>
                <NavLink to="/cart" className="header-link header-cart"><img src={cartImg} alt="cart"></img><p className='cart-count'>{cartCount}</p></NavLink>
            </nav>
        </header>
    )
}
export default Header