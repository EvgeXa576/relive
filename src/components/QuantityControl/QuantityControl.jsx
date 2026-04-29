import { useCart } from "../../context/CartContext";
import './quantity-control.css'

export default function QuantityControl({ product, cartKey, volume, selectedVolume }) {
    const { cart, updateCount } = useCart();
    
    // 🔹 Если передан cartKey — используем его (режим корзины/товара)
    const key = cartKey || (product ? `${product.id}_${selectedVolume || product.volumes?.[0]?.size}` : null);
    
    if (!key) return null;
    
    const cartItem = cart.find(item => item.cartKey === key);
    const quantity = cartItem?.count || 0;
    
    if (quantity === 0) return null;
    
    const handleChange = (newCount) => {
        updateCount(key, newCount);
    };
    
    return (
        <div className="quantity-control">
            <button className="quantity-btn minus" onClick={() => handleChange(quantity - 1)}>−</button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-btn plus" onClick={() => handleChange(quantity + 1)}>+</button>
        </div>
    );
}