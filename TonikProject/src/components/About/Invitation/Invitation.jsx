// src/components/About/Invitation.jsx
import React, { useState } from 'react';
import './Invitation.css';
import InvitePhoto from '../../../assets/Image/PhotoInvite.jpg';
import StarIcon from '../../../assets/Image/Star.svg';

const Invitation = () => {
    const [activeCategory, setActiveCategory] = useState('products');

    const categories = [
        { id: 'products', label: 'Бизнесам и производителям' },
        { id: 'investors', label: 'Учёным и исследователям' },
        { id: 'researchers', label: 'Экологам и активистам вопросов' },
        { id: 'activists', label: 'Государственным и общественным организациям' }
    ];

    return (
        <section className="invitation">
            <div className="container">
                <div className="row_container">
                    <h2 className="invitation__title">
                        Приглашаем вас к сотрудничеству что бы создавать будущее вместе!
                    </h2>
                    <p className="invitation__subtitle">
                        Самые громкие открытия происходят на стыке разных идей и опыта. Поэтому мы всегда открыты к сотрудничеству и ищем единомышленников —тех, кто, как и мы, хочет сделать мир осознаннее, здоровее и технологичнее.
                    </p>
                </div>
                <div className="invitation__categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`invitation__category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="invitation__content">

                    <div className="invitation__text-block">
                        <p className="invitation__question">
                            Работаете в сфере продуктов, услуг или производства? Давайте вместе переосмыслим ваш подход!
                        </p>

                        <div className="invitation__offer">
                            <div className="invitation__offer-label">
                                Что предлагаем:
                            </div>
                            <p className="invitation__offer-text">
                                Поможем сделать ваши продукты и услуги не просто прибыльными, а по-настоящему ценными для людей — полезными, честными и вдохновляющими.
                            </p>
                        </div>

                    </div>
                    <div className="invitation__image-wrapper">
                        <img src={InvitePhoto} alt="Лаборатория" className="invitation__image" />
                    </div>
                </div>

                <div className="invitation__footer">
                    <div className="invitation__icon">
                        <img src={StarIcon} alt="*" />
                    </div>
                    <p className="invitation__cta">
                        Если вы узнали в одном из этих пунктов себя и вам откликается наш подход, —давайте знакомиться!
                        Вместе мы сможем раскрыть неочевидное и создать будущее, в котором хочется жить.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Invitation;
