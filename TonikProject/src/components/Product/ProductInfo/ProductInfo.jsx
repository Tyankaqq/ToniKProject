import React from 'react';
import './ProductInfo.css';

export const ProductInfo = () => {
    const infoCards = [
        {
            id: 1,
            title: 'Что такое Анфельция?',
            content: [
                'Анфельция Тобучинская — это красная водоросль, которая появилась на Планете задолго до того, как человек научился лечить. Она вобрала в себя силу стихий, минералов и первозданного солнца. Ее клеточная структура несёт в себе память о жизни в чистом виде.',
                'И когда эта структура входит в контакт с организмом — он настраивается. Без насилия, без побочных эффектов. Просто возвращается то, что было заложено природой.'
            ]
        },
        {
            id: 2,
            title: 'Как она действует?',
            content: [
                {
                    text: 'Мы не говорим «лечит». Мы говорим: ',
                    highlights: [
                        { text: 'организм вспоминает', highlighted: true },
                        { text: '. Организм — сложная система. И в нем есть всё, чтобы быть здоровым. Иногда нужно просто напомнить.' }
                    ]
                }
            ],
            hasHighlights: true
        },
        {
            id: 3,
            title: 'Анфельция:',
            isList: true,
            content: [
                {
                    parts: [
                        { text: 'помогает организму ' },
                        { text: 'очищаться', highlighted: true },
                        { text: ' от ' },
                        { text: 'токсинов'},
                        { text: ', тяжёлых металлов и всего «лишнего»' }
                    ]
                },
                {
                    parts: [
                        { text: 'насыщает клетки ' },
                        { text: 'энергией и минералами', highlighted: true },
                        { text: ', ускоряя ' },
                        { text: 'метаболизм'}
                    ]
                },
                {
                    parts: [
                        { text: 'поддерживает ' },
                        { text: 'иммунитет', highlighted: true },
                        { text: ', помогая телу быстрее восстанавливаться' }
                    ]
                },
                {
                    parts: [
                        { text: 'нормализует ' },
                        { text: 'гормональный фон и работу нервной системы', highlighted: true },

                    ]
                },
                {
                    parts: [
                        { text: 'улучшает усвоение пищи, ' },
                        { text: 'баланс микрофлоры', highlighted: true },
                        { text: ', процессы пищеварения' }
                    ]
                },
                {
                    parts: [
                        { text: 'возвращает ' },
                        { text: 'психоэмоциональную устойчивость', highlighted: true }
                    ]
                },
                {
                    parts: [
                        { text: 'помогает справиться с ' },
                        { text: 'аллергией, усталостью, скачками давления, воспалениями, нарушениями сна и цикла', highlighted: true }
                    ]
                }
            ]
        }
    ];

    const quoteText = 'Анфельция — это не про обещания. Это про отклик. Если вы чувствуете, что пора не лечиться, а жить, не бороться, а настраиваться — возможно, это она.';
    const letters = ['I', 'II', 'III'];

    const renderHighlightedText = (parts) => {
        return parts.map((part, i) =>
            part.highlighted ? (
                <span key={i} className="highlight">{part.text}</span>
            ) : (
                <React.Fragment key={i}>{part.text}</React.Fragment>
            )
        );
    };

    return (
        <section className="ProductInfo">
            <div className="ProductInfo_container container">
                <div className="ProductInfo_grid">
                    {infoCards.map((card, index) => (
                        <React.Fragment key={card.id}>
                            <div className="ProductInfo_quote">
                                <div className="ProductInfo_letter">{letters[index]}</div>
                                <p className="ProductInfo_quote_text">{quoteText}</p>
                            </div>

                            <div className="ProductInfo_card">
                                <h3 className="ProductInfo_card_title">{card.title}</h3>
                                {card.isList ? (
                                    <ul className="ProductInfo_list">
                                        {card.content.map((item, i) => (
                                            <li key={i} className="ProductInfo_list_item">
                                                {item.parts ? renderHighlightedText(item.parts) : item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : card.hasHighlights ? (
                                    <div className="ProductInfo_card_content">
                                        {card.content.map((paragraph, i) => (
                                            <p key={i} className="ProductInfo_card_text">
                                                {paragraph.text}
                                                {paragraph.highlights && renderHighlightedText(paragraph.highlights)}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="ProductInfo_card_content">
                                        {card.content.map((paragraph, i) => (
                                            <p key={i} className="ProductInfo_card_text">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};
