import SliderHome from '../../components/SliderHome/SliderHome'
import SliderSwiper from '../../components/SliderSwiper/SliderSwiper'
import './partners.css'

import pinkHeart from '../../assets/img/pink-heart.svg'
import greenHeart from '../../assets/img/green-heart.svg'

import formDecor1 from '../../assets/img/form-partners-decor1.svg'
import formDecor2 from '../../assets/img/form-partners-decor2.svg'
import {useState} from "react";

// import dottedGrass from '../../assets/img/dotted-grass.svg'
// import grass from '../../assets/img/grass.svg'

const Partners = () => {
    const [formData, setFormData] = useState({
        name: '',
        tel: '+7 ',
        email: '',
        company: ''
    });

    // 2. Состояние ошибок и процесса отправки
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    // 3. Маска для телефона
    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length === 0) return '+7 ';

        // Убираем лишние 7 или 8 в начале, если пользователь их вводит сам
        const mainDigits = (digits[0] === '7' || digits[0] === '8') ? digits.slice(1) : digits;

        let result = '+7 ';
        if (mainDigits.length > 0) result += '(' + mainDigits.substring(0, 3);
        if (mainDigits.length >= 4) result += ') ' + mainDigits.substring(3, 6);
        if (mainDigits.length >= 7) result += '-' + mainDigits.substring(6, 8);
        if (mainDigits.length >= 9) result += '-' + mainDigits.substring(8, 10);

        return result.slice(0, 18);
    };

    // 4. Обработчик изменений
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === 'tel') {
            newValue = formatPhoneNumber(value);
        } else if (name === 'name') {
            newValue = value.replace(/[0-9]/g, ''); // Запрет цифр в имени
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));

        // Очистка ошибки при начале ввода
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    // 5. Валидация
    const validate = () => {
        let tempErrors = {};

        // Проверка ФИО
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            tempErrors.name = "Введите ФИО";
        }

        // Проверка Телефона (должно быть 11 цифр: 7 + 10 цифр номера)
        const phoneDigits = formData.tel.replace(/\D/g, '');
        if (phoneDigits.length < 11) {
            tempErrors.tel = "Введите полный номер";
        }

        // Проверка Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            tempErrors.email = "Введите Email";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Неверный формат почты";
        }

        // Проверка Компании
        if (!formData.company.trim()) {
            tempErrors.company = "Укажите название компании";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // 6. Отправка формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);
        setStatus('Отправка...');

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('tel', formData.tel);
            data.append('email', formData.email);
            data.append('company', formData.company);

            const response = await fetch('http://localhost:8000/send_partners.php', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) throw new Error('Ошибка сервера');

            const result = await response.json();

            if (result.status === 'success') {
                setStatus('Заявка отправлена успешно!');
                setFormData({ name: '', tel: '+7 ', email: '', company: '' });
            } else {
                setStatus('Ошибка: ' + result.message);
            }
        } catch (error) {
            setStatus('Ошибка при отправке. Попробуйте позже.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };


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
                    <form onSubmit={handleSubmit} className="form__partners">
                        <h2 className="form__partners-title">КАК СТАТЬ ПАРТНЕРОМ?</h2>

                        <div className="input-group">
                            <input
                                className={`form__partners-input ${errors.name ? 'input-error' : ''}`}
                                type="text" name="name" placeholder='ФИО'
                                value={formData.name} onChange={handleChange}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`form__partners-input ${errors.tel ? 'input-error' : ''}`}
                                type="tel" name="tel" placeholder='Телефон'
                                value={formData.tel} onChange={handleChange}
                            />
                            {errors.tel && <span className="error-message">{errors.tel}</span>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`form__partners-input ${errors.email ? 'input-error' : ''}`}
                                type="email" name="email" placeholder='Email'
                                value={formData.email} onChange={handleChange}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`form__partners-input ${errors.company ? 'input-error' : ''}`}
                                type="text" name="company" placeholder='Название организации'
                                value={formData.company} onChange={handleChange}
                            />
                            {errors.company && <span className="error-message">{errors.company}</span>}
                        </div>

                        <button type="submit" className='form__partners-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                        <p>{status}</p>
                    </form>
                     <img src={formDecor2} alt="decorate" className='form__partners-img' />
                </div>
            </section>
        </>
    )
}

export default Partners