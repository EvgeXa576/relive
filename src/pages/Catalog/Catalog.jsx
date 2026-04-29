import { useState, useMemo } from 'react';
import SliderHome from '../../components/SliderHome/SliderHome'
import './catalog.css'
import useLocalStorage from '../../hooks/useLocalStorage';

import pinkHeart from '../../assets/img/pink-heart.svg'
import greenHeart from '../../assets/img/green-heart.svg'
import products from '../../assets/products'
import { Link } from 'react-router-dom'
import AddToCart from '../../components/AddToCart/AddToCart'

function Catalog() {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [selectedCategory, setSelectedCategory] = useState('все');
    const [searchQuery, setSearchQuery] = useState('');
    const [open, setOpen] = useState(false);

    // Получаем уникальные категории
    const categories = ['все', ...new Set(products.map(product => product.category))];

    // 🔹 Вспомогательные функции для работы с volumes
    const getMinPrice = (product) => {
        return Math.min(...product.volumes.map(v => v.cost));
    };

    const getDefaultVolume = (product) => {
        return product.volumes.find(v => v.size === '350')?.size || product.volumes[0].size;
    };

    // Фильтрация товаров (мемоизируем, чтобы не пересчитывать при каждом рендере)
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const categoryMatch = selectedCategory === 'все' || product.category === selectedCategory;
            const searchMatch = searchQuery === '' ||
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.taste.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <>
            <div className="catalog__hero">
                <h1 className="catalog__hero-title">НАБОР ПЕРВООТКРЫВАТЕЛЯ</h1>
                <h3 className="catalog__hero-subtitle">6 ВКУСОВ В ОДНОЙ КОРОБКЕ</h3>
                <p className="catalog__hero-cost">1200 руб.</p>
                <button type="button" className="catalog__hero-btn">ДОБАВИТЬ</button>
            </div>

            <SliderHome>
                <div className="carousel-item">ЧИСТЫЙ НАТУРАЛЬНЫЙ СОСТАВ</div>
                <div className="carousel-item"><img src={pinkHeart} alt="heart" /></div>
                <div className="carousel-item">НАСТОЯЩИЙ ЖИВОЙ ПРОДУКТ</div>
                <div className="carousel-item"><img src={greenHeart} alt="heart" /></div>
                <div className="carousel-item">ИСКЛЮЧИТЕЛЬНО ВЫСОКОЕ КАЧЕСТВО</div>
            </SliderHome>

            <section className='catalog'>
                <h1 className="catalog_products-title">Каталог</h1>
                
                <Link to='/quiz'
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="quiz-bunner">
                        <h2>Не знаешь что выбрать?</h2>
                        <h3>Пройди тест и подбери напиток идеально под себя</h3>
                        <span className="quiz-btn">Пройти сейчас</span>
                    </div>
                </Link>

                {/* Фильтры */}
                <div className="catalog__filters">
                    <div className="catalog__search">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Поиск"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="custom-select">
                        <button className="select-btn" onClick={() => setOpen(!open)}>
                            {selectedCategory === 'все' ? 'ВСЕ КАТЕГОРИИ' : selectedCategory}
                            <span className="arrow">{open ? '▲' : '▼'}</span>
                        </button>

                        {open && (
                            <div className="select-dropdown">
                                {categories.map(cat => (
                                    <div
                                        key={cat}
                                        className="select-option"
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setOpen(false);
                                        }}
                                    >
                                        {cat === 'все' ? 'ВСЕ КАТЕГОРИИ' : cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Сетка товаров */}
                <div className="catalog_products">
                    {filteredProducts.map(product => {
                        const minPrice = getMinPrice(product);
                        const defaultVolume = getDefaultVolume(product);
                        
                        return (
                            <div key={product.id} className="product-card">
                                <Link
                                    to={`/product/${product.id}`}
                                    state={{ 
                                        product, 
                                        selectedVolume: defaultVolume 
                                    }}
                                    className="product-card-link"
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                >
                                    <img src={product.img} alt={product.name} />
                                    <h2>{product.name}</h2>
                                    <p>{product.taste}</p>
                                    
                                    {/* 🔹 Показываем "от" если есть несколько объёмов */}
                                    <div className="product-info">
                                        <span>{defaultVolume} мл</span>
                                        <span>
                                            {product.volumes.length > 1 ? `от ${minPrice}` : minPrice} ₽
                                        </span>
                                    </div>
                                </Link>
                                
                                {/* 🔹 Передаём defaultVolume в AddToCart */}
                                <AddToCart 
                                    product={product} 
                                    selectedVolume={defaultVolume}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Пустое состояние */}
                {filteredProducts.length === 0 && (
                    <div className="no-products">
                        <p>Товаров не найдено</p>
                        <button
                            className="reset-filters"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('все');
                            }}
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                )}
            </section>
        </>
    )
}

export default Catalog;