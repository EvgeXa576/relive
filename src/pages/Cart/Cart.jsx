import { useCart } from '../../context/CartContext';
import products from '../../assets/products';
import { Link } from 'react-router-dom';
import './cart.css';
import QuantityControl from '../../components/QuantityControl/QuantityControl';
import { useState } from 'react';

export default function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, clearCart, removeFromCart } = useCart();

    // Состояния для формы
    const [formData, setFormData] = useState({ name: '', tel: '+7 ' });
    const [errors, setErrors] = useState({}); // Состояние для хранения ошибок полей
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product?.cost || 0) * item.count;
    }, 0);

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
            // Разрешаем вводить только буквы и пробелы
            newValue = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));

        // Очищаем ошибку поля при вводе
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};

        // Проверка ФИО
        if (!formData.name.trim()) {
            newErrors.name = 'Поле ФИО не может быть пустым';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Введите корректное имя';
        }

        // Проверка Телефона
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

        const orderList = cart.map(item => {
            const p = products.find(prod => prod.id === item.id);
            return `${p.name} (${item.count} шт.) — ${p.cost * item.count} руб.`;
        }).join('\n');

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('tel', formData.tel);
            data.append('order', orderList);
            data.append('total', total);

            console.log("Отправляемые данные (объект):", Object.fromEntries(data.entries()));
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
            {/* ... (код списка товаров без изменений) ... */}
            <h1>Корзина</h1>
            <div className="cart-actions">
                <button className="clear-cart" onClick={clearCart}>Очистить корзину</button>
                <Link to="/catalog" className="continue-shopping">Продолжить покупки</Link>
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