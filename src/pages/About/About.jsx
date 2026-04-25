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
const About = () => {
    return (
        <>
            <section className="about__hero">
                <div className="about__hero-wrap">
                    <h1 className="about__hero-title">КОМБУЧА <br /><img src={heroStars} alt="stars" className='abot__hero-stars'/>RELIVE</h1>
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
                                <h4 className="history-title"><span className="about__text-pink">2013-2015</span> | Начало пути</h4>
                            </div>
                            <h5 className="history-subtitle">Чайная культура и мастерство</h5>
                            <p className="history-text">Иван Тюленев начал свой путь в мир чайной культуры в 2013 году.</p>
                            <p className="history-text">Его увлечение традициями китайской чайной церемонии привело к обучению в школе чайного искусства, где он изучал культуру и историю чая, практические принципы и методы заваривания, приготовления и подачи чая. </p>
                            <p className="history-text">Это увлечение стало основой будущей концепции LIVE BREW.</p>
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
                                <h4 className="history-title"><span className="about__text-pink">2015-2019</span> | Чайный бизнес</h4>
                            </div>
                            <h5 className="history-subtitle">Первые шаги</h5>
                            <p className="history-text">В 2015 году Иван со своим другом единомышленником Алексеем открыли первый чайный бар на Урале – SAMOVAR TEA-BAR.</p>
                            <p className="history-text">
                                Именно в то время и было положено начало будущей идеологии создания живых, натуральных напитков, что так же отразилось в названии компании «Вкус от природы», а логотип и фирменный стиль впоследствии был унаследован и использован в будущем бренде LIVE BREW – чашечка и цветок.</p>
                            <p className="history-text">В чайном баре Иван проводил всё своё время, организовывая чайные церемонии и увлекая гостей и посетителей рассказами о чае и чайной культуре. </p>
                            <p className="history-text">Параллельно он проводил многочисленные эксперименты по созданию напитков на основе чая, включая холодные чаи по методике COLD BREW (настаивание чая в холодной воде), придумывал уникальные вкусовые сочетания с использованием натуральных трав, цветов и специй.</p>
                            <p className="history-text">Этот опыт стал решающим в его дальнейшем развитии, как создателя уникальных вкусовых сочетаний.</p>
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2016</span> | Комбуча Live Brew</h4>
                            </div>
                            <h5 className="history-subtitle">Рождение</h5>
                            <p className="history-text">Летом 2016 года в рамках того же чайного бара Иван открыл для себя напиток комбуча. Он глубоко изучил его историю, технологию, биохимию и органолептику, что вдохновило его на создание первых образцов комбучи LIVE BREW.</p>
                            <p className="history-text">7 августа 2016 (дату впоследствии стали считать датой основания бренда) первая комбуча LIVE BREW была впервые представлена на городском фестивале еды «Гастроном», где за считанные часы была полностью раскуплена и получила восторженные отзывы. </p>
                            <p className="history-text">Это стало отправной точкой в развитии концепции Живого Чая – напитка в котором вкус, цвет и аромат достигаются исключительно за счёт безалкогольного брожения культуры чайного гриба и натуральных компонентов: ягод, фруктов, трав, цветов и специй.</p>
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
                                <h4 className="history-title"><span className="about__text-pink">2017</span> | Бренд Live Brew</h4>
                            </div>
                            <h5 className="history-subtitle">Рождение</h5>
                            <p className="history-text">В 2017 году Иван с партнером основывает и регистрирует первый уральский бренд комбучи LIVE BREW и открывает небольшое производство площадью всего около 20 м². </p>
                            <p className="history-text">В этом компактном цехе одновременно ферментировались, разливались и хранились первые партии уральской комбучи – всего 4-5 вкусов. Именно в этот период начались первые поставки в заведения, магазины здорового питания и кафе Екатеринбурга.</p>
                        </div>

                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2018-2020</span> | Линейка вкусов</h4>
                            </div>
                            <h5 className="history-subtitle">Производство</h5>
                            <p className="history-text">В последующие годы производство продолжает расти, а ассортимент увеличивается до 12 вкусов. </p>
                            <p className="history-text">Некоторые сочетания приходили Ивану буквально во сне, например, жасмин + груша + виноград («Just mine Dreamings»). </p>
                            <p className="history-text">Среди успешных экспериментов появились комбуча-кофе и охмеленная безалкогольная комбуча, которые и по сей день остаются популярными.</p>
                            <p className="history-text">
                                Небольшие объёмы производства позволяли сохранять гибкость, но ограничивали темпы роста. Иван не только лично участвовал во всех этапах производства, но и активно продвигал бренд, участвуя в фестивалях и ярмарках, где продолжал знакомить с напитком собирать отзывы и в последствии совершенствовать напиток.</p>
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
                                <h4 className="history-title"><span className="about__text-pink">2020-2022</span> | Обучение команды</h4>
                            </div>
                            <h5 className="history-subtitle">Производство</h5>
                            <p className="history-text">В этот период произошло первое значительное расширение производственных площадей и первая модернизация оборудования. </p>
                            <p className="history-text">Иван передавал базовые знания и философию бренда своей первой команде, линейка вкусов к тому времени возросла до 23-х, а география точечных поставок расширялась по всей стране от Омска до Калининграда. </p>
                            <p className="history-text">Появились новые экспериментальные и сезонные вкусы, а также комбуча-брюты, созданные методом естественной выдержки и созревания.</p>
                        </div>
                    </div>

                    <div className="about__history-item">
                        <div className="text-block">
                            <div className="history-title-wrap">
                                <h4 className="history-title"><span className="about__text-pink">2022-2024</span> | Модернизация</h4>
                            </div>
                            <h5 className="history-subtitle">Наращивание объемов и высокое качество продукта</h5>
                            <p className="history-text">Бренд активно наращивал мощности, внедряя усовершенствованные технологии, оптимизируя рецептуры и стандартизируя производственные процессы. </p>
                            <p className="history-text">Одним из ключевых направлений стало увеличение сроков годности напитков без ущерба для натурального состава и философии бренда. </p>
                            <p className="history-text">В 2024 году компания сталкивается с новыми вызовами и полностью меняет состав руководящего и партнерского звена, нацеленное на дальнейший рост компании и модернизацию производства.</p>
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
                                <h4 className="history-title"><span className="about__text-pink">2022-2024</span> | Рождение Relive</h4>
                            </div>
                            <h5 className="history-subtitle">Новое это просто хорошо забытое старое</h5>
                            <p className="history-text">В 2025 году компания движется к новым вершинам: автоматизация производства, обновление рецептур и улучшение вкусов. </p>
                            <p className="history-text">Среди прочих планов на годовой повестке – запуск спортивно-обогащённой линейки, а так же поточного производства натурального комбуча-брюта. </p>
                            <p className="history-text">Иван Тюленев остаётся верен идеологии Комбучи живого чая и продолжает развивать бренд LIVE BREW, а также запускает новый бренд RELIVE, не идя на компромиссы, но сохраняя всё лучшее, что было создано за эти годы.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="form__contacts-section">
                
                <div className="form__contacts-main">
                    <img src={formDecor} alt="decorate" className='form__contacts-img'/>
                    <form action="#" className="form__contacts">
                        <h2 className="form__contacts-title">БУДЕМ НА СВЯЗИ</h2>
                        <input className='form__contacts-input' type="text" name="name" id="name" placeholder='ФИО'/>
                        <input className='form__contacts-input' type="tel" name="tel" id="tel" placeholder='Телефон'/>
                        <button type="submit" className='form__contacts-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default About