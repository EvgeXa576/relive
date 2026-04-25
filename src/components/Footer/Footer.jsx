import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-list">
                    <h2 className="footer-title">RELIVE</h2>
                    <a className="footer-link" href="main.html">Главная</a>
                    <a className="footer-link" href="catalog.html">Каталог</a>
                    <a className="footer-link" href="about.html">О нас</a>
                    <a className="footer-link" href="partners.html">Партнеры</a>
                    <a className="footer-link" href="cart.html">Корзина</a>
                </div>
                <div className="footer-bottom">
                    <p className="footer__bottom-item">2025 Relive Combucha</p>
                    <p className="footer__bottom-item">Вопросы: <br /> kombucha@livebrewtea.ru</p>
                    <p className="footer__bottom-item">Сотрудничество: <br /> 4partner@livebrewtea.ru</p>
                    <p className="footer__bottom-item">ООО "Вкус от природы" <br /> ИНН 6671456280</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer