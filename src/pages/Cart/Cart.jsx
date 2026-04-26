import { useCart } from '../../context/CartContext';
import products from '../../assets/products';
import { Link } from 'react-router-dom';
import './cart.css';
import QuantityControl from '../../components/QuantityControl/QuantityControl';
import { useState } from 'react';

export default function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, updateCount, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart">
                <div className="cart-empty">
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары из каталога</p>
                    <Link to="/">Вернуться в каталог</Link>
                </div>
            </div>
        );
    }

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product?.cost || 0) * item.count;
    }, 0);

    return (
        <div className="cart">
            <h1>Корзина</h1>

            <div className="cart-actions">
                <button className="clear-cart" onClick={clearCart}>
                    Очистить корзину
                </button>
                <Link to="/" className="continue-shopping">
                    Продолжить покупки
                </Link>
            </div>

            {cart.map(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return null;

                return (
                    <div key={item.id} className="cart-item">
                        <img src={product.img} alt={product.name} />

                        <div className="cart-item-info">
                            <h3>{product.name}</h3>
                            <p>{product.taste}</p>
                            <p className="volume">Объем: {product.volume} мл</p>
                            <p className="price">{product.cost} руб.</p>
                        </div>

                        <div className="cart-item-controls">
                            <QuantityControl product={product} />
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </div>
                    </div>
                );
            })}

            <div className="cart-total">
                <h3>Итого: {total} руб.</h3>
            </div>
            <button className='cart__order-btn' onClick={() => setIsModalOpen(true)}>Оформить заказ</button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>x</button>

                        <form className="form__order">
                            <h2 className="form__order-title">Оформление заказа</h2>

                            <div className="input-group">
                                <input
                                    className={`form__order-input`}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='ФИО'

                                />

                            </div>

                            <div className="input-group">
                                <input
                                    className={`form__order-input`}
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder='Телефон'

                                />

                            </div>

                            <button
                                type="submit"
                                className='form__order-btn'

                            >
                                Отправить
                            </button>

                        </form>
                    </div>
                </div>
            )}


        </div>
    );
}