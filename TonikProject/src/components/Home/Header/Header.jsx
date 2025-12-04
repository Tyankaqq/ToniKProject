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
                            <img src={Logo}/>
                        </div>

                        {/* Десктопная навигация */}
                        <nav className="Header_nav">
                            <a href="/catalog" className="Header_nav_link">Каталог</a>
                            <a href="/tonics" className="Header_nav_link">Наши тоники</a>
                            <a href="/about" className="Header_nav_link">О компании</a>
                            <a href="/blog" className="Header_nav_link">Блог</a>
                            <a href="/contacts" className="Header_nav_link">Контакты</a>
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
                <div className="Header_mobile_nav">
                    <a href="/catalog" onClick={closeMenu}>Каталог</a>
                    <a href="/tonics" onClick={closeMenu}>Наши тоники</a>
                    <a href="/about" onClick={closeMenu}>О компании</a>
                    <a href="/blog" onClick={closeMenu}>Блог</a>
                    <a href="/contacts" onClick={closeMenu}>Контакты</a>
                </div>
            </nav>
        </>
    );
};

export default Header;
