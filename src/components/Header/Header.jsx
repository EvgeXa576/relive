import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg'
import './header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <nav className="header-wrap">
                <NavLink to="/" className="header-link"><img src={logo} alt="logo"></img></NavLink>
                <NavLink to="/" className="header-link">Главная</NavLink>
                <NavLink to="/catalog" className="header-link">Каталог</NavLink>
                <NavLink to="/about" className="header-link">О нас</NavLink>
                <NavLink to="/partners" className="header-link">Партнеры</NavLink>
                <NavLink to="/cart" className="header-link"><img src={cart} alt="cart"></img></NavLink>
            </nav>
        </header>
    )
}
export default Header