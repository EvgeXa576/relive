import { useCart } from '../../context/CartContext';
import './add_to_cart.css';

export default function AddToCart({ product, selectedVolume }) {
    const { cart, addToCart } = useCart();
    
    // 🔹 Если объём не передан — берём первый из доступных
    const volume = selectedVolume || product.volumes?.[0]?.size || product.volume;
    
    // 🔹 Формируем ключ так же, как в контексте: id_volume
    const cartKey = `${product.id}_${volume}`;
    
    // 🔹 Проверяем наличие по cartKey (а не только по id)
    const isInCart = cart.some(item => item.cartKey === cartKey);
    
    const handleClick = () => {
        // 🔹 Передаём выбранный объём вторым аргументом
        addToCart(product, volume);
    };
    
    return (
        <button 
            type="button" 
            className={`btn-add ${isInCart ? 'in-cart' : ''}`}
            onClick={handleClick}
            disabled={isInCart}
        >
            {isInCart ? 'В КОРЗИНЕ' : 'ДОБАВИТЬ'}
        </button>
    );
}