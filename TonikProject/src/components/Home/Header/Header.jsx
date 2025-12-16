// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../../assets/Image/Logo.svg';
import Cart from '../../Cart/Cart/Cart.jsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen || isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isCartOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openCart = (e) => {
        e.preventDefault();
        setIsCartOpen(true);
        setIsMenuOpen(false);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <header className="Header">
                <div className="container">
                    <div className="Header_container">
                        <div className="Header_logo">
                            <a href="/" className="Header_nav_link">
                                <img src={Logo} alt="Logo"/>
                            </a>
                        </div>

                        <nav className="Header_nav">
                            <a href="/product" className="Header_nav_link">О продукте</a>
                            <a href="/catalog" className="Header_nav_link">Каталог</a>
                            <a href="/tonics" className="Header_nav_link">Наши тоники</a>
                            <a href="/about" className="Header_nav_link">О компании</a>
                            <a href="/partners" className="Header_nav_link">Сотрудничество</a>
                            <a href="#" className="Header_nav_link" onClick={openCart}>Корзина</a>
                        </nav>

                        <div className="Header_actions">
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

            <div
                className={`Header_mobile_overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            />

            <nav className={`Header_mobile_menu ${isMenuOpen ? 'active' : ''}`}>
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
                    <a href="#" onClick={(e) => { closeMenu(); openCart(e); }}>Корзина</a>
                </div>
            </nav>


            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Header;
