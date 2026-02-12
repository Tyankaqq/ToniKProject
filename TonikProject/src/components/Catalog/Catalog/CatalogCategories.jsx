import React from 'react';
import './CatalogCategories.css';
import Pointer from "../../../assets/Image/Pointer.svg";
import GreyPointer from "../../../assets/Image/GreyPointer.svg";
import AnfelciaImg from '../../../assets/Image/Anfelcia.svg';
import LaminariaImg from '../../../assets/Image/laminaria.svg';
import FucusImg from '../../../assets/Image/Fucus.svg';
import AllProductsImg from '../../../assets/Image/AllProducts.svg';
import KarbikuiaImg from '../../../assets/Image/Karbikula.svg';
import ZoosteraImg from '../../../assets/Image/Zoostera.svg';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

export const CatalogCategories = () => {
    const categories = [
        {
            id: 1,
            name: 'Все Тоники',
            image: AllProductsImg,
            link: '/catalog',
            size: 'large',
            shadowColor: '33, 150, 243'
        },
        {
            id: 2,
            name: 'Фукус',
            image: FucusImg,
            link: '/catalog/fucus',
            size: 'small',
            shadowColor: '187, 224, 107'
        },
        {
            id: 3,
            name: 'Ламинария',
            image: LaminariaImg,
            link: '/catalog/laminaria',
            size: 'small',
            shadowColor: '80, 189, 118'
        },
        {
            id: 4,
            name: 'Карбикула',
            image: KarbikuiaImg,
            link: '/catalog/karbikula',
            size: 'small', // Изменено на small
            shadowColor: '255, 193, 7'
        },
        {
            id: 5,
            name: 'Зоостера',
            image: ZoosteraImg,
            link: '/catalog/zoostera',
            size: 'small',
            shadowColor: '76, 175, 80'
        },
        {
            id: 6,
            name: 'Анфельция\nТобучинская',
            image: AnfelciaImg,
            link: '/catalog/anfelcia',
            size: 'large', // Изменено на large
            shadowColor: '255, 0, 0'
        }
    ];

    return (

        <section className="CatalogCategories_section container">
            <Breadcrumbs/>


            <div className="CatalogCategories_grid">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={category.link}
                        className={`CatalogCategories_card CatalogCategories_card--${category.size}`}
                        style={{
                            '--shadow-color': category.shadowColor
                        }}
                    >
                        <div className="CatalogCategories_card_image">
                            <img src={category.image} alt={category.name} />
                        </div>

                        <div className="CatalogCategories_card_content">
                            <div className="CatalogCategories_card_link">
                                <span>Перейти в раздел</span>
                                <img src={GreyPointer} alt="pointer" />
                            </div>

                            <h3 className="CatalogCategories_card_title">
                                {category.name}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
