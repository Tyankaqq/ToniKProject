// TonicsIndustries.jsx
import React, { useState } from 'react';
import './TonicsIndustries.css';
import industryImg from '../../../assets/Image/industry.svg';

const TonicsIndustries = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const industries = [
        { id: 0, name: 'ПРОМЫШЛЕННОСТЬ', image: industryImg, description: 'Текст описания Текст описания Текст описания Текст описания Текст описания Текст описания ' },
        { id: 1, name: 'СЕЛЬСКОЕ ХОЗЯЙСТВО', image: industryImg, description: 'Текст описания…' },
        { id: 2, name: 'КОСМЕТИКА',       image: industryImg,   description: 'Текст описания…' },
        { id: 3, name: 'МЕДИЦИНА',        image: industryImg,    description: 'Текст описания…' },
        { id: 4, name: 'БОТАНИКА',        image: industryImg,      description: 'Текст описания…' },
    ];

    return (
        <section className="TonicsIndustries_section">
            <div className="TonicsIndustries_wrapper">
                {/* Левая колонка */}
                <div className="TonicsIndustries_listWrapper">
                    <ul className="TonicsIndustries_list">
                        {industries.map(item => (
                            <li
                                key={item.id}
                                className={
                                    'TonicsIndustries_item' +
                                    (activeIndex === item.id ? ' TonicsIndustries_item--active' : '')
                                }
                                onClick={() => setActiveIndex(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Правая колонка */}
                <div className="TonicsIndustries_card">
                    <div className="TonicsIndustries_cardImage">
                        <img
                            src={industries[activeIndex].image}
                            alt={industries[activeIndex].name}
                        />
                    </div>
                    <div className="TonicsIndustries_cardContent">
                        <p>{industries[activeIndex].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TonicsIndustries;
