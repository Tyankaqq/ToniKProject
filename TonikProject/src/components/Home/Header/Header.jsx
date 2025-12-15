// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../../assets/Image/Logo.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="Header">
                <div className="container">
                    <div className="Header_container">
                        {/* Логотип */}
                        <div className="Header_logo">
                            <a href="/" className="Header_nav_link">
                            <img src={Logo}/>
                            </a>
                        </div>

                        {/* Десктопная навигация */}
                        <nav className="Header_nav">
                            <a href="/product" className="Header_nav_link">О продукте</a>
                            <a href="/catalog" className="Header_nav_link">Каталог</a>
                            <a href="/tonics" className="Header_nav_link">Наши тоники</a>
                            <a href="/about" className="Header_nav_link">О компании</a>
                            <a href="/partners" className="Header_nav_link">Сотрудничество</a>
                            <a href="/garbage" className="Header_nav_link">Корзина</a>
                        </nav>

                        {/* Действия справа */}
                        <div className="Header_actions">


                            {/* Бургер-кнопка */}
                            <button
                                className={`Header_burger ${isMenuOpen ? 'active' : ''}`}
                                onClick={toggleMenu}
                                aria-label="Меню"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div
                className={`Header_mobile_overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            />

            {/* Мобильное меню - просто те же ссылки */}
            <nav className={`Header_mobile_menu ${isMenuOpen ? 'active' : ''}`}>
                {/* Кнопка закрытия */}
                <button
                    className="Header_mobile_close"
                    onClick={closeMenu}
                    aria-label="Закрыть меню"
                >
                    ✕
                </button>

                <div className="Header_mobile_nav">
                    <a href="/product" onClick={closeMenu}>О продукте</a>
                    <a href="/catalog" onClick={closeMenu}>Каталог</a>
                    <a href="/tonics" onClick={closeMenu}>Наши тоники</a>
                    <a href="/about" onClick={closeMenu}>О компании</a>
                    <a href="/partners" onClick={closeMenu}>Сотрудничество</a>
                    <a href="/contacts" onClick={closeMenu}>Корзина</a>
                </div>
            </nav>
        </>
    );
};

export default Header;
