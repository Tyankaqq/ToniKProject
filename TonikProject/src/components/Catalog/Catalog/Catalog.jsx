// src/components/Catalog/Catalog.jsx
import React, { useState } from 'react';
import './Catalog.css';
import ProductPhoto from '../../../assets/Image/ProductPhoto.jpg';
import ProductPhoto2 from '../../../assets/Image/ProductPhoto2.png';
import Galochka from '../../../assets/Image/galochka.svg';
import GalochkaPrime from '../../../assets/Image/GalochkaPrime.svg';
import FilterIcon from '../../../assets/Image/Filter.svg';
import ProductModal from '../ProductModal/ProductModal';
import DetailedProductCard from "../DetailedProductCard/DetailedProductCard.jsx";
import Cart from '../../Cart/Cart/Cart.jsx';  // Импортируем компонент корзины

const Catalog = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);  // Состояние для корзины
    const [addingToCart, setAddingToCart] = useState(false);  // Анимация кнопки

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    // Функция для добавления товара в корзину
    const handleAddToCart = (product) => {
        // Анимация кнопки
        setAddingToCart(true);

        // Здесь можно добавить логику добавления товара в корзину
        console.log('Добавлен товар:', product);

        // Задержка перед открытием корзины для плавности
        setTimeout(() => {
            setAddingToCart(false);
            setCartOpen(true);  // Открываем корзину
        }, 600);
    };

    const [dropdownOpen, setDropdownOpen] = useState({
        type: false,
        price: false,
        benefit: false
    });

    const [filters, setFilters] = useState({
        priceFrom: '',
        priceTo: ''
    });

    const [filterPanelOpen, setFilterPanelOpen] = useState(false);

    const toggleDropdown = (name) => {
        setDropdownOpen(prev => {
            const newState = { type: false, price: false, benefit: false };
            newState[name] = !prev[name];
            return newState;
        });
    };

    const toggleFilterPanel = () => {
        setFilterPanelOpen(!filterPanelOpen);
    };

    // Данные для больших детальных карточек (десктоп)
    const detailedProducts = [
        {
            id: 1,
            name: 'АНФЕЛЬЦИЯ',
            subtitle: '/ ТАБУЧИНСКАЯ',
            price: '5 000 ₽',
            images: [ProductPhoto, ProductPhoto2, ProductPhoto],
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания Текст описания текст описания текст описания текст описания текст описания',
            characteristics: [
                { label: 'Масса нетто', value: '100 мл.' },
                { label: 'Назначение', value: 'Для поддержки иммунитета' },
                { label: 'Безопасность', value: 'Не содержит ГМО' },
                { label: 'Срок годности', value: '2 месяца с даты производства. См. дату на дне банки.' },
                { label: 'Происхождение сырья', value: 'Изготовлено из натурального растительного сырья.' },
                { label: 'Тип упаковки:', value: 'Пластиковая банка с защитной мембраной под крышкой.' }
            ],
            certificates: [
                { title: 'Название сертификата' },
                { title: 'Название сертификата' }
            ]
        },
        {
            id: 2,
            name: 'АНФЕЛЬЦИЯ',
            subtitle: '/ ТАБУЧИНСКАЯ',
            price: '5 000 ₽',
            images: [ProductPhoto2, ProductPhoto, ProductPhoto2],
            description: 'Текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания Текст описания текст описания текст описания текст описания текст описания',
            characteristics: [
                { label: 'Масса нетто', value: '100 мл.' },
                { label: 'Назначение', value: 'Для поддержки иммунитета' },
                { label: 'Безопасность', value: 'Не содержит ГМО' },
                { label: 'Срок годности', value: '2 месяца с даты производства. См. дату на дне банки.' },
                { label: 'Происхождение сырья', value: 'Изготовлено из натурального растительного сырья.' },
                { label: 'Тип упаковки:', value: 'Пластиковая банка с защитной мембраной под крышкой.' }
            ],
            certificates: [
                { title: 'Название сертификата' },
                { title: 'Название сертификата' }
            ]
        }
    ];

    // Старые данные для планшета/мобилки
    const products = [
        { id: 1, size: 'medium', image: ProductPhoto, cardClass: 'product-card-1' },
        { id: 2, size: 'small', image: ProductPhoto2, cardClass: 'product-card-2' },
        { id: 3, size: 'large', image: ProductPhoto, cardClass: 'product-card-3' },
        { id: 4, size: 'large', image: ProductPhoto2, cardClass: 'product-card-4' },
        { id: 5, size: 'small', image: ProductPhoto, cardClass: 'product-card-5' },
        { id: 6, size: 'medium', image: ProductPhoto2, cardClass: 'product-card-6' },
        { id: 7, size: 'small', image: ProductPhoto, cardClass: 'product-card-7' },
        { id: 8, size: 'medium', image: ProductPhoto2, cardClass: 'product-card-8' },
        { id: 9, size: 'medium', image: ProductPhoto, cardClass: 'product-card-9' },
        { id: 10, size: 'large', image: ProductPhoto2, cardClass: 'product-card-10' }
    ];

    return (
        <div className="catalog">
            <div className="container">
                {/* Хедер */}
                <div className="catalog__header">
                    <h1 className="Katalog">Каталог</h1>

                    {/* Фильтры десктоп внутри header */}
                    <div className="filter-buttons desktop-filters">
                        <div className="filter-dropdown">
                            <button
                                className={`Knopka_filtry_katalog ${dropdownOpen.type ? 'active' : ''}`}
                                onClick={() => toggleDropdown('type')}
                            >
                                Тип тоника
                                <img src={Galochka} alt="arrow" />
                            </button>
                            {dropdownOpen.type && (
                                <div className="Component_54">
                                    <label><input type="checkbox" /><span>Анфельция</span></label>
                                    <label><input type="checkbox" /><span>Ламинария</span></label>
                                    <label><input type="checkbox" /><span>Фукус</span></label>
                                </div>
                            )}
                        </div>

                        <div className="filter-dropdown">
                            <button
                                className={`Knopka_filtry_katalog ${dropdownOpen.price ? 'active' : ''}`}
                                onClick={() => toggleDropdown('price')}
                            >
                                Цена
                                <img src={Galochka} alt="arrow" />
                            </button>
                            {dropdownOpen.price && (
                                <div className="Component_53">
                                    <div className="price-input-group">
                                        <label className="price-label">От</label>
                                        <input
                                            type="number"
                                            value={filters.priceFrom}
                                            onChange={(e) => setFilters(prev => ({...prev, priceFrom: e.target.value}))}
                                            className="price-input"
                                        />
                                    </div>
                                    <div className="price-input-group">
                                        <label className="price-label">До</label>
                                        <input
                                            type="number"
                                            value={filters.priceTo}
                                            onChange={(e) => setFilters(prev => ({...prev, priceTo: e.target.value}))}
                                            className="price-input"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="filter-dropdown">
                            <button
                                className={`Knopka_filtry_katalog ${dropdownOpen.benefit ? 'active' : ''}`}
                                onClick={() => toggleDropdown('benefit')}
                            >
                                Вид пользы
                                <img src={Galochka} alt="arrow" />
                            </button>
                            {dropdownOpen.benefit && (
                                <div className="Component_51">
                                    <label><input type="checkbox" /><span>Умственная деятельность</span></label>
                                    <label><input type="checkbox" /><span>Физическое здоровье</span></label>
                                    <label><input type="checkbox" /><span>Лечение стресса</span></label>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Кнопка фильтра для мобилки/планшета */}
                    <div className="filter-toggle-wrapper">
                        <button className="filter-toggle-btn" onClick={toggleFilterPanel}>
                            <img src={FilterIcon} alt="Фильтры" />
                        </button>

                        {filterPanelOpen && (
                            <div className="filter-dropdown-panel">
                                <div className="filter-section">
                                    <h3 className="filter-section-title">Тип тоника</h3>
                                    <div className="filter-options">
                                        <label><input type="checkbox" /><span>Анфельция</span></label>
                                        <label><input type="checkbox" /><span>Ламинария</span></label>
                                        <label><input type="checkbox" /><span>Фукус</span></label>
                                    </div>
                                </div>

                                <div className="filter-section">
                                    <h3 className="filter-section-title">Цена</h3>
                                    <div className="filter-price-inputs">
                                        <div className="price-input-group">
                                            <label className="price-label">От</label>
                                            <input
                                                type="number"
                                                value={filters.priceFrom}
                                                onChange={(e) => setFilters(prev => ({...prev, priceFrom: e.target.value}))}
                                                className="price-input"
                                            />
                                        </div>
                                        <div className="price-input-group">
                                            <label className="price-label">До</label>
                                            <input
                                                type="number"
                                                value={filters.priceTo}
                                                onChange={(e) => setFilters(prev => ({...prev, priceTo: e.target.value}))}
                                                className="price-input"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-section">
                                    <h3 className="filter-section-title">Вид пользы</h3>
                                    <div className="filter-options">
                                        <label><input type="checkbox" /><span>Умственная деятельность</span></label>
                                        <label><input type="checkbox" /><span>Физическое здоровье</span></label>
                                        <label><input type="checkbox" /><span>Лечение стресса</span></label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ДЕСКТОП: Детальные карточки */}
                <div className="detailed-products-grid">
                    {detailedProducts.map((product, index) => (
                        <div key={product.id} className={`DetailedProductCard-wrapper ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <DetailedProductCard
                                product={product}
                                onAddToCart={handleAddToCart}
                                addingToCart={addingToCart}
                            />
                        </div>
                    ))}
                </div>

                {/* ПЛАНШЕТ/МОБИЛКА: Старая сетка */}
                <div className="products-grid">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`product-card ${product.cardClass}`}
                            data-size={product.size}
                            onClick={() => handleCardClick(product)}
                        >
                            <div className="product-image">
                                {/* ЗАМЕНИЛИ background-image на тег img */}
                                <img src={product.image} alt="Товар" />
                            </div>
                            <div className="product-info">
                                <h3>НАЗВАНИЕ ТОВАРА</h3>
                                <p className="description">
                                    Текст описания текст описания текст описания текст описания
                                    текст описания текст описания текст описания текст описания
                                </p>
                                <p className="price">ЦЕНА</p>
                            </div>
                        </div>
                    ))}
                </div>

                <ProductModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    product={selectedProduct}
                />

                <button className="Component_38">
                    Смотреть больше
                    <img src={GalochkaPrime} alt="arrow" />
                </button>
            </div>

            {/* Компонент корзины */}
            <Cart
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </div>
    );
};

export default Catalog;
