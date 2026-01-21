import React, { useState, useRef, useEffect } from 'react';
import './ContactForm.css';
import Pointer from '../../../assets/Image/Pointer.svg';
import TgLogo from '../../../assets/Image/TgLogo.svg';
import VkLogo from '../../../assets/Image/VkLogo.svg';

export const ContactForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const sectionRef = useRef(null);
    const scrollAttemptsRef = useRef(0);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        agree: false
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || isModalOpen) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Проверяем, что блок занимает весь экран
            const isFullscreen = rect.top <= 0 && rect.bottom >= windowHeight;

            if (isFullscreen && !isLocked) {
                setIsLocked(true);
                scrollAttemptsRef.current = 0;
            }
        };

        const handleWheel = (e) => {
            if (!isLocked || isModalOpen) return;

            e.preventDefault();

            scrollAttemptsRef.current += 1;

            // После 2-3 попыток прокрутки - отпускаем блок
            if (scrollAttemptsRef.current >= 3) {
                setIsLocked(false);
                scrollAttemptsRef.current = 0;

                // Скроллим в нужном направлении
                setTimeout(() => {
                    if (e.deltaY > 0) {
                        window.scrollTo({
                            top: sectionRef.current.offsetTop + sectionRef.current.offsetHeight,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo({
                            top: sectionRef.current.offsetTop - window.innerHeight,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Проверяем сразу при монтировании
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isLocked, isModalOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section
                className={`ContactForm_section section-light ${isLocked ? 'is-locked' : ''}`}
                ref={sectionRef}
            >
                <div className="ContactForm_container container">
                    <div className="ContactForm_content">
                        <h2 className="ContactForm_title">
                            ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ
                            ДВИЖЕНИЮ<br/> ЗА ЗДОРОВЫЙ
                            И ОСОЗНАННЫЙ ОБРАЗ ЖИЗНИ.
                        </h2>

                        <button className="ContactForm_trigger_button" onClick={openModal}>
                            СВЯЗАТЬСЯ
                            <img src={Pointer} alt="pointer" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Модальное окно */}
            {isModalOpen && (
                <>
                    <div className="ContactForm_overlay" onClick={closeModal}></div>
                    <div className={`ContactForm_modal ${isModalOpen ? 'active' : ''}`}>
                        <button className="ContactForm_close" onClick={closeModal}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M7.5 7.5L22.5 22.5M22.5 7.5L7.5 22.5" stroke="white" strokeWidth="2"/>
                            </svg>
                        </button>

                        <h3 className="ContactForm_modal_title">
                            Появились вопросы<br />
                            или предложения?
                        </h3>

                        <div className="ContactForm_modal_socials">
                            <span>Связаться с нами</span>
                            <div className="ContactForm_modal_icons">
                                <a href="#" className="ContactForm_modal_icon">
                                    <img src={TgLogo} alt="Telegram" />
                                </a>
                                <a href="#" className="ContactForm_modal_icon">
                                    <img src={VkLogo} alt="VK" />
                                </a>
                            </div>
                        </div>

                        <p className="ContactForm_modal_description">
                            Если вы являетесь представителями отрасли сельского хозяйства
                            (земледелие, животноводство, птицеводство, рыбоводство)
                            и разделяете наши ценности, мы приглашаем вас к сотрудничеству
                            с командой Тоников Жизни.
                        </p>

                        <form className="ContactForm_modal_form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                                className="ContactForm_modal_input"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                value={formData.phone}
                                onChange={handleChange}
                                className="ContactForm_modal_input"
                                required
                            />

                            <input
                                type="text"
                                name="message"
                                placeholder="Сообщение"
                                value={formData.message}
                                onChange={handleChange}
                                className="ContactForm_modal_input"
                                required
                            />

                            <label className="ContactForm_modal_checkbox">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Принимаю <u>условия обработки персональных данных</u>.</span>
                            </label>

                            <button type="submit" className="ContactForm_modal_submit">
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </>
            )}
        </>
    );
};
