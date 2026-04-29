import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import products from '../../assets/products';
import { Link } from 'react-router-dom';
import './cart.css';
import QuantityControl from '../../components/QuantityControl/QuantityControl';

export default function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, clearCart, removeFromCart, getTotal } = useCart();

    // Состояния для формы
    const [formData, setFormData] = useState({ name: '', tel: '+7 ' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 🔹 Если корзина пуста
    if (cart.length === 0) {
        return (
            <div className="cart">
                <div className="cart-empty">
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары из каталога</p>
                    <Link to="/catalog">Вернуться в каталог</Link>
                </div>
            </div>
        );
    }

    // 🔹 Итого берём из контекста (там уже правильный подсчёт)
    const total = getTotal();

    // Маска телефона
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '').slice(1, 11);
        let res = '+7 ';
        if (digits.length > 0) res += '(' + digits.substring(0, 3);
        if (digits.length >= 4) res += ') ' + digits.substring(3, 6);
        if (digits.length >= 7) res += '-' + digits.substring(6, 8);
        if (digits.length >= 9) res += '-' + digits.substring(8, 10);
        return res;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === 'tel') {
            newValue = formatPhone(value);
        } else if (name === 'name') {
            newValue = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Поле ФИО не может быть пустым';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Введите корректное имя';
        }
        const phoneDigits = formData.tel.replace(/\D/g, '');
        if (phoneDigits.length < 11) {
            newErrors.tel = 'Введите полный номер телефона';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setStatus('Отправка заказа...');

        // 🔹 Формируем список товаров с учётом объёма и цены из корзины
        const orderList = cart.map(item => {
            return `${item.name} (${item.volume} мл, ${item.count} шт.) — ${item.cost * item.count} руб.`;
        }).join('\n');

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('tel', formData.tel);
            data.append('order', orderList);
            data.append('total', total);

            const response = await fetch('http://localhost:8000/send_order.php', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (result.status === 'success') {
                setStatus('Заказ успешно оформлен!');
                setTimeout(() => {
                    clearCart();
                    setIsModalOpen(false);
                    setStatus('');
                    setFormData({ name: '', tel: '+7 ' });
                }, 2000);
            } else {
                setStatus('Ошибка: ' + result.message);
            }
        } catch (error) {
            setStatus('Ошибка связи с сервером');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="cart">
            <h1>Корзина</h1>
            
            <div className="cart-actions">
                <button className="clear-cart" onClick={clearCart}>Очистить корзину</button>
                <Link to="/catalog" className="continue-shopping">Продолжить покупки</Link>
            </div>

            {/* 🔹 Рендер элементов корзины по cartKey */}
            {cart.map(item => (
                <div key={item.cartKey} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>{item.volume} мл</p> {/* 🔹 Показываем объём */}
                        <p className="price">{item.cost * item.count} ₽</p>
                    </div>
                    <div className="cart-item-controls">
                        {/* 🔹 Передаём cartKey и volume в контрол */}
                        <QuantityControl cartKey={item.cartKey} volume={item.volume} />
                        <button 
                            className="remove-btn" 
                            onClick={() => removeFromCart(item.cartKey)} /* 🔹 Удаляем по cartKey */
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            ))}

            <div className="cart-total">
                <h3>Итого: {total} ₽</h3>
            </div>
            
            <button className='cart__order-btn' onClick={() => setIsModalOpen(true)}>
                Оформить заказ
            </button>

            {/* Модалка оформления */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                        <form className="form__order" onSubmit={handleSubmit} noValidate>
                            <h2 className="form__order-title">Оформление заказа</h2>

                            <div className="input-group">
                                <input
                                    className={`form__order-input ${errors.name ? 'input-error' : ''}`}
                                    type="text"
                                    name="name"
                                    placeholder='ФИО'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="input-group">
                                <input
                                    className={`form__order-input ${errors.tel ? 'input-error' : ''}`}
                                    type="tel"
                                    name="tel"
                                    placeholder='Телефон'
                                    value={formData.tel}
                                    onChange={handleChange}
                                />
                                {errors.tel && <span className="error-message">{errors.tel}</span>}
                            </div>

                            <button type="submit" className='form__order-btn' disabled={isSubmitting}>
                                {isSubmitting ? 'ОТПРАВКА...' : 'ПОДТВЕРДИТЬ ЗАКАЗ'}
                            </button>

                            {status && <p className={`form-status ${status.includes('Ошибка') ? 'status-err' : 'status-ok'}`}>{status}</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}