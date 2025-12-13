// src/components/About/OurGoals.jsx
import React from 'react';
import './OurGoals.css';
import StarIcon from '../../../assets/Image/star.svg';

const OurGoals = () => {
    const goals = [
        {
            id: 'I',
            title: 'Новая энергия',
            description: 'Создать доступный и неиссякаемый источник энергии, который будет безопасным для планеты.'
        },
        {
            id: 'II',
            title: 'Технологии будущего',
            description: 'Разработать принципиально новые способы передвижения, которые сотрут границы расстояний.'
        },
        {
            id: 'III',
            title: 'Экотранспорт',
            description: 'Создать по-настоящему безопасный и «умный» транспорт, который будет работать долго, не вредя окружающей среде.'
        }
    ];

    return (
        <section className="goals">
            <div className="container">
                <div className="row">
                    <h2 className="goals__title">Наши большие цели</h2>
                    <p className="goals__subtitle">
                        Мы мечтаем о прорывах, которые изменят жизнь к лучшему, и ищем партнёров для работы над такими задачами, как:
                    </p>
                </div>

                {/* ДЕСКТОП ВЕРСИЯ */}
                <div className="goals__wrapper goals__wrapper--desktop">
                    <div className="goals__grid">
                        {goals.map((goal) => (
                            <div key={goal.id} className="goal-card">
                                <div className="goal-card__header">
                                    <span className="goal-card__number">{goal.id}</span>
                                    <h3 className="goal-card__title">{goal.title}</h3>
                                </div>
                                <p className="goal-card__description">{goal.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="goals__footer">
                        <div className="goals__icon">
                            <img src={StarIcon} alt="*" />
                        </div>
                        <p className="goals__cta">
                            Если вам близки наши идеи и амбиции, давайте знакомиться и думать вместе! Мы будем рады познакомиться и обсудить, как мы можем изменить будущее к лучшему.
                        </p>
                    </div>
                </div>

                {/* ПЛАНШЕТ/МОБИЛКА ВЕРСИЯ */}
                <div className="goals__wrapper goals__wrapper--mobile">
                    <div className="goals__grid-mobile">
                        {goals.map((goal) => (
                            <div key={goal.id} className="goal-card">
                                <div className="goal-card__header">
                                    <span className="goal-card__number">{goal.id}</span>
                                    <h3 className="goal-card__title">{goal.title}</h3>
                                </div>
                                <p className="goal-card__description">{goal.description}</p>
                            </div>
                        ))}

                        {/* Футер как часть grid */}
                        <div className="goals__footer-mobile">
                            <div className="goals__icon">
                                <img src={StarIcon} alt="*" />
                            </div>
                            <p className="goals__cta">
                                Если вам близки наши идеи и амбиции, давайте знакомиться и думать вместе! Мы будем рады познакомиться и обсудить, как мы можем изменить будущее к лучшему.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGoals;
