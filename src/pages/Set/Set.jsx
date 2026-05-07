import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../assets/products';
import './set.css';

const SetN = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedIds, setSelectedIds] = useState([]);
    
    // 🔹 ФИКСИРОВАННЫЙ ОБЪЁМ: только 500 мл
    const volume = '500';
    const pricePerBottle = 250;
    const setPrice = 2400; 

    // 🔹 Фильтр: только 500 мл + убираем дубликаты по названию
    const uniqueFlavors = useMemo(() => {
        const seen = new Set();
        const filtered = products.filter(p => {
            // 🔹 Добавлено: p.volume !== '500' → фильтруем только 500 мл
            if (p.isSet || p.volume !== '500' || seen.has(p.name)) return false;
            seen.add(p.name);
            return true;
        });
        console.log('🎨 Доступные вкусы (500 мл):', filtered.map(f => f.name));
        return filtered;
    }, []);

    useEffect(() => {
        console.log('📦 SetN loaded. Unique 500ml flavors:', uniqueFlavors.length);
    }, [uniqueFlavors]);

    const toggleFlavor = (id) => {
        setSelectedIds(prev => {
            if (prev.includes(id)) return prev.filter(pid => pid !== id);
            if (prev.length >= 6) return prev;
            return [...prev, id];
        });
    };

    const handleAddSet = () => {
        if (selectedIds.length !== 6) {
            alert('Выберите ровно 6 вкусов!');
            return;
        }

        const flavors = uniqueFlavors.filter(p => selectedIds.includes(p.id)).map(p => p.name);

        addToCart({
            id: 999,
            name: "КОНСТРУКТОР (12 шт.)",
            cost: setPrice,
            volume: volume,
            count: 1,
            isSet: true,
            selectedFlavors: flavors
        });

        navigate('/cart');
    };

    if (uniqueFlavors.length === 0) {
        return (
            <div className="set-builder">
                <h2>Загрузка вкусов...</h2>
            </div>
        );
    }

    return (
        <div className="set-builder">
            <h2>Собери свой набор</h2>
            <p className="set-desc">Выбери ровно 6 вкусов. Мы упакуем по 2 бутылки каждого (итого 12 шт. по 500 мл)</p>

            <div className="set-progress">
                Выбрано: <strong>{selectedIds.length}/6</strong>
                {selectedIds.length === 6 && <span className="success-text">Готово!</span>}
            </div>

            <div className="set-grid">
                {uniqueFlavors.map(p => {
                    const isSelected = selectedIds.includes(p.id);
                    return (
                        <div key={p.id} className={`set-card ${isSelected ? 'selected' : ''}`}>
                            <img src={p.img} alt={p.name} />
                            <h3>{p.name}</h3>
                            <p className="set-taste">{p.taste}</p>
                            <button 
                                onClick={() => toggleFlavor(p.id)} 
                                disabled={selectedIds.length >= 6 && !isSelected}
                            >
                                {isSelected ? '✓ Выбрано' : 'Выбрать'}
                            </button>
                        </div>
                    );
                })}
            </div>

            <button 
                className="submit-set-btn" 
                disabled={selectedIds.length !== 6} 
                onClick={handleAddSet}
            >
                {selectedIds.length === 6 
                    ? `Добавить набор — ${setPrice} ₽` 
                    : `Выбери ещё ${6 - selectedIds.length} вкус${(6 - selectedIds.length) % 10 === 1 && (6 - selectedIds.length) % 100 !== 11 ? '' : 'а'}`}
            </button>
        </div>
    );
};

export default SetN;