import { useCart } from '../../context/CartContext';
import products from '../../assets/products';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
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
                            <button onClick={() => updateCount(item.id, item.count - 1)}>-</button>
                            <span>{item.count}</span>
                            <button onClick={() => updateCount(item.id, item.count + 1)}>+</button>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                        </div>
                    </div>
                );
            })}

            <div className="cart-total">
                <h3>Итого: {total} руб.</h3>
            </div>


        </div>
    );
}