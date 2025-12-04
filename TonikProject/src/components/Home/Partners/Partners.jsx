import React from 'react';
import './Partners.css';
import partnerLogo from '../../../assets/Image/partner-logo.svg'; // Замени на путь к логотипу
import Pointer from '../../../assets/Image/Pointer.svg';

export const Partners = () => {
    const partners = Array(8).fill({
        title: 'Суверенный курс',
        logo: partnerLogo,
        link: '#'
    });

    return (
        <section className="Partners_section">
            <div className="Partners_container container">
                <div className="Partners_header">
                    <h2 className="Partners_title">Наши партнеры</h2>
                    <a href="#" className="Partners_link">
                        ВСЕ ПАРТНЕРЫ
                        <img src={Pointer}/>
                    </a>
                </div>

                <div className="Partners_grid">
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
                                <img src={Pointer}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
