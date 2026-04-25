import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-list">
                    <h2 className="footer-title">RELIVE</h2>
                    {/* Заменяем <a> на NavLink и исправляем пути */}
                    <NavLink className="footer-link" to="/">Главная</NavLink>
                    <NavLink className="footer-link" to="/catalog">Каталог</NavLink>
                    <NavLink className="footer-link" to="/about">О нас</NavLink>
                    <NavLink className="footer-link" to="/partners">Партнеры</NavLink>
                    <NavLink className="footer-link" to="/cart">Корзина</NavLink>
                </div>
                <div className="footer-bottom">
                    <p className="footer__bottom-item">2025 Relive Combucha</p>
                    <p className="footer__bottom-item">
                        Вопросы: <br />
                        <a href="mailto:kombucha@livebrewtea.ru">kombucha@livebrewtea.ru</a>
                    </p>
                    <p className="footer__bottom-item">
                        Сотрудничество: <br />
                        <a href="mailto:4partner@livebrewtea.ru">4partner@livebrewtea.ru</a>
                    </p>
                    <p className="footer__bottom-item">ООО "Вкус от природы" <br /> ИНН 6671456280</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;