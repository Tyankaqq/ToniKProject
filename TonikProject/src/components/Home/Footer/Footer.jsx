import React from 'react';
import './Footer.css';
import logo from '../../../assets/Image/Logo.svg';
import Kant from '../../../assets/Image/KantLogo.svg';
import vkIcon from '../../../assets/Image/VkLogo.svg';
import telegramIcon from '../../../assets/Image/TgLogo.svg';
import WhatsappIcon from '../../../assets/Image/WhLogo.svg';

export const Footer = () => {
    const footerColumns = [
        {
            title: 'Каталог',
            links: [
                { text: 'Анфельция', href: '#' },
                { text: 'Ламинария', href: '#' },
                { text: 'Фукус', href: '#' },
            ]
        },
        {
            title: 'Наши тоники',
            links: [
                { text: 'Анфельция', href: '#' },
                { text: 'Ламинария', href: '#' },
                { text: 'Фукус', href: '#' },
            ]
        },
        {
            title: 'Информация',
            links: [
                { text: 'О компании', href: '#' },
                { text: 'Блог', href: '#' },
                { text: 'Политика ОПД', href: '#' },
            ]
        },
    ];

    const socialLinks = [
        { icon: vkIcon, href: '#', alt: 'VK' },
        { icon: telegramIcon, href: '#', alt: 'Telegram' },
        { icon: WhatsappIcon, href: '#', alt: 'WhatsApp' },
    ];

    return (
        <footer className="Footer">
            <div className="Footer_container container">
                {/* Верхняя часть: большой блок (лого+соц+инн/огрн) + 3 колонки */}
                <div className="Footer_main">
                    {/* Большой левый блок 850x221 */}
                    <div className="Footer_info_block">
                        <div className="Footer_info_top">
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
                        <div className="Footer_info_bottom">
                            <p className="Footer_inn">ИНН</p>
                            <p className="Footer_ogrn">ОГРН</p>
                        </div>
                    </div>

                    {/* 3 колонки 270x221 */}
                    {footerColumns.map((column, index) => (
                        <div key={index} className="Footer_column">
                            <h4 className="Footer_column_title">{column.title}</h4>
                            <ul className="Footer_column_list">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Нижняя рамка на всю ширину */}
                <div className="Footer_bottom">
                    <p className="Footer_copyright">
                        Сайт разработан: <img src={Kant} alt="KANT.studio" />
                    </p>
                </div>
            </div>
        </footer>
    );
};
