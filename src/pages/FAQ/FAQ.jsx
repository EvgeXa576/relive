import './faq.css'
import faq from '../../assets/FAQ'
import { useState } from 'react';

function FAQ() {
    const [visibleMyths, setVisibleMyths] = useState(2);
    const [activeIndex, setActiveIndex] = useState(null);

    const showMoreMyths = () => {
    setVisibleMyths(prevCount => prevCount + 2); 
};

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            
            <div className="myth">
                <h1 className="faq-title">Мифы о комбуче</h1>
                {faq.myths.slice(0, visibleMyths).map((item, index) => (
                    <div className="myth-container" key={item.id || index}>
                        <div className="myth-card">
                            <h3 className='myth-card-title'>МИФ</h3>
                            <p>{item.myth}</p>
                        </div>
                        <div className="truth-card">
                            <h3 className='truth-card-title'>ПРАВДА</h3>
                            <p>{item.truth}</p>
                        </div>
                    </div>
                ))}
                {visibleMyths < faq.myths.length && (
                    <button className="show-more" onClick={showMoreMyths}>
                        Показать еще
                    </button>
                )}
            </div>


            <div className="faq-section">
                <h1 className="faq-title">Часто задаваемые вопросы</h1>

                <div className="accordion">
                    {faq['faq'].map((item, index) => (
                        <div
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                        >
                            <div
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="accordion-question">{item.q}</h3>
                                <span className="accordion-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>

                            <div className="accordion-content">
                                <p className="accordion-answer">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}
export default FAQ