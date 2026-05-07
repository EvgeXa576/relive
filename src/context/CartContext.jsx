import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useLocalStorage('cart', []);

        

    const addToCart = useCallback((product, qty = 1) => {
    setCart(prevCart => {
        // Для сетов генерируем уникальный ID, чтобы можно было добавить несколько разных наборов
        const cartId = product.isSet ? `set_${Date.now()}` : product.id;
        
        const existingItem = prevCart.find(item => item.cartId === cartId || item.id === product.id);
        
        if (existingItem) {
            return prevCart.map(item =>
                item.cartId === cartId || item.id === product.id
                    ? { ...item, count: item.count + qty }
                    : item
            );
        }
        
        // 📦 Сохраняем все переданные поля в корзину
        return [...prevCart, { ...product, cartId, count: qty }];
    });
}, [setCart]);

    const removeFromCart = useCallback((productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }, [setCart]);

    const updateCount = useCallback((productId, newCount) => {
        if (newCount <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, count: newCount }
                    : item
            )
        );
    }, [setCart, removeFromCart]);

    const clearCart = useCallback(() => {
        setCart([]);
    }, [setCart]);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateCount, 
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}