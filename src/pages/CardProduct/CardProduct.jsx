import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import products from '../../assets/products';
import './card_product.css'
import AddToCart from '../../components/AddToCart/AddToCart';
import QuantityControl from '../../components/QuantityControl/QuantityControl';

function CardProduct() {
    const [activeTab, setActiveTab] = useState('composition');
    const location = useLocation();
    const { id } = useParams();
    const productFromState = location.state?.product;

    // 2. Если данных в state нет (например, обновили страницу F5),
    // ищем товар в общем массиве данных по ID
    // #TODO: это можешь удалить чисто чтоб посомтерла добавил, я тут сделал проверку по id из адрессной строки что бы если мы напрямую стучались по ссылке то что то показывалось, до этого был просто белый экран
    const product = productFromState || products.find(p => p.id === parseInt(id));

    if (!product) {
        return;
    }

    return (
        <div className="product__page">
            <div className="product__page-top">
                <div className="product__page-img">
                    <img src={product?.img} alt={product?.name} />
                </div>
                <div className="product__page-info">
                    <h1 className='product__page-info-title'>{product?.name}</h1>
                    <p className='product__page-info-cost'>{product?.cost} руб.</p>
                    <p className='product__page-info-volume'>{product?.volume} мл</p>
                    <div className="product__page-info-components">
                        <h2>Основные компоненты</h2>
                        <ul>
                            {product?.components?.map((component, index) => (
                                <li key={index}>{component}</li>
                            ))}
                        </ul>
                    </div>
                    <QuantityControl product={product} />
                    <AddToCart product={product}/>
                </div>
            </div>
            <div className="product__tabs">
                <div className="tabs__headers">
                    <button 
                        className={`tab__btn ${activeTab === 'composition' ? 'active' : ''}`}
                        onClick={() => setActiveTab('composition')}
                    >
                        СОСТАВ
                    </button>
                    <button 
                        className={`tab__btn ${activeTab === 'nutrition' ? 'active' : ''}`}
                        onClick={() => setActiveTab('nutrition')}
                    >
                        ПИЩЕВАЯ ЦЕННОСТЬ
                    </button>
                    <button 
                        className={`tab__btn ${activeTab === 'other' ? 'active' : ''}`}
                        onClick={() => setActiveTab('other')}
                    >
                        ПРОЧЕЕ
                    </button>
                </div>
                
                <div className="tabs__content">
                    {activeTab === 'composition' && (
                        <ul className="composition__list">
                            {product?.structure?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    
                    {activeTab === 'nutrition' && (
                         <div className="nutrition__content">
                            <h3>Пищевая ценность на 100 мл:</h3>
                            <div className="nutrition__item">
                                <span className="nutrition__label">Энергетическая ценность:</span>
                                <span className="nutrition__value">25 кКал / 105 кДж</span>
                            </div>
                            <div className="nutrition__item">
                                <span className="nutrition__label">Белки:</span>
                                <span className="nutrition__value"> 0,1 г</span>
                            </div>
                            <div className="nutrition__item">
                                <span className="nutrition__label">Жиры:</span>
                                <span className="nutrition__value"> 0 г</span>
                            </div>
                            <div className="nutrition__item">
                                <span className="nutrition__label">Углеводы:</span>
                                <span className="nutrition__value"> 5 г</span>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'other' && (
                         <div className="other__content">
                            <div className="other__section">
                                <p className="other__text">
                                    Комбуча - это ферментированный, низкокалорийный, непастеризованный живой напиток, 
                                    приготовленный на основе оригинальных сортов чая и культуры "комбуча" (чайный гриб) 
                                    с использованием натуральных и экологически чистых ингредиентов - фруктов, ягод, трав, цветов.
                                </p>
                                <p className="other__text">
                                    Каждая бутылочка комбучи ReLive - это чистый крафт-продукт, созданный с любовью 
                                    и вниманием ко всем мелочам.
                                </p>
                                <div className="other__tags">
                                    <span className="tag">BEST FOR HEALTH</span>
                                    <span className="tag">BEST FOR SPORT</span>
                                    <span className="tag">BEST FOR HOLIDAYS</span>
                                </div>
                                <div className="other__benefits">
                                    <span>обмен вещества</span>
                                    <span>жиросжигание</span>
                                </div>
                                <p className="other__disclaimer">
                                    *Вся информация о полезных свойствах получена из общедоступных источников, 
                                    на сайте и этикетках носит маркетинговый характер
                                </p>
                            </div>

                            <div className="other__section">
                                <h3>Срок годности и условия хранения:</h3>
                                <ul className="storage__list">
                                    <li>от +1 °С до +4 °С — 180 суток</li>
                                    <li>от +4 °C до +8 °С — 120 суток</li>
                                    <li>от +8 °С до +25 °С — 14 суток</li>
                                </ul>
                                <h3>После вскрытия:</h3>
                                <ul className="storage__list">
                                    <li>в холодильной камере от +1 °С до +8 °С — не более 14 суток</li>
                                    <li>вне холодильника от +8 °C до +25 °С — не более 72 часов</li>
                                </ul>
                                <p className="other__note">⚠️ Не допускается хранение на прямом солнечном свету</p>
                                <p className="other__note">⚠️ Возможно образование естественного осадка, обусловленное применением натурального сырья</p>
                                <p className="other__note">⚠️ Открывать аккуратно! Пить охлажденным!</p>
                            </div>

                            <div className="other__section">
                                <h3>Обмен или возврат:</h3>
                                <p className="other__text">
                                    Если вас не устроил вкус или качество нашего напитка, напишите нам и мы легко вернем вам деньги 
                                    или обменяем на другой вид/вкус напитка!
                                </p>
                            </div>

                            <div className="other__section">
                                <h3>Производитель:</h3>
                                <p className="other__text">ООО "Вкус от природы"</p>
                                <p className="other__text">
                                    Юридический адрес: 620144, Россия, Свердловская область, город Екатеринбург, 
                                    улица Куйбышева, дом 10, кв. 105.
                                </p>
                                <p className="other__text">
                                    Адрес производства: 620085, Россия, Свердловская область, город Екатеринбург, 
                                    улица 8 марта, дом 207а
                                </p>
                                <p className="other__text">ТУ 11.07.19-001-39907489-2020</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardProduct