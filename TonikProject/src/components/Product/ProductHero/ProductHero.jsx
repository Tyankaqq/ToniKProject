import React from 'react';
import './ProductHero.css';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";
import AhnfeltiaCanvas from './AhnfeltiaCanvas.jsx';

export const ProductHero = ({
                                title = 'Анфельция Тобучинская',
                                subtitle = 'Тоник жизни, который возвращает природную силу',
                            }) => {
    return (
        <div className="ProductHero_wrapper">

            {/* 3D модель — фон */}
            <AhnfeltiaCanvas />

            {/* Breadcrumbs — первый в потоке */}
            <div className="ProductHero_breadcrumbs container">
                <Breadcrumbs />
            </div>

            {/* Заголовок — центр */}
            <div className="ProductHero_title_wrap">
                <h1 className="ProductHero_title">{title}</h1>
            </div>

            {/* Subtitle — низ */}
            <div className="ProductHero_desc_wrap container">
                <p className="ProductHero_subtitle">{subtitle}</p>
            </div>

        </div>
    );
};
