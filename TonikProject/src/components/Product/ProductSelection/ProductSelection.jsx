import React, { useState, useEffect, useRef } from 'react';
import './ProductSelection.css';
import productPhoto from '../../../assets/Image/ProductPhoto.jpg';
import Pointer from '../../../assets/Image/Pointer.svg';
import whitegalochka from '../../../assets/Image/WhiteGalochka.svg';

const SLIDE_WIDTH_DESKTOP = 59.375;
const GAP_DESKTOP         = 7.03;
const STEP_DESKTOP        = SLIDE_WIDTH_DESKTOP + GAP_DESKTOP;
const CENTER_DESKTOP      = (100 - SLIDE_WIDTH_DESKTOP) / 2;

const SLIDE_WIDTH_MOBILE  = 83.33;
const GAP_MOBILE          = 4;
const STEP_MOBILE         = SLIDE_WIDTH_MOBILE + GAP_MOBILE;
const CENTER_MOBILE       = (100 - SLIDE_WIDTH_MOBILE) / 2;

// Порог свайпа в px — меньше этого значения считается тапом, не свайпом
const SWIPE_THRESHOLD = 50;

export const ProductSelection = () => {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Храним начальную точку касания
    const touchStartX = useRef(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 1024); // охватываем и планшет
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const step   = isMobile ? STEP_MOBILE   : STEP_DESKTOP;
    const center = isMobile ? CENTER_MOBILE : CENTER_DESKTOP;

    const products = [
        { id: 1, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 2, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 3, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 4, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
    ];

    const prev = () => setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const delta = touchStartX.current - e.changedTouches[0].clientX;

        if (Math.abs(delta) >= SWIPE_THRESHOLD) {
            delta > 0 ? next() : prev(); // свайп влево → next, вправо → prev
        }

        touchStartX.current = null;
    };

    return (
        <section className="ProductSelection">

            <div className="ProductSelection_header container">
                <h2 className="ProductSelection_title">Продукция</h2>
                <a href="/tonics" className="ProductSelection_link">
                    Показать ещё
                    <img src={Pointer} alt="" />
                </a>
            </div>

            <div className="ProductSelection_slider">

                <button className="ProductSelection_arrow ProductSelection_arrow--left" onClick={prev}>
                    <img src={whitegalochka} alt="prev" style={{ transform: 'rotate(-90deg)' }} />
                </button>

                <div
                    className="ProductSelection_track"
                    style={{
                        transform: `translateX(calc(${center}vw - ${current} * ${step}vw))`
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`ProductSelection_slide ${index === current ? 'ProductSelection_slide--active' : ''}`}
                        >
                            <div className="ProductSelection_card_image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            {index === current && (
                                <div className="ProductSelection_card_info">
                                    <p className="ProductSelection_card_name">{product.name}</p>
                                    <p className="ProductSelection_card_price">{product.price}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button className="ProductSelection_arrow ProductSelection_arrow--right" onClick={next}>
                    <img src={whitegalochka} alt="next" style={{ transform: 'rotate(90deg)' }} />
                </button>

            </div>
        </section>
    );
};
