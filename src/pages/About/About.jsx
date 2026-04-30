import ninjaDragon from '../../assets/img/ninja-dragon.svg'
import teaMonk from '../../assets/img/tea-monk.svg'
import reliveLotus from '../../assets/img/relive-lotus.svg'
import community from '../../assets/img/community.svg'
import pears from '../../assets/img/pears.svg'
import hands from '../../assets/img/hands.svg'
import cherryCar from '../../assets/img/cherry-car.svg'
import stalls from '../../assets/img/stalls.svg'
import heroStars from '../../assets/img/aboutHeroStars.svg'
import formDecor from '../../assets/img/about-form-decor.svg'

import './about.css'
import { useState } from "react";
const About = () => {



    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({ name: '', tel: '+7 ' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const formatPhoneNumber = (value) => {
        // Оставляем только цифры
        const digits = value.replace(/\D/g, '');

        // Если пользователь всё стер, возвращаем базу
        if (digits.length === 0) return '+7 ';

        // Если первая цифра 8 или 7 — мы её пропускаем, так как +7 уже есть
        // Если пользователь начал вводить с 9, берем как есть
        const mainDigits = (digits[0] === '7' || digits[0] === '8')
            ? digits.slice(1)
            : digits;

        let result = '+7 ';

        if (mainDigits.length > 0) {
            result += '(' + mainDigits.substring(0, 3);
        }
        if (mainDigits.length >= 4) {
            result += ') ' + mainDigits.substring(3, 6);
        }
        if (mainDigits.length >= 7) {
            result += '-' + mainDigits.substring(6, 8);
        }
        if (mainDigits.length >= 9) {
            result += '-' + mainDigits.substring(8, 10);
        }

        return result.slice(0, 18); // Ограничиваем длину маски
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'tel') {
            const formattedValue = formatPhoneNumber(value);
            setFormData(prev => ({ ...prev, [name]: formattedValue }));
        } else if (name === 'name') {
            // Очистка имени от цифр прямо при вводе
            const onlyChars = value.replace(/[0-9]/g, '');
            setFormData(prev => ({ ...prev, [name]: onlyChars }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Сбрасываем ошибку поля при изменении
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        let tempErrors = {};

        // Валидация имени
        const nameValue = (formData.name || "").trim();
        if (!nameValue) {
            tempErrors.name = "Пожалуйста, введите ваше имя";
        } else if (nameValue.length < 2) {
            tempErrors.name = "Имя слишком короткое";
        } else if (/[!@#$%^&*(),.?":{}|<>]/.test(nameValue)) {
            tempErrors.name = "Имя содержит недопустимые символы";
        }

        // Валидация телефона (должно быть ровно 11 цифр: 7 + 10 цифр номера)
        const digits = (formData.tel || "").replace(/\D/g, '');
        if (digits.length < 11) {
            tempErrors.tel = "Введите полный номер телефона";
        }

        setErrors(tempErrors); // Используем прямую установку, чтобы не ждать стейта
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return; // Стоп, если есть ошибки

        setIsSubmitting(true);
        setStatus('Отправка...');

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('phone', formData.tel); // в PHP мы ловим 'phone'

            const response = await fetch('http://localhost:8000/send.php?XDEBUG_SESSION_START=PHPSTORM', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (result.status === 'success') {
                setStatus('Заявка успешно отправлена!');
                setFormData({ name: '', tel: '' }); // Очистка полей
            } else {
                setStatus('Ошибка: ' + result.message);
            }
        } catch (error) {
            setStatus('Произошла ошибка при отправке.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <section className="about__hero">
                <div className="about__hero-wrap">
                    <h1 className="about__hero-title">КОМБУЧА <br /><img src={heroStars} alt="stars" className='about__hero-stars' />RELIVE</h1>
                    <div className='about__hero-line'></div>
                    <h1 className="about__hero-subtitle">Иван <br /> Тюленев</h1>
                </div>
                <p className='about__hero-text'>© Наша миссия - сделать так, чтобы о комбуче узнали.</p>
            </section>
            <section className="about__history">
                <div className="about__wrap">

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2013-2015</span> | Начало пути — чайная культура и мастерство</h4>
                            </div>
                            <p className="history-text">Иван Тюленев — основатель брендов и производства Уральской комбучи — начал свой путь в мир чайной культуры в 2013 году. Увлечение традициями китайской чайной церемонии привело его к обучению в школе чайного искусства «ЧА-И».</p>
                            <p className="history-text">Здесь он изучал не только историю и философию чая, но и практические аспекты: методы заваривания, подачи и взаимодействия с напитком. </p>
                            <p className="history-text">Этот период стал фундаментом будущей философии брендов LIVE BREW и ReLive — внимательного отношения к продукту, уважения к сырью и стремления к подлинному вкусу.</p>
                        </div>
                        <div className="image-block">
                            <img src={ninjaDragon} alt="tea-ninja" />
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="image-block">
                            <img src={teaMonk} alt="tea-monk" />
                        </div>
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2015-2019</span> | Первые шаги в создании чайных напитков</h4>
                            </div>
                            <p className="history-text">В 2015 году Иван вместе с единомышленником Алексеем открывает первый чайный бар на Урале — SAMOVAR TEA-BAR.</p>
                            <p className="history-text">
                                Именно здесь формируется идеология будущего продукта: создание живых, натуральных напитков. В этот же период появляется производственная компания «Вкус от природы», которая существует по сей день и является основой производства Уральской комбучи.</p>
                            <p className="history-text">В чайном баре Иван проводил большую часть времени, организуя чайные церемонии и погружая гостей в культуру чая. Параллельно шли эксперименты: холодные чаи по технологии cold brew, авторские сочетания с травами, цветами и специями. </p>
                            <p className="history-text">Этот опыт стал ключевым этапом в формировании вкусов будущей комбучи.
                            </p>

                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2016</span> | Рождение комбучи LIVE BREW</h4>
                            </div>
                            <p className="history-text">Летом 2016 года команда открывает для себя комбучу. Глубокое изучение её истории, биохимии и органолептики вдохновляет на создание первых образцов LIVE BREW.</p>
                            <p className="history-text">7 августа 2016 года — дата, ставшая точкой отсчёта бренда — уральская комбуча впервые представлена на городском фестивале еды «Гастроном». Весь объём был распродан за считанные часы, получив яркий отклик гостей. </p>
                            <p className="history-text">Так родилась концепция «Живого чая» — напитка, в котором вкус, аромат и цвет формируются естественным путём брожения чайного гриба в сочетании с ягодами, фруктами, травами и специями.</p>
                        </div>
                        <div className="image-block">
                            <img src={reliveLotus} alt="lotus" />
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="image-block">
                            <img src={community} alt="community" />
                        </div>
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2017</span> | Первое производство</h4>
                            </div>
                            <p className="history-text">В 2017 году регистрируется бренд LIVE BREW и запускается первое производство площадью около 20 м². </p>
                            <p className="history-text">В этом компактном пространстве происходили все процессы — от ферментации до розлива. Ассортимент насчитывал 4–5 вкусов.
                            </p>
                            <p className="history-text">Именно в этот период начинаются первые поставки в кофейни, магазины здорового питания и гастрономические проекты Екатеринбурга.
                            </p>
                        </div>

                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2018-2020</span> | Рост и поиск вкусов</h4>
                            </div>
                            <p className="history-text">Производство постепенно расширяется, а ассортимент увеличивается до 12 вкусов. Некоторые сочетания рождались интуитивно — порой буквально во сне у основателя компании.</p>
                            <p className="history-text">Одним из таких примеров стало сочетание жасмина, груши и винограда, которое впоследствии стало одним из узнаваемых вкусов особой серии комбучи-брюта.
</p>
                            
                        </div>
                        <div className="image-block">
                            <img src={pears} alt="flavours" />
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="image-block">
                            <img src={hands} alt="education" />
                        </div>
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2020-2022</span> | Систематизация и развитие</h4>
                            </div>
                            <p className="history-text">Компания выходит на новый этап: расширяются производственные площади, совершенствуются технологии и рецептуры.</p>
                            <p className="history-text">Ассортимент достигает 23 вкусов, а география поставок охватывает всю страну — от Омска до Калининграда.</p>
                            <p className="history-text">Появляются сезонные позиции и комбуча-брюты, созданные методом естественной выдержки в бутылке. Параллельно команда системно передаёт знания и философию бренда новым сотрудникам.</p>
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2022-2024</span> | Масштабирование и вызовы</h4>
                            </div>
                            <p className="history-text">Бренд активно наращивает объёмы, внедряя новые технологии и стандартизируя процессы.</p>
                            <p className="history-text">Одной из ключевых задач становится увеличение сроков годности при сохранении натуральности и качества продукта.</p>
                            <p className="history-text">В 2024 году компания сталкивается с существенными изменениями в структуре управления. При этом основатель и главный идеолог бренда, Иван Тюленев, сохраняет ключевую роль, обеспечивая преемственность философии, подхода к продукту и стабильное качество.</p>
                        </div>
                        <div className="image-block">
                            <img src={cherryCar} alt="modernization" />
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="image-block">
                            <img src={stalls} alt="stalls" />
                        </div>
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2022-2024</span> | Новый этап и рождение ReLive</h4>
                            </div>
                            <p className="history-text">В 2025 году компания проходит масштабное технологическое обновление и переезжает на новую производственную площадку, кратно увеличивая мощности.</p>
                            <p className="history-text">Происходит стратегическое разделение брендов:
ReLive становится основным брендом для линейки до 500 мл, а LIVE BREW — флагманом премиальной выдержанной комбучи, лимитированных серий и коллабораций.
</p>
                            <p className="history-text">Этот шаг позволяет точнее работать с продуктом и аудиторией, сохраняя глубину и характер каждого направления.</p>
                        </div>

                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2026</span> | Новая волна развития
</h4>
                            </div>
                            <p className="history-text">Компания продолжает модернизацию производства, внедряя элементы автоматизации и улучшая рецептуры.</p>
                            <p className="history-text">Ведётся разработка функциональных и спортивных линеек, а также запуск поточного производства комбуча-брюта.</p>
                            <p className="history-text">Основатели остаются верны идеологии «Живого чая» — развивая бренды LIVE BREW и ReLive без компромиссов, сохраняя всё лучшее, что было создано за годы пути.</p>
                        </div>
                        <div className="image-block">
                            <img src={cherryCar} alt="modernization" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="form__contacts-section">

                <div className="form__contacts-main">
                    <img src={formDecor} alt="decorate" className='form__contacts-img' />
                    <form onSubmit={handleSubmit} className="form__contacts">
                        <h2 className="form__contacts-title">БУДЕМ НА СВЯЗИ</h2>

                        <div className="input-group">
                            <input
                                className={`form__contacts-input ${errors.name ? 'input-error' : ''}`}
                                type="text"
                                name="name"
                                id="name"
                                placeholder='ФИО'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`form__contacts-input ${errors.tel ? 'input-error' : ''}`}
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder='Телефон'
                                value={formData.tel}
                                onChange={handleChange}
                            />
                            {errors.tel && <span className="error-message">{errors.tel}</span>}
                        </div>

                        <button
                            type="submit"
                            className='form__contacts-btn'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'ОСТАВИТЬ ЗАЯВКУ'}
                        </button>
                        <p className="form__status">{status}</p>
                    </form>
                </div>
            </section>
            <section className="about__map-section">
                <h1 className="about__map-title">ГДЕ МЫ?</h1>
                <h3 className='about__map-subtitle'>RELIVE В ЕКАТЕРИНБУРГЕ</h3>

                <div className='map-container'>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=60.599683%2C56.827787&origin=jsapi_2_1_79&pt=60.59945%2C56.828352~60.597748%2C56.82732~60.60094%2C56.828982~60.591892%2C56.833897~60.614245%2C56.829767~60.594462%2C56.836897~60.617849%2C56.831336~60.609495%2C56.839601~60.610455%2C56.840591~60.624662%2C56.821064&utm_source=jsapi&z=11"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen={true}

                    ></iframe>
                </div>
            </section>

        </>
    )
}

export default About