import React, { useState } from 'react';
import './ProductSelection.css';
import productPhoto from '../../../assets/Image/ProductPhoto.jpg';
import Pointer from '../../../assets/Image/Pointer.svg';
import whitegalochka from '../../../assets/Image/WhiteGalochka.svg';

const SLIDE_WIDTH = 59.375; // vw (1140px при 1920px)
const GAP = 7.03;           // vw (135px при 1920px)
const STEP = SLIDE_WIDTH + GAP;
const CENTER_OFFSET = (100 - SLIDE_WIDTH) / 2; // центрируем слайд

export const ProductSelection = () => {
    const [current, setCurrent] = useState(0);

    const products = [
        { id: 1, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 2, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 3, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
        { id: 4, name: 'Анфельция Тобучинская', price: '5 000 ₽', image: productPhoto },
    ];

    const prev = () => setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));

    return (
        <section className="ProductSelection">

            {/* Header внутри container */}
            <div className="ProductSelection_header container">
                <h2 className="ProductSelection_title">Продукция</h2>
                <a href="/tonics" className="ProductSelection_link">
                    Показать ещё
                    <img src={Pointer} alt="" />
                </a>
            </div>

            {/* Слайдер — на всю ширину экрана */}
            <div className="ProductSelection_slider">

                <button className="ProductSelection_arrow ProductSelection_arrow--left" onClick={prev}>
                    <img src={whitegalochka} alt="prev" style={{ transform: 'rotate(-90deg)' }} />
                </button>

                <div
                    className="ProductSelection_track"
                    style={{
                        transform: `translateX(calc(${CENTER_OFFSET}vw - ${current} * ${STEP}vw))`
                    }}
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
