import React from 'react';
import './Catalog.css';
import Pointer from "../../../assets/Image/Pointer.svg";
import GreyPointer from "../../../assets/Image/GreyPointer.svg";
import AnfelciaImg from '../../../assets/Image/Anfelcia.svg';
import LaminariaImg from '../../../assets/Image/laminaria.svg';
import FucusImg from '../../../assets/Image/Fucus.svg';

export const Catalog = () => {
    const categories = [
        {
            id: 1,
            name: 'Фукус',
            image: FucusImg,
            link: '/catalog/fucus',
            size: 'small',
            shadowColor: '187, 224, 107' // RGB для #bbe06b (ярко-зеленый)
        },
        {
            id: 2,
            name: 'Ламинария',
            image: LaminariaImg,
            link: '/catalog/laminaria',
            size: 'small',
            shadowColor: '80, 189, 118' // RGB для #50bd76 (зеленый)
        },
        {
            id: 3,
            name: 'Анфельция\nТобучинская',
            image: AnfelciaImg,
            link: '/catalog/anfelcia',
            size: 'large',
            shadowColor: '255, 0, 0' // RGB для #ff0000 (красный)
        }
    ];

    return (
        <section className="Catalog_section container">
            <div className="Catalog_header">
                <h2 className="Catalog_title">КАТАЛОГ</h2>
                <a href="/catalog" className="Catalog_link_all">
                    ВСЕ ТОВАРЫ
                    <img src={Pointer} alt="pointer" />
                </a>
            </div>

            <div className="Catalog_grid">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={category.link}
                        className={`Catalog_card Catalog_card--${category.size}`}
                        style={{
                            '--shadow-color': category.shadowColor
                        }}
                    >
                        <div className="Catalog_card_image">
                            <img src={category.image} alt={category.name} />
                        </div>

                        <div className="Catalog_card_content">
                            <div className="Catalog_card_link">
                                <span>Перейти в раздел</span>
                                <img src={GreyPointer} alt="pointer" />
                            </div>

                            <h3 className="Catalog_card_title">
                                {category.name}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
