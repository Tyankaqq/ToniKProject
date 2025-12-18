// src/components/DetailedProductCard/DetailedProductCard.jsx
import React, { useState } from 'react';
import './DetailedProductCard.css';
import WhiteGalochka from '../../../assets/Image/WhiteGalochka.svg';

const DetailedProductCard = ({ product, onAddToCart, addingToCart }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openCertificates, setOpenCertificates] = useState({});
    const [quantity, setQuantity] = useState(1);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const toggleCertificate = (index) => {
        setOpenCertificates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    // Вычисляем итоговую цену
    const calculateTotalPrice = () => {
        const basePrice = parseInt(product.price.replace(/[^\d]/g, ''));
        const totalPrice = basePrice * quantity;
        return totalPrice.toLocaleString('ru-RU');
    };

    // Обработчик добавления в корзину
    const handleAddToCartClick = () => {
        if (onAddToCart) {
            onAddToCart({
                ...product,
                quantity,
                totalPrice: calculateTotalPrice()
            });
        }
    };

    return (
        <div className="DetailedProductCard">
            {/* Левая часть - фото слайдер */}
            <div className="DetailedProductCard_left">
                <div className="DetailedProductCard_slider">
                    <button
                        className="DetailedProductCard_slider_btn DetailedProductCard_slider_btn_prev"
                        onClick={handlePrevImage}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="DetailedProductCard_main_image">
                        <img src={product.images[currentImageIndex]} alt={product.name} />
                    </div>

                    <button
                        className="DetailedProductCard_slider_btn DetailedProductCard_slider_btn_next"
                        onClick={handleNextImage}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Правая часть - информация */}
            <div className="DetailedProductCard_right">
                <div className="DetailedProductCard_header">
                    <div>
                        <h2 className="DetailedProductCard_title">
                            {product.name}
                            <span className="DetailedProductCard_subtitle">{product.subtitle}</span>
                        </h2>
                        <p className="DetailedProductCard_price">Цена: {calculateTotalPrice()} ₽</p>
                    </div>
                </div>

                <div className="DetailedProductCard_content_row">
                    {/* Описание */}
                    <div className="DetailedProductCard_description_block">
                        <p className="DetailedProductCard_description">{product.description}</p>

                        {/* Сертификаты (аккордеоны) */}
                        {product.certificates && product.certificates.length > 0 && (
                            <div className="DetailedProductCard_certificates">
                                {product.certificates.map((cert, index) => (
                                    <div key={index} className="DetailedProductCard_certificate">
                                        <button
                                            className="DetailedProductCard_certificate_toggle"
                                            onClick={() => toggleCertificate(index)}
                                        >
                                            <span>Сертификат</span>
                                            <img
                                                src={WhiteGalochka}
                                                alt="toggle"
                                                className={`DetailedProductCard_certificate_arrow ${openCertificates[index] ? 'rotated' : ''}`}
                                            />
                                        </button>

                                        {openCertificates[index] && (
                                            <div className="DetailedProductCard_certificate_content">
                                                <div className="DetailedProductCard_certificate_row">
                                                    <span className="DetailedProductCard_certificate_title">{cert.title}</span>
                                                    <button className="DetailedProductCard_certificate_btn">Скачать</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Характеристики */}
                    <div className="DetailedProductCard_characteristics">
                        {product.characteristics && product.characteristics.map((char, idx) => (
                            <div key={idx} className="DetailedProductCard_char_row">
                                <span className="DetailedProductCard_char_label">{char.label}</span>
                                <span className="DetailedProductCard_char_value">{char.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Действия */}
                <div className="DetailedProductCard_actions">
                    <div className="DetailedProductCard_quantity">
                        <button
                            className="DetailedProductCard_quantity_btn"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className="DetailedProductCard_quantity_value">{quantity}</span>
                        <button
                            className="DetailedProductCard_quantity_btn"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                    <button className="DetailedProductCard_btn DetailedProductCard_btn_buy">Купить сейчас</button>
                    <button
                        className={`DetailedProductCard_btn DetailedProductCard_btn_cart ${addingToCart ? 'adding' : ''}`}
                        onClick={handleAddToCartClick}
                        disabled={addingToCart}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailedProductCard;
