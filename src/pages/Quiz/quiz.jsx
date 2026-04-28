import React, { useState } from 'react';
import './quiz.css';

const questions = [
    {
        title: "Какое утро идеальное для тебя?",
        options: [
            { text: "Медленное, в постели с книгой", type: "lavender" },
            { text: "Активное, с пробежкой или йогой", type: "green" },
            { text: "Эстетичное, с красивым завтраком", type: "island" },
            { text: "Рабочее, уже проверяю почту", type: "earl" }
        ]
    },
    {
        title: "Что для тебя важнее всего в напитке прямо сейчас?",
        options: [
            { text: "Абсолютная свежесть", type: "green" },
            { text: "Необычное сочетание", type: "island" },
            { text: "Спокойствие и баланс", type: "lavender" },
            { text: "Знакомый, уютный вкус", type: "ivan" }
        ]
    },
    {
        title: "Твой любимый способ провести вечер?",
        options: [
            { text: "Ванна при свечах", type: "lavender" },
            { text: "Вечерняя прогулка в парке", type: "ivan" },
            { text: "Встреча в шумном баре с друзьями", type: "island" },
            { text: "Планирование задач на завтра", type: "earl" }
        ]
    },
    {
        title: "Если бы твой день был цветом, то каким?",
        options: [
            { text: "Насыщенный желтый или оранжевый", type: "earl" },
            { text: "Глубокий зеленый", type: "green" },
            { text: "Нежно-пурпурный", type: "lavender" },
            { text: "Ярко-красный", type: "island" }
        ]
    },
    {
        title: "Куда бы ты отправился прямо сейчас?",
        options: [
            { text: "В горы к чистому воздуху", type: "green" },
            { text: "В деревню к бабушке в яблоневый сад", type: "ivan" },
            { text: "В Лондон на деловой обед", type: "earl" },
            { text: "На тропическую вечеринку", type: "island" }
        ]
    }
];

const resultsMapping = {
    island: {
        id: 1, // Или 6 (500мл)
        name: "OOLONG ISLAND",
        taste: "Клубника + Базилик",
        desc: "Ты — искатель ярких впечатлений! Тебе идеально подходит смелое сочетание клубники и базилика."
    },
    lavender: {
        id: 2,
        name: "FALL IN LAVENDER",
        taste: "Лаванда + Мед",
        desc: "Время замедлиться. Твой выбор — нежная лаванда для полной гармонии с собой."
    },
    ivan: {
        id: 3,
        name: "FOREVER IVAN 2",
        taste: "Иван-чай + Яблоко",
        desc: "Ты ценишь искренность и традиции. Мягкий вкус яблока и иван-чая — это то, что тебе нужно."
    },
    green: {
        id: 4,
        name: "OH MY GREEN",
        taste: "Зеленый чай + Мята",
        desc: "Заряд чистой энергии! Мята и зеленый чай помогут тебе покорить любые вершины сегодня."
    },
    earl: {
        id: 5,
        name: "EARL YELLOW",
        taste: "Бергамот + Цитрус",
        desc: "Твое кредо — стиль и бодрость. Цитрусовая энергия бергамота идеально подчеркнет твой ритм."
    }
};

const QuizPage = () => {
    const [step, setStep] = useState(0);
    const [scores, setScores] = useState({ classic: 0, berry: 0, herbal: 0 });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (type) => {
        setScores({ ...scores, [type]: scores[type] + 1 });
        if (step + 1 < questions.length) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const getWinner = () => {
        return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    };

    if (showResult) {
        const winner = resultsMapping[getWinner()];
        return (
            <div className="quiz-container result-fade">
                <h2>Твой идеальный вкус найден!</h2>
                <div className="result-card">
                    <img src={`/assets/img/${winner.img}`} alt={winner.name} />
                    <h3>{winner.name}</h3>
                    <p>{winner.desc}</p>
                    <button className="quiz-btn" onClick={() => window.location.href='/catalog'}>В каталог</button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-progress" style={{width: `${((step + 1) / questions.length) * 100}%`}}></div>
            <span className="quiz-step-info">Вопрос {step + 1} из {questions.length}</span>
            <h2 className="quiz-question">{questions[step].title}</h2>
            <div className="quiz-options">
                {questions[step].options.map((opt, i) => (
                    <button key={i} className="quiz-option-btn" onClick={() => handleAnswer(opt.type)}>
                        {opt.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizPage;