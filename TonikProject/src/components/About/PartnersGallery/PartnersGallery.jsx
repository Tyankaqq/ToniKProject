import React, { useState, useEffect, useRef } from 'react';
import './PartnersGallery.css';

// Импорт изображений
import blogImg1 from '../../../assets/Image/blog-1.jpg';
import blogImg2 from '../../../assets/Image/blog-2.jpg';
import blogImg3 from '../../../assets/Image/blog-3.jpg';
import blogImg4 from '../../../assets/Image/blog-4.jpg';
import Pointer from '../../../assets/Image/Pointer.svg';
import Galochka from '../../../assets/Image/GalochkaPrime.svg';

const PartnersGallery = () => {
    const [expandedCards, setExpandedCards] = useState([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    const cards = [
        {
            id: 'business',
            title: 'Бизнесам и производителям',
            image: blogImg1,
            question: 'Работаете в сфере продуктов, услуг или производства? Давайте вместе переосмыслим ваш подход!',
            offerLabel: 'Что предлагаем:',
            offerText: 'Поможем сделать ваши продукты и услуги не просто прибыльными, а по-настоящему ценными для людей — полезными, честными и вдохновляющими.',
            direction: 'right'
        },
        {
            id: 'researchers',
            title: 'Учёным и исследователям',
            image: blogImg2,
            question: 'Мы заинтересованы \n' +
                'в коллаборации с научными сообществами, чтобы взглянуть на давние задачи под новым, свежим углом.',
            offerLabel: 'Что предлагаем:',
            offerText: 'Новые методологии и принципы, которые помогут ускорить исследования и направить технологии в русло созидания, \n' +
                'а не разрушения.',
            direction: 'left'
        },
        {
            id: 'farmers',
            title: 'Фермерским хозяйствам',
            image: blogImg3,
            question: 'От небольшой семейной фермы \n' +
                'до крупного агрохолдинга.',
            offerLabel: 'Что предлагаем:',
            offerText: 'Поможем сделать ваши продукты и услуги не просто прибыльными, а по-настоящему ценными для людей — полезными, честными и вдохновляющими.',
            direction: 'right'
        },
        {
            id: 'organizations',
            title: 'Государственным и общественным организациям',
            image: blogImg4,
            question: 'Мы открыты к диалогу \n' +
                'с органами власти \n' +
                'и социальными проектами для реализации инициатив, направленных на системное улучшение качества жизни \n' +
                'и здоровья людей. ',

            direction: 'left'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Начинаем анимацию когда секция появляется в viewport
            const startScroll = sectionTop - windowHeight;
            // Первый элемент встает на место за 40% viewport
            const animationDistance = windowHeight * 0.4;
            const progress = Math.min(Math.max((scrollY - startScroll) / animationDistance, 0), 1);

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleCard = (id) => {
        setExpandedCards(prev => {
            if (prev.includes(id)) {
                return prev.filter(cardId => cardId !== id);
            }
            return [...prev, id];
        });
    };

    const isCardExpanded = (id) => expandedCards.includes(id);

    return (
        <section className="partners-gallery" ref={sectionRef}>
            <div className="partners-gallery__container" style={{ '--scroll-progress': scrollProgress }}>
                <div className="partners-gallery__scroll-indicator">
                    <span className="partners-gallery__scroll-dot"></span>
                    <span className="partners-gallery__scroll-text">листай вниз</span>
                    <img src={Galochka} alt="Scroll down" />
                </div>

                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`partners-card-wrapper partners-card-wrapper--${index + 1} ${isCardExpanded(card.id) ? 'expanded' : ''}`}
                    >
                        <div
                            className={`partners-card ${isCardExpanded(card.id) ? 'expanded' : ''} ${isCardExpanded(card.id) ? `expanded--${card.direction}` : ''}`}
                        >
                            <div className="partners-card__image-wrapper">
                                <img src={card.image} alt={card.title} className="partners-card__image" />
                            </div>

                            {isCardExpanded(card.id) && (
                                <div className={`partners-card__expanded-content partners-card__expanded-content--${card.direction}`}>
                                    <button
                                        className="partners-card__close"
                                        onClick={() => toggleCard(card.id)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M3 3L27 27M27 3L3 27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
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
                                className={`partners-card__button-arrow ${isCardExpanded(card.id) ? 'rotated' : ''}`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnersGallery;
