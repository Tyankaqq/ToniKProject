// Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/Image/Logo.svg';
import Kant from '../../assets/Image/KantLogo.svg';
import vkIcon from '../../assets/Image/VkLogo.svg';
import telegramIcon from '../../assets/Image/TgLogo.svg';
import WhatsappIcon from '../../assets/Image/WhLogo.svg';

export const Footer = () => {
    const footerData = {
        tonics: {
            title: 'Наши тоники',
            links: [
                { text: 'Фукус', href: '#' },
                { text: 'Корбикула', href: '#' },
                { text: 'Ламинария', href: '#' },
                { text: 'Зостера', href: '#' },
                { text: 'Андара', href: '#' },
                { text: 'Анфельция', href: '#' },
            ]
        },
        catalog: {
            title: 'Каталог',
            links: [
                { text: 'Все товары', href: '#' },
                { text: 'Акции', href: '#' },
                { text: 'Категория 1', href: '#' },
                { text: 'Категория 2', href: '#' },
                { text: 'Категория 3', href: '#' },
                { text: 'Категория 4', href: '#' },
            ]
        },
        about: {
            title: 'О компании',
            links: [
                { text: 'Философия', href: '#' },
                { text: 'Производство', href: '#' },
                { text: 'Научные материалы', href: '#' },
                { text: 'Контакты', href: '#' },
                { text: 'FAQ', href: '#' },
            ]
        },
    };

    const socialLinks = [
        { icon: vkIcon, href: '#', alt: 'VK' },
        { icon: telegramIcon, href: '#', alt: 'Telegram' },
        { icon: WhatsappIcon, href: '#', alt: 'YouTube' },
    ];

    // Определяем, desktop ли сейчас (только на клиенте, без useEffect)
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1025;

    // Функция: если 6 ссылок и desktop → разбиваем на 2x3,
    // иначе (планшет/мобилка) или другое количество → одна колонка
    const splitLinksResponsive = (links) => {
        if (isDesktop && links.length === 6) {
            return [links.slice(0, 3), links.slice(3, 6)];
        }
        return [links];
    };

    return (
        <footer className="Footer">
            <div className="Footer_container container">
                <div className="Footer_main">
                    {/* Лого */}
                    <div className="Footer_logo_block">
                        <img src={logo} alt="Тоники Жизни" className="Footer_logo" />
                        <div className="Footer_social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="Footer_social_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={social.icon} alt={social.alt} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Колонки навигации */}
                    {Object.values(footerData).map((column, index) => (
                        <div key={index} className={`Footer_column Footer_column_${index}`}>
                            <h4 className="Footer_column_title">{column.title}</h4>
                            <div className="Footer_column_content">
                                {splitLinksResponsive(column.links).map((chunk, chunkIndex) => (
                                    <ul key={chunkIndex} className="Footer_column_list">
                                        {chunk.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a href={link.href}>{link.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Соцсети отдельной ячейкой под логом */}

                </div>

                <div className="Footer_bottom">
                    <p className="Footer_copyright">Политика ОПД</p>
                    <p className="Footer_policy">
                        Сайт разработан <img src={Kant} alt="Kant" />
                    </p>
                </div>
            </div>
        </footer>
    );
};
