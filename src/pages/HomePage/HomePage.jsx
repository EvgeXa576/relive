import './homePage.css'
import products from '../../assets/products'
import bottle from '../../assets/img/bottle.png'
import heartShine from '../../assets/img/heartShine.svg'
import pinkHeart from '../../assets/img/pink-heart.svg'
import greenHeart from '../../assets/img/green-heart.svg'

import clock from '../../assets/img/clock.svg'
import mountain from '../../assets/img/mountain.png'
import butterflies from '../../assets/img/butterflies.svg'
import feathers from '../../assets/img/feathers.svg'
import tea from '../../assets/img/tea.svg'
import dottedGrass from '../../assets/img/dotted-grass.svg'
import grass from '../../assets/img/grass.svg'

import bee from '../../assets/img/bee.svg'
import flowersLeaves from '../../assets/img/flowers-leaves.svg'
import SliderHome from '../../components/SliderHome/SliderHome'

import Slide1 from '../../assets/img/SliderHome1.jpg'
import Slide2 from '../../assets/img/SliderHome2.jpg'
import Slide3 from '../../assets/img/SliderHome3.JPG'
import Slide4 from '../../assets/img/SliderHome4.webp'
import Slide5 from '../../assets/img/SliderHome5.JPG'
import Slide6 from '../../assets/img/SliderHome6.jpg'
import HealthHome from '../../components/HealthHome/HealthHome'
import { Link } from 'react-router-dom'
import AddToCart from '../../components/AddToCart/AddToCart'

