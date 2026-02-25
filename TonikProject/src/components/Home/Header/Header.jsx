// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Logo from '../../../assets/Image/Logo.svg';
import Market from '../../../assets/Image/Market.svg';
import VK from '../../../assets/Image/VkLogo.svg';
import Telegram from '../../../assets/Image/TgLogo.svg';
import WhatsApp from '../../../assets/Image/WhLogo.svg';
import WhiteGalochka from '../../../assets/Image/WhiteGalochka.svg';
import Cart from '../../Cart/Cart/Cart.jsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredTab, setHoveredTab] = useState(null);
    const lastScrollY = useRef(0);
    const menuRef = useRef(null);
    const mobileNavRef = useRef(null);
    const leaveTimeoutRef = useRef(null);

    const VIDEO_THRESHOLD = 1500;

    useEffect(() => {
        if (!isCartOpen) {
            const timer = setTimeout(() => setIsCheckout(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isCartOpen]);

    // Блокировка скролла при открытии меню
    useEffect(() => {
        if (isMenuOpen || isCartOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isMenuOpen, isCartOpen]);

    // Логика появления/скрытия хедера при скролле
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen || isCartOpen) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY < VIDEO_THRESHOLD) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen, isCartOpen]);

    const toggleCart = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsCartOpen(!isCartOpen);
        setIsMenuOpen(false);
    };

    const closeCart = (e) => {
        if (e) e.stopPropagation();
        setIsCartOpen(false);
    };

    const toggleMenu = (e) => {
        if (e) e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
        setIsCartOpen(false);
    };

    const goBackToCart = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsCheckout(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <header className={`Header ${isVisible ? 'Header--visible' : 'Header--hidden'}`}>
                <div className="container">
                    <div className="Header_container">
                        <div className="Header_logo">
                            <a href="/"><img src={Logo} alt="Logo"/></a>
                        </div>

                        <div className="Header_right">
                            {/* КОРЗИНА MEGA MENU */}
                            <div className={`Header_cart_menu ${isCartOpen ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    className="Header_cart_icon"
                                    onClick={toggleCart}
                                    aria-label="Корзина"
                                >
                                    <img src={Market} alt="Корзина" />
                                </button>

                                <div className="Header_cart_mega">
                                    <div className="Header_cart_header_row">
                                        {isCheckout && (
                                            <button
                                                type="button"
                                                className="Header_cart_back"
                                                onClick={goBackToCart}
                                            >
                                                <img src={WhiteGalochka} alt="Назад" />
                                            </button>
                                        )}
                                        <div className="Header_cart_title_wrapper">
                                            <h2 className="Header_cart_title">
                                                {isCheckout ? 'ОФОРМЛЕНИЕ' : 'КОРЗИНА'}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="Header_divider"></div>
                                    <button
                                        type="button"
                                        className="Header_cart_close"
                                        onClick={closeCart}
                                    >
                                        <span></span><span></span>
                                    </button>
                                </div>
                            </div>

                            {/* MEGA MENU БЛОК - DESKTOP */}

                            <div className={`Header_mega_menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                                <div className="Header_tabs">
                                    <div className="Header_tab_item" onMouseEnter={() => isMenuOpen && setHoveredTab('cat')} onMouseLeave={() => setHoveredTab(null)}>
                                        <a href="/catalog" className="Header_tab">Каталог</a>
                                        {hoveredTab === 'cat' && (
                                            <div className="Header_tab_dropdown"><a href="/catalog">Весь каталог</a></div>
                                        )}
                                    </div>
                                    <div className="Header_tab_item" onMouseEnter={() => isMenuOpen && setHoveredTab('ton')} onMouseLeave={() => setHoveredTab(null)}>
                                        <a href="/tonics" className="Header_tab">Наши тоники</a>
                                        {hoveredTab === 'ton' && (
                                            <div className="Header_tab_dropdown">
                                                <a href="/tonics/anfelcia">Анфельция</a>
                                                <a href="/tonics/laminaria">Ламинария</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="Header_divider"></div>
                                <button
                                    type="button"
                                    className={`Header_burger ${isMenuOpen ? 'active' : ''}`}
                                    onClick={toggleMenu}
                                >
                                    <span></span><span></span><span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Cart
                isOpen={isCartOpen}
                onClose={closeCart}
                isCheckout={isCheckout}
                setIsCheckout={setIsCheckout}
            />

            {/* Мобильная навигация */}
            {isMenuOpen && (
                <nav className="Header_mobile_nav" ref={mobileNavRef}>
                    <div className="Header_mobile_nav_item">
                        <div className="Header_mobile_nav_header">
                            <a href="/catalog">КАТАЛОГ</a>
                        </div>
                    </div>
                    <div className="Header_mobile_social">
                        <a href="#"><img src={VK} alt="VK" /></a>
                        <a href="#"><img src={Telegram} alt="Telegram" /></a>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Header;