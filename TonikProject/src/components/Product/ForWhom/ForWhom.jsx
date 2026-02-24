import React from 'react';
import './ForWhom.css';

export const ForWhom = () => {
    const cards = [
        { id: 1, text: 'Родители и дети' },
        { id: 2, text: 'Беременные и восстанавливающиеся после рождения детей женщины' },
        { id: 3, text: 'Люди с перегрузками: ментальными, физическими, гормональными' },
        { id: 4, text: 'Мужчины, которые хотят быть на пике возможностей' },
        { id: 5, text: 'Спортсмены, творцы, предприниматели' },
        { id: 6, text: 'Те, кто просто чувствует: пора вернуться к себе' }
    ];

    return (
        <section className="ForWhom">
            <div className="container">
                <div className="ForWhom_wrapper">
                    <h2 className="ForWhom_title">Для кого она?</h2>

                    {cards.map((card, index) => (
                        <div key={card.id} className={`ForWhom_card ForWhom_card-${index + 1}`}>
                            <h3 className="ForWhom_card_question">
                                {card.text}
                                {card.highlight && (
                                    <span className="highlight">{card.highlight}</span>
                                )}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