const HomePage = () => {
    const images = [
        { id: 1, url: Slide1, alt: 'Слайд 1' },
        { id: 2, url: Slide2, alt: 'Слайд 2' },
        { id: 3, url: Slide3, alt: 'Слайд 3' },
        { id: 4, url: Slide4, alt: 'Слайд 4' },
        { id: 5, url: Slide5, alt: 'Слайд 5' },
        { id: 6, url: Slide6, alt: 'Слайд 6' },
    ];

    // 🔹 Берём первые 3 товара для хитов
    const hits = products.slice(0, 3);

    // 🔹 Вспомогательные функции для работы с volumes
    const getMinPrice = (product) => {
        return Math.min(...product.volumes.map(v => v.cost));
    };

    const getDefaultVolume = (product) => {
        return product.volumes.find(v => v.size === '350')?.size || product.volumes[0].size;
    };

    return (
        <>
            <section className="hero">
                <div className="hero-wrap">
                    <div className="title-wrap">
                        <h1 className="hero-title">Комбуча Relive</h1>
                        <h3 className='hero-title-small'>ex Live Brew</h3>
                    </div>
                    <img src={bottle} alt="bottle" className="bottle" />
                    <div className="subtitle-wrap">
                        <h2 className="hero-subtitle">{/* Desktop версия */}
        <span className="subtitle-desktop">
            Не напиток,<br /> а образ<br /> жизни
        </span>
        {/* Mobile версия */}
        <span className="subtitle-mobile">наш образ жизни</span></h2>
                        <img src={heartShine} alt="heart-shine" className='hero-heart' />
                    </div>
                </div>

                <SliderHome>
                    <div className="carousel-item">ЧИСТЫЙ НАТУРАЛЬНЫЙ СОСТАВ</div>
                    <div className="carousel-item"><img src={pinkHeart} alt="heart"/></div>
                    <div className="carousel-item">НАСТОЯЩИЙ ЖИВОЙ ПРОДУКТ</div>
                    <div className="carousel-item"><img src={greenHeart} alt="heart"/></div>
                    <div className="carousel-item">ИСКЛЮЧИТЕЛЬНО ВЫСОКОЕ КАЧЕСТВО</div>
                    <div className="carousel-item">ЧИСТЫЙ НАТУРАЛЬНЫЙ СОСТАВ</div>
                    <div className="carousel-item"><img src={pinkHeart} alt="heart"/></div>
                    <div className="carousel-item">НАСТОЯЩИЙ ЖИВОЙ ПРОДУКТ</div>
                    <div className="carousel-item"><img src={greenHeart} alt="heart"/></div>
                    <div className="carousel-item">ИСКЛЮЧИТЕЛЬНО ВЫСОКОЕ КАЧЕСТВО</div>
                </SliderHome>
            </section>

            <HealthHome/>

            <section className="relive">
                <div className="relive-wrap">
                    <h1 className="relive-title">Комбуча Relive</h1>
                    <h2 className="relive-subtitle">С любовью с Урала</h2>
                    <div className="boxes-wrap">
                        <div className="relive__box-item clock-box">
                            <p className="relive__box-text">длительная и естественная ферментация</p>
                            <img src={clock} alt="clock" className="relive__icon" />
                        </div>
                        <div className="relive__box-item mountain">
                            <img src={mountain} alt="mountain" />
                        </div>
                        <div className="relive__box-item butterflies">
                            <p className="relive__box-text">живой продукт без пастеризации</p>
                            <img src={butterflies} alt="butterflies" className="relive__icon" />
                        </div>
                        <div className="relive__box-item feathers">
                            <p className="relive__box-text">бережное, щадящее производство</p>
                            <img src={feathers} alt="feathers" className="relive__icon" />
                        </div>
                        <div className="relive__box-item flowers">
                            <p className="relive__box-text">без добавок и консервантов</p>
                            <img src={clock} alt="flowers" className="relive__icon" />
                        </div>
                        <div className="relive__box-item tea">
                            <p className="relive__box-text">цельнолистовой чай лучшего качества</p>
                            <img src={tea} alt="tea" className="relive__icon" />
                        </div>
                    </div>
                    <div className="relive__bottom-wrap">
                        <img src={dottedGrass} alt="dotted-grass" className="dotted" />
                        <img src={grass} alt="double-grass" className="double" />
                    </div>
                </div>
            </section>

            {/* 🔹 БЕСТСЕЛЛЕРЫ — обновлено под volumes */}
            <div className="home-hits">
                <div className="hits-title">БЕСТСЕЛЛЕРЫ</div>
                <div className="hits">
                    {hits.map(product => {
                        const minPrice = getMinPrice(product);
                        const defaultVolume = getDefaultVolume(product);
                        
                        return (
                            <div key={product.id} className="hits-card">
                                <Link
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                    to={`/product/${product.id}`}
                                    state={{ 
                                        product, 
                                        selectedVolume: defaultVolume 
                                    }}
                                    className="hits-card-link"
                                >
                                    <img src={product.img} alt={product.name} />
                                    <h2>{product.name}</h2>
                                    <p>{product.taste}</p>
                                    <div className="hits-info">
                                        <span>{defaultVolume} мл</span>
                                        <span>
                                            {product.volumes.length > 1 ? `от ${minPrice}` : minPrice} ₽
                                        </span>
                                    </div>
                                </Link>
                                <AddToCart 
                                    product={product} 
                                    selectedVolume={defaultVolume}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <section className="slider">
                <div className="slider-wrap">
                    <div className="title-slider">
                        <img src={flowersLeaves} alt="leaves" className='title-slide__img'/>
                        <div className="titles">
                            <h2 className="slider-title">Лучший пример - это мы сами</h2>
                            <div className="heart-wrap">
                                <h2 className="slider-subtitle">Быть здоровыми веселее вместе</h2>
                                <img src={greenHeart} alt="heart" />
                            </div>
                        </div>
                        <img src={bee} alt="bee" className='title-slide__img'/>
                    </div>
                    <SliderHome>
                        {images.map((img, idx) => (
                            <img key={img.id} src={img.url} alt={`img-${idx}`} className="slider-images__img" />
                        ))}
                    </SliderHome>
                </div>
            </section>
        </>
    )
}
export default HomePage;