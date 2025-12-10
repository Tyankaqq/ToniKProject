import React from 'react';
import './ProductSelection.css';
import productPhoto from '../../../assets/Image/ProductPhoto.jpg';

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
                <h2 className="ProductSelection_title">Выберите подходящий Тоник для себя</h2>

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

                <button className="ProductSelection_button">показать еще</button>
            </div>
        </section>
    );
};
