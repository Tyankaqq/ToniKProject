// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Logo from '../../../assets/Image/Logo.svg';
import Market from '../../../assets/Image/Market.svg';
import Cart from '../../Cart/Cart/Cart.jsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeCatalog, setActiveCatalog] = useState('tonics'); // По умолчанию "Наши тоники"
    const lastScrollY = useRef(0);

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    const switchCatalog = (catalog) => {
        setActiveCatalog(catalog);
    };

    return (
        <>
            <header className={`Header ${isVisible ? 'Header--visible' : 'Header--hidden'}`}>
                <div className="container">
                    <div className="Header_container">
                        <div className="Header_logo">
                            <a href="/" className="Header_nav_link">
                                <img src={Logo} alt="Logo"/>
                            </a>
                        </div>

                        <div className="Header_actions">
                            {/* Иконка корзины */}
                            <button
                                className="Header_icon_btn"
                                onClick={openCart}
                                aria-label="Корзина"
                            >
                                <img src={Market} alt="Корзина" />
                            </button>

                            {/* Бургер/Крестик */}
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

                {/* ПАНЕЛЬ С ТАБАМИ (выезжает слева под хедером) */}
                <div className={`Header_sidebar ${isMenuOpen ? 'active' : ''}`}>
                    <div className="Header_sidebar_tabs">
                        <button
                            className={`Header_sidebar_tab ${activeCatalog === 'catalog' ? 'active' : ''}`}
                            onClick={() => switchCatalog('catalog')}
                        >
                            Каталог
                        </button>
                        <button
                            className={`Header_sidebar_tab ${activeCatalog === 'tonics' ? 'active' : ''}`}
                            onClick={() => switchCatalog('tonics')}
                        >
                            Наши тоники
                        </button>
                        <button
                            className={`Header_sidebar_tab ${activeCatalog === 'info' ? 'active' : ''}`}
                            onClick={() => switchCatalog('info')}
                        >
                            Информация
                        </button>
                    </div>

                    {/* Подкаталог */}
                    <div className="Header_sidebar_content">
                        {activeCatalog === 'catalog' && (
                            <div className="Header_submenu">
                                <a href="/catalog" onClick={closeMenu}>Весь каталог</a>
                            </div>
                        )}

                        {activeCatalog === 'tonics' && (
                            <div className="Header_submenu">
                                <a href="/tonics/anfelcia" onClick={closeMenu}>Анфельция</a>
                                <a href="/tonics/laminaria" onClick={closeMenu}>Ламинария</a>
                                <a href="/tonics/fucus" onClick={closeMenu}>Фукус</a>
                            </div>
                        )}

                        {activeCatalog === 'info' && (
                            <div className="Header_submenu">
                                <a href="/product" onClick={closeMenu}>О продукте</a>
                                <a href="/about" onClick={closeMenu}>О компании</a>
                                <a href="/partners" onClick={closeMenu}>Сотрудничество</a>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Оверлей затемнения */}
            <div
                className={`Header_overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            />

            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Header;
