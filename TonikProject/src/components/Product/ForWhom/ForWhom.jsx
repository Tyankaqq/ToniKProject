import React from 'react';
import './ForWhom.css';
import childIcon from '../../../assets/Image/child.svg';
import pregnantIcon from '../../../assets/Image/download.svg';
import overloadIcon from '../../../assets/Image/back.svg';
import menIcon from '../../../assets/Image/Element.svg';
import athletesIcon from '../../../assets/Image/Biology.svg';
import returnIcon from '../../../assets/Image/Dnk.svg';

export const ForWhom = () => {
    const cards = [
        {
            id: 1,
            icon: returnIcon,
            text: 'Родители и дети'
        },
        {
            id: 2,
            icon: childIcon,
            text: 'Беременные и восстанавливающиеся после рождения детей женщины'
        },
        {
            id: 3,
            icon: pregnantIcon,
            text: 'Люди с перегрузками: ментальными, физическими, гормональными'
        },
        {
            id: 4,
            icon: athletesIcon,
            text: 'Мужчины, которые хотят быть на пике возможностей'
        },
        {
            id: 5,
            icon: menIcon,
            text: 'Спортсмены, творцы, предприниматели'
        },
        {
            id: 6,
            icon: overloadIcon,
            text: 'Те, кто просто чувствует: пора ',
            highlight: 'вернуться к себе'
        }
    ];

    return (
        <section className="ForWhom">
            <div className="ForWhom_container container">
                <h2 className="ForWhom_title">Для кого она?</h2>

                <div className="ForWhom_description">
                    <p>Для тех, кто чувствует, что организм требует поддержки.</p>
                    <p>Для тех, кто выбирает осознанный путь.</p>
                    <p>Для тех, кто хочет быть в контакте с собой, а не в поиске временных решений.</p>
                </div>

                <div className="ForWhom_grid">
                    {cards.map((card) => (
                        <div key={card.id} className="ForWhom_card">
                            <p className="ForWhom_card_text">
                                {card.text}
                                {card.highlight && <span className="highlight">{card.highlight}</span>}
                            </p>
                            <div className="ForWhom_card_icon">
                                <img src={card.icon} alt={card.text} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
