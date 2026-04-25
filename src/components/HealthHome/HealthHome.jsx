import './healthHome.css'
import flowersBottle from '../../assets/img/flowers-bottle.svg'
import kombucha from '../../assets/img/kombucha.png'
import weed from '../../assets/img/weed.svg'
import { useState } from 'react';

const HealthHome = () => {
    const bottlesItems = [
        {
            title: "Улучшает пищеварение",
            text: "Пробиотики помогают поддерживать здоровую микрофлору кишечника",
            color: "#C4A7F6",
        },
        {
            title: "Повышает иммунитет",
            text: "Антиоксиданты и полифенолы защищают от свободных радикалов",
            color: "#7EC5FF",
        },
        {
            title: "Снятие тревожности",
            text: "Оказывает положительное влияние на психическое здоровье",
            color: "#BCD452",
        },
        {
            title: "Детоксикация организма",
            text: "Глюкуроновая кислота поддерживает работу печени и выводит токсины",
            color: "#FF8D65",
        },
        {
            title: "Повышение энергии",
            text: "Содержит небольшое количество кофеина и натуральных сахаров",
            color: "#EAB6DF",
        }
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <section className="healthy">
            <div className="healthy-column">
                <h3 className="healthy-title"><span className="text-pink">Комбуча</span> - выбор здоровых</h3>
                <p className="healthy__text-yellow">Это натуральный ферментированный напиток на основе культуры чайного гриба, который получается в результате уксуснокислого брожения чая и сахара под действием живых бактерий и дрожжей. </p>

                {bottlesItems.map((bottlesItems, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <>
                            <div
                                key={index}
                                className="bottles"
                                onClick={() => setActiveIndex(isOpen ? null : index)
                                }>
                                <p className='bottles-text' style={{background: bottlesItems.color}}>{bottlesItems.title}</p>
                            </div>
                            {isOpen && (
                                <div className="bottle-wrapper">
                                    <svg className='bottle-svg' viewBox="0 0 557 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M91.8083 91.5C51.8083 106 32.3083 61.3333 36.3083 43V0C7.90827 34 -3.25421 71.5 0.808283 104C8.30828 164 102.808 195 93.8083 186L91.8083 91.5Z" fill={bottlesItems.color} />
                                        <rect x="55.3086" y="89.5" width="501" height="100" rx="50" fill={bottlesItems.color} />
                                    </svg>
                                    <div className="bottle-text">
                                        {bottlesItems.text}
                                    </div>
                                </div>

                            )
                            }
                        </>
                    )
                })}
            </div>
            <div className="healthy-column">
                <img src={flowersBottle} alt="bottle with flowers" className="bottle-flowers" />
                <h3 className="healthy-title">Чем полезна <span className="text-green">комбуча</span></h3>
                <p className="healthy__text-pink">Комбучу ценят за высокое содержание органических кислот, пробиотиков и антиоксидантов, которые поддерживают пищеварение и общий тонус организма, насыщая его природной пользой.</p>
                <p className="disclaimer">*Вся информация о полезных свойствах носит маркетинговый характер</p>
                <div className="kombucha-group">
                    
                        <img src={kombucha} alt="kombucha" className="kombucha-img" />
                    
                    <img src={weed} alt="weed" className="weed" />
                </div>
            </div>
        </section>
    );
};

export default HealthHome
