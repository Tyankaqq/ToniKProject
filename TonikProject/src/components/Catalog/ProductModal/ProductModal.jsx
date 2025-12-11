import React, { useState } from 'react';
import './ProductModal.css';
import ArrowIcon from '../../../assets/Image/Galochka.svg';
import ProductPhoto from '../../../assets/Image/ProductPhoto.jpg';

const ProductModal = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.className === 'product-modal-overlay') {
            onClose();
        }
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <div className="product-modal-overlay" onClick={handleOverlayClick}>
            <div className="product-modal">
                {/* Кастомная кнопка закрытия */}
                <button className="modal-close-btn" onClick={onClose} aria-label="Закрыть">
                    <span className="close-icon"></span>
                </button>

                {/* Хлебные крошки */}
                <div className="breadcrumbs">
                    <span>Главная</span>
                    <span className="separator">›</span>
                    <span>Каталог</span>
                    <span className="separator">›</span>
                    <span className="current">Название товара</span>
                </div>

                <div className="modal-content">
                    {/* Левая колонка - фото */}
                    <div className="modal-left">
                        <div className="modal-product-image">
                            <img src={product?.image || ProductPhoto} alt={product?.name} />
                        </div>
                    </div>

                    {/* Правая колонка - информация */}
                    <div className="modal-right">
                        <h1 className="modal-product-title">Название товара</h1>
                        <p className="modal-product-price">5 000 рублей</p>

                        {/* Характеристики */}
                        <div className="modal-characteristics">
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                            <div className="characteristic-row">
                                <span className="characteristic-label">Характеристика</span>
                                <span className="characteristic-value">
                                    Текст описания текст описания текст описания текст описания текст описания
                                </span>
                            </div>
                        </div>

                        {/* Описание */}
                        <div className="modal-description">
                            <p>
                                Текст описания текст описания текст описания текст описания текст описания
                                текст описания текст описания текст описания текст описания текст описания
                                текст описания текст описания текст описания текст описания текст описания
                                текст описания текст описания текст описания текст описания текст описания текст описания
                            </p>
                        </div>

                        {/* Кнопки управления */}
                        <div className="modal-actions">
                            <div className="quantity-selector">
                                <button onClick={decrementQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                            <button className="add-to-cart-btn">В корзину</button>
                        </div>
                    </div>
                </div>

                {/* Сертификаты */}
                <div className="modal-bottom-sections">
                    {/* Левая секция - Сертификаты */}
                    <section className="modal-section certificates-section">
                        <h2 className="section-title">Сертификаты</h2>
                        <div className="certificates-grid">
                            <div className="certificate-card">
                                <div className="certificate-content">
                                    <h3>Название сертификата название сертификата название сертификата</h3>
                                    <p>Размер файла</p>
                                    <button className="view-btn">СМОТРЕТЬ</button>
                                </div>
                            </div>
                            <div className="certificate-card">
                                <div className="certificate-content">
                                    <h3>Название сертификата название сертификата название сертификата</h3>
                                    <p>Размер файла</p>
                                    <button className="view-btn">СМОТРЕТЬ</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Правая секция - Смотрите также */}
                    <section className="modal-section related-section">
                        <div className="section-header">
                            <h2 className="section-title">Смотрите также</h2>
                            <div className="slider-controls">
                                <button className="slider-btn slider-btn-prev">
                                    <img src={ArrowIcon} alt="Назад" />
                                </button>
                                <button className="slider-btn slider-btn-next">
                                    <img src={ArrowIcon} alt="Вперед" />
                                </button>
                            </div>
                        </div>
                        <div className="related-products">
                            <div className="related-product-card large">
                                <div className="related-product-image">
                                    <img src={ProductPhoto} alt="Товар" />
                                </div>
                                <div className="related-product-info">
                                    <h3>НАЗВАНИЕ</h3>
                                    <p className="related-price">ЦЕНА</p>
                                </div>
                            </div>
                            <div className="related-product-card medium">
                                <div className="related-product-image">
                                    <img src={ProductPhoto} alt="Товар" />
                                </div>
                                <div className="related-product-info">
                                    <h3>НАЗВАНИЕ</h3>
                                    <p className="related-price">ЦЕНА</p>
                                </div>
                            </div>
                            <div className="related-product-card medium">
                                <div className="related-product-image">
                                    <img src={ProductPhoto} alt="Товар" />
                                </div>
                                <div className="related-product-info">
                                    <h3>НАЗВАНИЕ</h3>
                                    <p className="related-price">ЦЕНА</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
