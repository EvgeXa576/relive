import { useCart } from '../../context/CartContext';
import './quantity-control.css';

export default function QuantityControl({ product }) {
    const { cart, updateCount, removeFromCart } = useCart();
    
    // Находим товар в корзине
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem?.count || 0;
    
    if (quantity === 0) {
        return null; // Если товара нет в корзине, ничего не показываем
    }
    
    return (
        <div className="quantity-control">
            <button 
                className="quantity-btn minus"
                onClick={() => updateCount(product.id, quantity - 1)}
            >
                -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
                className="quantity-btn plus"
                onClick={() => updateCount(product.id, quantity + 1)}
            >
                +
            </button>
        </div>
    );
}