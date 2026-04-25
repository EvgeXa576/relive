import { useCart } from '../../context/CartContext';
import './add_to_cart.css';

export default function AddToCart({ product }) {
    const { cart, addToCart } = useCart();
    
    // Проверяем, есть ли товар в корзине
    const isInCart = cart.some(item => item.id === product.id);
    
    return(
        <button 
            type="submit" 
            className={`btn-add ${isInCart ? 'in-cart' : ''}`}
            onClick={() => addToCart(product)}
            disabled={isInCart}
        >
            {isInCart ? 'В КОРЗИНЕ' : 'ДОБАВИТЬ'}
        </button>
    );
}