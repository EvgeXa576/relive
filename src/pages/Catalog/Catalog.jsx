import { useState } from 'react';
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

    // Получаем уникальные категории из товаров
    const categories = ['все', ...new Set(products.map(product => product.category))];

    // Фильтруем товары по категории и поиску
    const filteredProducts = products.filter(product => {
        // Фильтр по категории
        const categoryMatch = selectedCategory === 'все' || product.category === selectedCategory;

        // Фильтр по поиску (по названию и вкусу)
        const searchMatch = searchQuery === '' ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.taste.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <>
            <div className="catalog__hero">
                <h1 className="catalog__hero-title">НАБОР ПЕРВООТКРЫВАТЕЛЯ</h1>
                <h3 className="catalog__hero-subtitle">6 ВКУСОВ В ОДНОЙ КОРОБКЕ</h3>
                <p className="catalog__hero-cost">2400 руб.</p>

                <Link to="/set-n" className="catalog__hero-btn"> Собрать набор из 10</Link>
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
                <Link to='/quiz'>
                <div className="quiz-bunner">
                    <h2>Не знаешь что выбрать?</h2>
                    <h3>Пройди тест и подбери напиток идеально под себя</h3>
                    <button>Пройти сейчас</button>
                </div>
</Link>
                {/* Фильтры */}
                <div className="catalog__filters">
                    {/* Поиск */}
                    <div className="catalog__search">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Поиск"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                    </div>

                    {/* Категории */}
                    <div className="custom-select">
                        <button
                            className="select-btn"
                            onClick={() => setOpen(!open)}
                        >
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



                <div className="catalog_products">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <Link
                                to={`/product/${product.id}`}
                                className="product-card-link"
                                state={{ product }}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >   <div className="img-wrapper">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <h2>{product.name}</h2>
                                <div className="product-info">
                                    <span>{product.volume} мл</span>
                                    <span>{product.cost} руб.</span>
                                </div>
                            </Link>
                            <AddToCart product={product} />
                        </div>
                    ))}
                </div>

                {/* Если нет товаров */}
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

export default Catalog