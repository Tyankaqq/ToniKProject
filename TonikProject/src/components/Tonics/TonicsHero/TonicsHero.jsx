import React from 'react';
import './TonicsHero.css';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";
import EarthCanvas from './EarthCanvas.jsx';

const TonicsHero = () => {
    return (
        <div className="TonicsHero_wrapper container">

            <EarthCanvas />

            {/* Breadcrumbs — первый элемент в потоке */}
            <div className="TonicsHero_breadcrumbs ">
                <Breadcrumbs />
            </div>

            {/* Заголовок — центр */}
            <div className="TonicsHero_title_wrap">
                <h1 className="TonicsHero_title">Тоники жизни</h1>
            </div>

            {/* Подзаголовок — низ */}
            <div className="TonicsHero_desc_wrap container">
                <p className="TonicsHero_description">
                    Реликтовые творения нашей планеты,<br />
                    созданные и сохранённые природой
                </p>
            </div>

        </div>
    );
};

export default TonicsHero;
