import React from 'react';
import './TonicsHero.css';
import { Button } from '../../../components/Home/Button/Button.jsx';
import EarthPhoto from '../../../assets/Image/Earth.svg'
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

const TonicsHero = () => {
    return (
        <section className="TonicsHero_section">
            <div className="container">
                <Breadcrumbs />

                <div className="TonicsHero_content">
                    {/* Левая часть: Текст */}
                    <div className="TonicsHero_left">
                        <h1 className="TonicsHero_title">
                            Тоники жизни
                        </h1>

                        <p className="TonicsHero_description">
                            ТОНИКИ ЖИЗНИ — ЭТО РЕЛИКТОВЫЕ ТВОРЕНИЯ НАШЕЙ ПЛАНЕТЫ,
                            СОЗДАННЫЕ И СОХРАНЕННЫЕ ПРИРОДОЙ ДЛЯ ВОССТАНОВЛЕНИЯ
                            ЕСТЕСТВЕННЫХ НАСТРОЕК ЖИВЫХ ОРГАНИЗМОВ.
                        </p>

                        <Button variant="primary">
                            ОТКРЫТЬ КАТАЛОГ
                        </Button>
                    </div>

                    {/* Правая часть: Планета */}
                    <div className="TonicsHero_right">
                        <img
                            src={EarthPhoto}
                            alt="Тоники жизни планета"
                            className="TonicsHero_image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TonicsHero;
