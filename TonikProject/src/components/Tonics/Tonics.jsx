// Tonics.jsx
import React from 'react';
import './Tonics.css';
import coralGlow from '../../assets/Image/coral-glow.svg';

export const Tonics = () => {
    const words = [
        {
            text: 'ФУКУС',
            size: 'small',
            desktop: { top: '15%', left: '15%' },
            tablet:  { top: '11%', left: '2%' },
            mobile:  { top: '0%', left: '0%' }
        },
        {
            text: 'КОРБИКУЛА',
            size: 'medium',
            desktop: { top: '20%', right: '10%' },
            tablet:  { top: '12%', right: '0%' },
            mobile:  { top: '10%', right: '0%' }
        },
        {
            text: 'ЛАМИНАРИЯ',
            size: 'medium',
            desktop: { bottom: '25%', left: '8%' },
            tablet:  { bottom: '12%', left: '0%' },
            mobile:  { bottom: '0%', left: '0%' }
        },
        {
            text: 'ЗОСТЕРА',
            size: 'medium_small',
            desktop: { bottom: '20%', right: '15%' },
            tablet:  { bottom: '6%', right: '0%' },
            mobile:  { bottom: '-5%', right: '0%' }
        }
    ];

    // простая функция: выбираем набор координат по ширине экрана
    const getPosition = (word) => {
        if (typeof window === 'undefined') {
            // SSR / начальный рендер — пусть будет desktop
            return word.desktop;
        }

        const width = window.innerWidth;

        if (width <= 767) return word.mobile;
        if (width <= 1024) return word.tablet;
        return word.desktop;
    };

    return (
        <section className="Tonics_section container">
            <div className="Tonics_header">
                <h2 className="Tonics_title">НАШИ ТОНИКИ</h2>
                <a href="#all" className="Tonics_link_all">ВСЕ ТОНИКИ ↗</a>
            </div>

            <div className="Tonics_visual">
                {/* коралл + блюр */}
                <div className="Tonics_coral_container">
                    <div className="Tonics_circle_blur" />
                    <img src={coralGlow} alt="Coral" className="Tonics_coral_image" />
                </div>

                {/* АНФЕЛЬЦИЯ по центру */}
                <span className="Tonics_word Tonics_word_main">
                    АНФЕЛЬЦИЯ
                </span>

                {/* остальные слова с позициями только из words */}
                {words.map((word, index) => {
                    const pos = getPosition(word);

                    return (
                        <span
                            key={index}
                            className={`Tonics_word Tonics_word_${word.size}`}
                            style={{
                                top:    pos.top    ?? 'auto',
                                right:  pos.right  ?? 'auto',
                                bottom: pos.bottom ?? 'auto',
                                left:   pos.left   ?? 'auto',
                            }}
                        >
                            {word.text}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};
