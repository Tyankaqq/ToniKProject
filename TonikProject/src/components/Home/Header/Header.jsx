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
    const [hoveredTab, setHoveredTab] = useState(null);
    const lastScrollY = useRef(0);
    const menuRef = useRef(null);
    const leaveTimeoutRef = useRef(null);

    // Граница в пикселях (до этого момента хедер всегда видим)
    const VIDEO_THRESHOLD = 1500; // <- Поменяй на нужное значение (например 1000, 1200 и т.д.)

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Пока не доскроллили до VIDEO_THRESHOLD — хедер всегда видим
            if (currentScrollY < VIDEO_THRESHOLD) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // После VIDEO_THRESHOLD — обычная логика скрытия
            if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
                setIsMenuOpen(false);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        return () => {
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setHoveredTab(null);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setHoveredTab(null);
    };

    const openCart = (e) => {
        e.preventDefault();
        setIsCartOpen(true);
        setIsMenuOpen(false);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const handleTabEnter = (tabName) => {
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }

        if (isMenuOpen) {
            setHoveredTab(tabName);
        }
    };

    const handleTabLeave = () => {
        leaveTimeoutRef.current = setTimeout(() => {
            setHoveredTab(null);
        }, 300);
    };

    const handleDropdownEnter = () => {
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
    };

    const handleDropdownLeave = () => {
        setHoveredTab(null);
    };

    return (
        <>
            <header className={`Header ${isVisible ? 'Header--visible' : 'Header--hidden'}`}>
                <div className="container">
                    <div className="Header_container">
                        {/* ЛОГО СЛЕВА */}
                        <div className="Header_logo">
                            <a href="/">
                                <img src={Logo} alt="Logo"/>
                            </a>
                        </div>

                        {/* ПРАВАЯ ЧАСТЬ: MEGA MENU + КОРЗИНА */}
                        <div className="Header_right">
                            {/* MEGA MENU БЛОК */}
                            <div className={`Header_mega_menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                                {/* ТАБЫ */}
                                <div className="Header_tabs">
                                    {/* Каталог */}
                                    <div
                                        className="Header_tab_item"
                                        onMouseEnter={() => handleTabEnter('catalog')}
                                        onMouseLeave={handleTabLeave}
                                    >
                                        <a href="/catalog" className="Header_tab">Каталог</a>

                                        {isMenuOpen && hoveredTab === 'catalog' && (
                                            <div
                                                className="Header_tab_dropdown"
                                                onMouseEnter={handleDropdownEnter}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <a href="/catalog" onClick={closeMenu}>Весь каталог</a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Наши тоники */}
                                    <div
                                        className="Header_tab_item"
                                        onMouseEnter={() => handleTabEnter('tonics')}
                                        onMouseLeave={handleTabLeave}
                                    >
                                        <a href="/tonics" className="Header_tab">Наши тоники</a>

                                        {isMenuOpen && hoveredTab === 'tonics' && (
                                            <div
                                                className="Header_tab_dropdown"
                                                onMouseEnter={handleDropdownEnter}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <a href="/tonics/anfelcia" onClick={closeMenu}>Анфельция</a>
                                                <a href="/tonics/laminaria" onClick={closeMenu}>Ламинария</a>
                                                <a href="/tonics/fucus" onClick={closeMenu}>Фукус</a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Информация */}
                                    <div
                                        className="Header_tab_item"
                                        onMouseEnter={() => handleTabEnter('info')}
                                        onMouseLeave={handleTabLeave}
                                    >
                                        <span className="Header_tab">Информация</span>

                                        {isMenuOpen && hoveredTab === 'info' && (
                                            <div
                                                className="Header_tab_dropdown"
                                                onMouseEnter={handleDropdownEnter}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <a href="/product" onClick={closeMenu}>О продукте</a>
                                                <a href="/about" onClick={closeMenu}>О компании</a>
                                                <a href="/partners" onClick={closeMenu}>Сотрудничество</a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* РАЗДЕЛИТЕЛЬ перед крестиком */}
                                <div className="Header_divider"></div>

                                {/* БУРГЕР/КРЕСТИК СПРАВА */}
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

                            {/* КОРЗИНА */}
                            <button
                                className="Header_icon_btn"
                                onClick={openCart}
                                aria-label="Корзина"
                            >
                                <img src={Market} alt="Корзина" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Header;
