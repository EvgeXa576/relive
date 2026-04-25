import SliderHome from '../../components/SliderHome/SliderHome'
import SliderSwiper from '../../components/SliderSwiper/SliderSwiper'
import './partners.css'

import pinkHeart from '../../assets/img/pink-heart.svg'
import greenHeart from '../../assets/img/green-heart.svg'

import formDecor1 from '../../assets/img/form-partners-decor1.svg'
import formDecor2 from '../../assets/img/form-partners-decor2.svg'

// import dottedGrass from '../../assets/img/dotted-grass.svg'
// import grass from '../../assets/img/grass.svg'

const Partners = () => {
    return (
        <>
            <section className="partners__hero">
                <div className="partners__hero-wrap">
                    <div className="partners__hero-title-wrap">
                        <h1 className="partners__hero-title">КОМБУЧА <br />RELIVE </h1>
                        <h3 className="partners__hero-small">ex Live Brew</h3>
                    </div>
                    <div className='partners__hero-line'></div>
                    <h1 className="partners__hero-subtitle">НЕ НАПИТОК, <br />А ОБРАЗ <br />ЖИЗНИ</h1>
                </div>
                <p className='partners__hero-text'>© Наша миссия - сделать так, чтобы о комбуче узнали.</p>
            </section>
            <section className="partners__slider">
                <h2 className="partners__slider-title">НАШИ ПАРТНЕРЫ</h2>
                <p className="partners__slider-text">Вместе мы создаем здоровое и лучшее будущее</p>
                <SliderSwiper />
            </section>
            <SliderHome>

                <div className="carousel-item">ЧИСТЫЙ НАТУРАЛЬНЫЙ СОСТАВ</div>
                <div className="carousel-item"><img src={pinkHeart} alt="heart" /></div>
                <div className="carousel-item">НАСТОЯЩИЙ ЖИВОЙ ПРОДУКТ</div>
                <div className="carousel-item"><img src={greenHeart} alt="heart" /></div>
                <div className="carousel-item">ИСКЛЮЧИТЕЛЬНО ВЫСОКОЕ КАЧЕСТВО</div>

            </SliderHome>
            <section className="form__partners-section">
                <div className="form__partners-main">
                    <img src={formDecor1} alt="decorate" className='form__partners-img' />
                    <form action="#" className="form__partners">
                        <h2 className="form__partners-title">КАК СТАТЬ ПАРТНЕРОМ?</h2>
                        <input className='form__partners-input' type="text" name="name" id="name" placeholder='ФИО' />
                        <input className='form__partners-input' type="tel" name="tel" id="tel" placeholder='Телефон' />
                        <input className='form__partners-input' type="email" name="email" id="email" placeholder='Email' />
                        <input className='form__partners-input' type="text" name="company" id="company" placeholder='Название организации' />
                        <button type="submit" className='form__partners-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                     <img src={formDecor2} alt="decorate" className='form__partners-img' />
                </div>
            </section>
        </>
    )
}

export default Partners