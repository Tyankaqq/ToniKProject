import React, { useState } from 'react';
import './PartnersGallery.css';

// Импорт изображений
import blogImg1 from '../../../assets/Image/blog-1.jpg';
import blogImg2 from '../../../assets/Image/blog-2.jpg';
import blogImg3 from '../../../assets/Image/blog-3.jpg';
import blogImg4 from '../../../assets/Image/blog-4.jpg';
import Pointer from '../../../assets/Image/Pointer.svg';

const PartnersGallery = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const cards = [
        {
            id: 'business',
            title: 'Бизнесам и производителям',
            image: blogImg1,
            question: 'Работаете в сфере продуктов, услуг или производства? Давайте вместе переосмыслим ваш подход!',
            offerLabel: 'Что предлагаем:',
            offerText: 'Поможем сделать ваши продукты и услуги не просто прибыльными, а по-настоящему ценными для людей — полезными, честными и вдохновляющими.'
        },
        {
            id: 'researchers',
            title: 'Учёным и исследователям',
            image: blogImg2,
            question: 'Занимаетесь научными исследованиями в области биологии, экологии или пищевых технологий?',
            offerLabel: 'Что предлагаем:',
            offerText: 'Сотрудничество в проведении исследований, обмен данными и совместное развитие инновационных решений для здорового будущего.'
        },
        {
            id: 'farmers',
            title: 'Фермерским хозяйствам',
            image: blogImg3,
            question: 'Развиваете фермерское хозяйство и стремитесь к устойчивому развитию?',
            offerLabel: 'Что предлагаем:',
            offerText: 'Партнерство в создании экологически чистых продуктов, внедрение современных технологий и поддержка осознанного фермерства.'
        },
        {
            id: 'organizations',
            title: 'Государственным и общественным организациям',
            image: blogImg4,
            question: 'Работаете над программами здорового образа жизни и экологической безопасности?',
            offerLabel: 'Что предлагаем:',
            offerText: 'Совместные инициативы по продвижению здорового питания, экологического образования и устойчивого развития общества.'
        }
    ];

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section className="partners-gallery">
            <div className="partners-gallery__container">
                <div className="partners-gallery__scroll-indicator">
                    <span className="partners-gallery__scroll-dot"></span>
                    <span className="partners-gallery__scroll-text">листай вниз</span>
                    <img src={Pointer} alt="Scroll down" />
                </div>

                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`partners-card-wrapper partners-card-wrapper--${index + 1}`}
                    >
                        <div className={`partners-card ${expandedCard === card.id ? 'expanded' : ''}`}>
                            <div className="partners-card__image-wrapper">
                                <img src={card.image} alt={card.title} className="partners-card__image" />
                            </div>

                            {expandedCard === card.id && (
                                <div className="partners-card__expanded-content">
                                    <button
                                        className="partners-card__close"
                                        onClick={() => toggleCard(card.id)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M7.5 7.5L22.5 22.5M22.5 7.5L7.5 22.5" stroke="white" strokeWidth="2"/>
                                        </svg>
                                    </button>

                                    <div className="partners-card__content">
                                        <h3 className="partners-card__title">{card.title}</h3>
                                        <p className="partners-card__question">{card.question}</p>
                                        <div className="partners-card__offer">
                                            <div className="partners-card__offer-label">{card.offerLabel}</div>
                                            <p className="partners-card__offer-text">{card.offerText}</p>
                                        </div>
                                        <button className="partners-card__cta">
                                            Связаться с нами
                                            <img src={Pointer} alt="Arrow" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            className="partners-card__button"
                            onClick={() => toggleCard(card.id)}
                        >
                            <span className="partners-card__button-text">{card.title}</span>
                            <img
                                src={Pointer}
                                alt="Arrow"
                                className={`partners-card__button-arrow ${expandedCard === card.id ? 'rotated' : ''}`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnersGallery;
