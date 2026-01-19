// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Logo from '../../../assets/Image/Logo.svg';
import Market from '../../../assets/Image/Market.svg';
import VK from '../../../assets/Image/VkLogo.svg';
import Telegram from '../../../assets/Image/TgLogo.svg';
import WhatsApp from '../../../assets/Image/WhLogo.svg';
import Cart from '../../Cart/Cart/Cart.jsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredTab, setHoveredTab] = useState(null);
    const lastScrollY = useRef(0);
    const menuRef = useRef(null);
    const mobileNavRef = useRef(null); // ДОБАВЛЕНО
    const leaveTimeoutRef = useRef(null);

    const VIDEO_THRESHOLD = 1500;

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

            if (currentScrollY < VIDEO_THRESHOLD) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

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

    // ИСПРАВЛЕНО: учитываем и мобильное меню
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickInsideMenu = menuRef.current && menuRef.current.contains(event.target);
            const isClickInsideMobileNav = mobileNavRef.current && mobileNavRef.current.contains(event.target);

            if (!isClickInsideMenu && !isClickInsideMobileNav) {
                setIsMenuOpen(false);
                setHoveredTab(null);
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

    const toggleMobileSubmenu = (tabName) => {
        setHoveredTab(hoveredTab === tabName ? null : tabName);
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
                            {/* MEGA MENU БЛОК - DESKTOP */}
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

            {/* MOBILE NAV MENU - ВЫНЕСЕНО ВНЕ HEADER */}
            {isMenuOpen && (
                <nav className="Header_mobile_nav" ref={mobileNavRef}>
                    <div className="Header_mobile_nav_item">
                        <div className="Header_mobile_nav_header">
                            <a href="/catalog" onClick={closeMenu}>КАТАЛОГ</a>
                            <button
                                className="Header_mobile_nav_toggle"
                                onClick={() => toggleMobileSubmenu('catalog')}
                                type="button"
                            >
                                <span className={hoveredTab === 'catalog' ? 'active' : ''}></span>
                            </button>
                        </div>
                        {hoveredTab === 'catalog' && (
                            <div className="Header_mobile_nav_submenu">
                                <a href="/catalog" onClick={closeMenu}>Весь каталог</a>
                            </div>
                        )}
                    </div>

                    <div className="Header_mobile_nav_item">
                        <div className="Header_mobile_nav_header">
                            <a href="/tonics" onClick={closeMenu}>НАШИ ТОНИКИ</a>
                            <button
                                className="Header_mobile_nav_toggle"
                                onClick={() => toggleMobileSubmenu('tonics')}
                                type="button"
                            >
                                <span className={hoveredTab === 'tonics' ? 'active' : ''}></span>
                            </button>
                        </div>
                        {hoveredTab === 'tonics' && (
                            <div className="Header_mobile_nav_submenu">
                                <a href="/tonics/anfelcia" onClick={closeMenu}>Анфельция</a>
                                <a href="/tonics/laminaria" onClick={closeMenu}>Ламинария</a>
                                <a href="/tonics/fucus" onClick={closeMenu}>Фукус</a>
                            </div>
                        )}
                    </div>

                    <div className="Header_mobile_nav_item">
                        <div className="Header_mobile_nav_header">
                            <span>ИНФОРМАЦИЯ</span>
                            <button
                                className="Header_mobile_nav_toggle"
                                onClick={() => toggleMobileSubmenu('info')}
                                type="button"
                            >
                                <span className={hoveredTab === 'info' ? 'active' : ''}></span>
                            </button>
                        </div>
                        {hoveredTab === 'info' && (
                            <div className="Header_mobile_nav_submenu">
                                <a href="/product" onClick={closeMenu}>О продукте</a>
                                <a href="/about" onClick={closeMenu}>О компании</a>
                                <a href="/partners" onClick={closeMenu}>Сотрудничество</a>
                            </div>
                        )}
                    </div>

                    <div className="Header_mobile_social">
                        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="Header_mobile_social_link">
                            <img src={VK} alt="VK" />
                        </a>
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="Header_mobile_social_link">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="Header_mobile_social_link">
                            <img src={WhatsApp} alt="WhatsApp" />
                        </a>
                    </div>
                </nav>
            )}

            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Header;
