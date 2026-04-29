import { useState, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/img/logo.svg';
import cartImg from '../../assets/img/cart.svg';
import './header.css';

const Header = () => {
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartCount = useMemo(() => 
        cart?.reduce((sum, item) => sum + (Number(item.count) || 1), 0) || 0, 
        [cart]
    );

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) closeMenu();
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="header-logo" onClick={closeMenu}>
                    <img src={logo} alt="Логотип" />
                </NavLink>

                <nav 
                    className={`header-nav ${isMenuOpen ? 'open' : ''}`}
                    id="mobile-menu"
                >
                    <NavLink to="/" className="header-link" onClick={closeMenu}>Главная</NavLink>
                    <NavLink to="/catalog" className="header-link" onClick={closeMenu}>Каталог</NavLink>
                    <NavLink to="/about" className="header-link" onClick={closeMenu}>О нас</NavLink>
                    <NavLink to="/faq" className="header-link" onClick={closeMenu}>FAQ</NavLink>
                    <NavLink to="/partners" className="header-link" onClick={closeMenu}>Партнеры</NavLink>
                </nav>

                <div className="header-actions">
                    <NavLink to="/cart" className="header-cart" onClick={closeMenu}>
                        <img src={cartImg} alt="Корзина" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </NavLink>

                    <button 
                        className={`burger-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Меню"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div 
                className={`menu-overlay ${isMenuOpen ? 'visible' : ''}`} 
                onClick={closeMenu}
            />
        </header>
    );
};

export default Header;