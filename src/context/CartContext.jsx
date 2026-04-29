import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useLocalStorage('cart', []);

    // 🔹 Уникальный ключ для товара: id + volume
    const getCartKey = (product, volume) => `${product.id}_${volume}`;

    const addToCart = useCallback((product, volume = null) => {
        setCart(prevCart => {
            // Если объём не передан — берём первый из volumes
            const selectedVolume = volume || product.volumes?.[0]?.size || product.volume;
            const volumeInfo = product.volumes?.find(v => v.size === selectedVolume) || { size: selectedVolume, cost: product.cost };
            
            const cartKey = getCartKey(product, selectedVolume);
            const existingItem = prevCart.find(item => item.cartKey === cartKey);
            
            if (existingItem) {
                return prevCart.map(item =>
                    item.cartKey === cartKey
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            
            // 🔹 Добавляем новый товар с volume и cost
            return [...prevCart, {
                cartKey,
                id: product.id,
                name: product.name,
                img: product.img,
                volume: selectedVolume,
                cost: volumeInfo.cost,
                count: 1
            }];
        });
    }, [setCart]);

    const removeFromCart = useCallback((cartKey) => {
        setCart(prevCart => prevCart.filter(item => item.cartKey !== cartKey));
    }, [setCart]);

    const updateCount = useCallback((cartKey, newCount) => {
        if (newCount <= 0) {
            removeFromCart(cartKey);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.cartKey === cartKey
                    ? { ...item, count: newCount }
                    : item
            )
        );
    }, [setCart, removeFromCart]);

    const clearCart = useCallback(() => {
        setCart([]);
    }, [setCart]);

    // 🔹 Вспомогательная функция: получить сумму корзины
    const getTotal = useCallback(() => {
        return cart.reduce((sum, item) => sum + item.cost * item.count, 0);
    }, [cart]);

    // 🔹 Вспомогательная функция: общее количество товаров
    const getTotalCount = useCallback(() => {
        return cart.reduce((sum, item) => sum + item.count, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateCount, 
            clearCart,
            getTotal,
            getTotalCount
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