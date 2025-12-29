import React, { useState, useEffect, useRef } from 'react';
import './Catalog.css';
import Pointer from "../../../assets/Image/Pointer.svg";
import DetailedProductCard from '../../../components/Catalog/DetailedProductCard/DetailedProductCard.jsx';
import ProductPhoto from '../../../assets/Image/ProductPhoto.svg';
import ProductPhoto2 from '../../../assets/Image/ProductPhoto2.svg';


export const Catalog = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const products = [
        {
            id: 1,
            name: 'АНФЕЛЬЦИЯ',
            subtitle: '/ ТОБУЧИНСКАЯ',
            price: '5 000 ₽',
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания',
            images: [ProductPhoto],
            certificates: [
                { title: 'Сертификат качества 2024.pdf' },
                { title: 'Декларация соответствия.pdf' }
            ],
            characteristics: [
                { label: 'Масса нетто', value: '100 мл.' },
                { label: 'Назначение', value: 'Для поддержки иммунитета' },
                { label: 'Безопасность', value: 'Не содержит ГМО' },
                { label: 'Срок', value: '2 месяца с даты' }
            ]
        },
        {
            id: 2,
            name: 'ФУКУС',
            subtitle: '/ ПУЗЫРЧАТЫЙ',
            price: '4 500 ₽',
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания',
            images: [ProductPhoto2],
            certificates: [
                { title: 'Сертификат качества 2024.pdf' }
            ],
            characteristics: [
                { label: 'Масса нетто', value: '150 мл.' },
                { label: 'Назначение', value: 'Для метаболизма' },
                { label: 'Безопасность', value: 'Органический продукт' },
                { label: 'Срок', value: '3 месяца с даты' }
            ]
        },
        {
            id: 3,
            name: 'ЛАМИНАРИЯ',
            subtitle: '/ ЯПОНСКАЯ',
            price: '3 800 ₽',
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания',
            images: [ProductPhoto],
            certificates: [
                { title: 'Сертификат качества 2024.pdf' },
                { title: 'Декларация соответствия.pdf' }
            ],
            characteristics: [
                { label: 'Масса нетто', value: '200 мл.' },
                { label: 'Назначение', value: 'Для щитовидной железы' },
                { label: 'Безопасность', value: 'Без консервантов' },
                { label: 'Срок', value: '4 месяца с даты' }
            ]
        },
        {
            id: 4,
            name: 'СПИРУЛИНА',
            subtitle: '/ ОРГАНИКА',
            price: '6 200 ₽',
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания',
            images: [ProductPhoto2],
            certificates: [
                { title: 'Сертификат качества 2024.pdf' }
            ],
            characteristics: [
                { label: 'Масса нетто', value: '250 мл.' },
                { label: 'Назначение', value: 'Для детокса' },
                { label: 'Безопасность', value: 'Эко-сертификат' },
                { label: 'Срок', value: '6 месяцев с даты' }
            ]
        }
    ];

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % products.length);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating && index !== currentSlide) {
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    // Свайп для мобильных
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(0);
        setTouchEnd(0);
    };

    // Клавиатурная навигация
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, isAnimating]);

    const handleAddToCart = (product) => {
        console.log('Добавлено в корзину:', product);
    };

    return (
        <section className="Catalog_section container">
            <div className="Catalog_header">
                <h2 className="Catalog_title">КАТАЛОГ</h2>
                <a href="#all" className="Catalog_link_all">
                    НАШИ ТОНИКИ
                    <img src={Pointer} alt="pointer" />
                </a>
            </div>

            <div className="Catalog_slider_container">
                <div
                    className="Catalog_slider_wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="Catalog_slider_track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {products.map((product, index) => (
                            <div key={product.id} className="Catalog_slider_item">
                                <DetailedProductCard
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                    addingToCart={false}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* КНОПКИ НАВИГАЦИИ */}
                <button
                    className="Catalog_slider_btn Catalog_slider_btn--prev"
                    onClick={prevSlide}
                    disabled={isAnimating}
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <button
                    className="Catalog_slider_btn Catalog_slider_btn--next"
                    onClick={nextSlide}
                    disabled={isAnimating}
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* NAVIGATION */}
            <div className="Catalog_slider_navigation">
                <div className="Catalog_slider_dots">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            className={`Catalog_slider_dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="Catalog_slider_counter">
                    <span className="Catalog_slider_counter_current">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="Catalog_slider_counter_separator">/</span>
                    <span className="Catalog_slider_counter_total">{String(products.length).padStart(2, '0')}</span>
                </div>
            </div>

            {/* ПРОГРЕСС БАР */}
            <div className="Catalog_slider_progress">
                <div
                    className="Catalog_slider_progress_bar"
                    style={{ width: `${((currentSlide + 1) / products.length) * 100}%` }}
                />
            </div>
        </section>
    );
};
