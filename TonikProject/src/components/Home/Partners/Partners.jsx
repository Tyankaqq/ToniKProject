import React from 'react';
import './Partners.css';
import partnerLogo from '../../../assets/Image/partner-logo.svg';
import Pointer from '../../../assets/Image/Pointer.svg';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

export const Partners = ({
                             variant = 'default', // 'default' или 'featured-double'
                             title = 'Наши партнеры',
                             titleShort = 'Партнеры',
                             showAllLink = true,
                             featuredItems = [] // Массив больших блоков
                         }) => {
    // Количество обычных карточек в зависимости от варианта
    const getPartnersCount = () => {
        if (variant === 'featured-double') return 8;
        return 8;
    };

    const partners = Array(getPartnersCount()).fill({
        title: 'Суверенный курс',
        logo: partnerLogo,
        link: '#'
    });

    return (
        <section className={`Partners_section Partners_section--${variant}`}>
            <div className="Partners_container container">
                <Breadcrumbs />
                <div className="Partners_header">

                    <h2 className="Partners_title">

                        <span className="Partners_title_full">{title}</span>
                        <span className="Partners_title_short">{titleShort}</span>
                    </h2>
                    {showAllLink && (
                        <a href="/partners" className="Partners_link">
                            ВСЕ ПАРТНЕРЫ
                            <img src={Pointer} alt=""/>
                        </a>
                    )}
                </div>

                <div className={`Partners_grid Partners_grid--${variant}`}>
                    {/* Первый большой блок */}
                    {variant === 'featured-double' && featuredItems[0] && (
                        <div className="Partners_featured Partners_featured--1">
                            <div className="Partners_featured_header">
                                <h3 className="Partners_featured_title">
                                    {featuredItems[0].title}
                                </h3>
                            </div>

                            {/* Контент по центру */}
                            {featuredItems[0].content && (
                                <div className="Partners_featured_content">
                                    {featuredItems[0].content}
                                </div>
                            )}

                            <a href={featuredItems[0].link || '#'} className="Partners_featured_link">
                                ПОДРОБНЕЕ
                                <img src={Pointer} alt=""/>
                            </a>
                        </div>
                    )}

                    {/* Обычные карточки партнеров */}
                    {partners.map((partner, index) => (
                        <div key={index} className="Partners_card">
                            <div className="Partners_card_title">{partner.title}</div>
                            <img
                                src={partner.logo}
                                alt={partner.title}
                                className="Partners_card_logo"
                            />
                            <a href={partner.link} className="Partners_card_link">
                                ПОДРОБНЕЕ
                                <img src={Pointer} alt=""/>
                            </a>
                        </div>
                    ))}

                    {/* Второй большой блок */}
                    {variant === 'featured-double' && featuredItems[1] && (
                        <div className="Partners_featured Partners_featured--2">
                            <div className="Partners_featured_header">
                                <h3 className="Partners_featured_title">
                                    {featuredItems[1].title}
                                </h3>
                            </div>

                            {/* Контент по центру */}
                            {featuredItems[1].content && (
                                <div className="Partners_featured_content">
                                    {featuredItems[1].content}
                                </div>
                            )}

                            <a href={featuredItems[1].link || '#'} className="Partners_featured_link">
                                ПОДРОБНЕЕ
                                <img src={Pointer} alt=""/>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
