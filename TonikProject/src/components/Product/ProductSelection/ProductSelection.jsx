import React from 'react';
import './ProductSelection.css';
import productPhoto from '../../../assets/Image/ProductPhoto.jpg';
import Pointer from '../../../assets/Image/Pointer.svg';

export const ProductSelection = () => {
    const products = [
        {
            id: 1,
            name: 'название',
            price: 'цена',
            image: productPhoto
        },
        {
            id: 2,
            name: 'название',
            price: 'цена',
            image: productPhoto
        }
    ];

    return (
        <section className="ProductSelection">
            <div className="ProductSelection_container container">
                {/* Header с заголовком и кнопкой */}
                <div className="ProductSelection_header">
                    {/* Заголовок для десктопа */}
                    <h2 className="ProductSelection_title ProductSelection_title--desktop">
                        Выберите подходящий Тоник для себя
                    </h2>

                    {/* Заголовок для планшета и мобилки */}
                    <h2 className="ProductSelection_title ProductSelection_title--mobile">
                        Наши Тоники
                    </h2>

                    {/* Кнопка "ВСЕ ТОНИКИ" */}
                    <a href="/tonics" className="ProductSelection_link">
                        ВСЕ ТОНИКИ
                        <img src={Pointer} alt="" />
                    </a>
                </div>

                <div className="ProductSelection_grid">
                    {products.map((product) => (
                        <div key={product.id} className="ProductSelection_card">
                            <div className="ProductSelection_card_image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="ProductSelection_card_info">
                                <p className="ProductSelection_card_name">{product.name}</p>
                                <p className="ProductSelection_card_price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
