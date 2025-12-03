// About.jsx
import React from 'react';
import './About.css';
import aboutPhotoDesktop from '../../assets/Image/about-factory.svg';
import aboutPhotoTablet from '../../assets/Image/about-factory-table.svg';
import aboutPhotoMobile from '../../assets/Image/about-factory-mobile.svg';
import Pointer from '../../assets/Image/Pointer.svg';

export const About = () => {
    const philosophy = [
        { title: 'Осознанность', description: 'Здоровье как образ жизни' },
        { title: 'Чистота', description: 'Никаких компромиссов в составе' },
        { title: 'Гармония', description: 'Восстановление на всех уровнях' },
        { title: 'Ответственность', description: 'К человеку, к природе, к знаниям' },
    ];

    return (
        <section className="About_section section-dark container">
            {/* Фото-пазл с адаптивными изображениями */}
            <picture className="About_picture">
                <source
                    media="(max-width: 767px)"
                    srcSet={aboutPhotoMobile}
                />
                <source
                    media="(min-width: 768px) and (max-width: 1024px)"
                    srcSet={aboutPhotoTablet}
                />
                <img
                    src={aboutPhotoDesktop}
                    alt="Наше производство"
                    className="About_image"
                />
            </picture>

            {/* Текст в левом пропуске */}
            <div className="About_content">
                {/* Левая колонка */}
                <div className="About_left_column">
                    <h2 className="About_title">КТО МЫ И ЗАЧЕМ ВСЁ ЭТО</h2>

                    <p className="About_text">
                        Мы — команда исследователей, которым небезразлично качество собственной жизни, наших детей и семей, людей вокруг и планеты. Наши продукты помогают организму жить в ресурсе — на уровне клеток, гормонов, ощущений. Создавая Tonics, мы основываемся на человечности во отношениях к самим себе, людям и природе.
                    </p>


                </div>

                {/* Правая колонка - таблица */}
                <div className="About_philosophy_table">
                    <h3 className="About_subtitle">Наша философия:</h3>
                    <div className="About_philosophy_line"></div>

                    {philosophy.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="About_philosophy_title">{item.title}</div>
                            <div className="About_philosophy_description">{item.description}</div>
                            <div className="About_philosophy_line"></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>


            {/* Кнопка в правом верхнем углу */}
            <button className="About_button">
                ПОДРОБНЕЕ
                <img src={Pointer} alt="pointer" />
            </button>
        </section>
    );
};
