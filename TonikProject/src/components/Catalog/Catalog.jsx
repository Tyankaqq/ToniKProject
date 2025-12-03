import React from 'react';
import './Catalog.css';
import card1 from '../../assets/Image/card1.svg'; // Импортируй все изображения
import card2 from '../../assets/Image/card2.svg';
import card3 from '../../assets/Image/card3.svg';
import card4 from '../../assets/Image/card4.svg';


export const Catalog = () => {
    const products = [
        { id: 1, name: 'НАЗВАНИЕ', price: 'ЦЕНА', size: 'small', image: card2 }, // Используй переменную
        { id: 2, name: 'НАЗВАНИЕ', price: 'ЦЕНА', size: 'big', image: card1 },
        { id: 3, name: 'НАЗВАНИЕ', price: 'ЦЕНА', size: 'big', image: card1 },
        { id: 4, name: 'НАЗВАНИЕ', price: 'ЦЕНА', size: 'small', image: card3 },
        { id: 5, name: 'НАЗВАНИЕ', price: 'ЦЕНА', size: 'small', image: card4 },
    ];

    return (
        <section className="Catalog_section container">
            <div className="Catalog_header">
                <h2 className="Catalog_title">КАТАЛОГ</h2>
                <a href="#all" className="Catalog_link_all">ВСЕ ТОВАРЫ ↗</a>
            </div>

            <div className="Catalog_row">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`Catalog_card Catalog_card--${product.size}`}
                    >
                        <div className="Catalog_card_image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="Catalog_card_info">
                            <h3 className="Catalog_card_name">{product.name}</h3>
                            <p className="Catalog_card_price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
