import React from 'react';
import './TonicsHero.css';
import { Button } from '../../../components/Home/Button/Button.jsx';// Проверь правильность пути к Button
import EarthPhoto from '../../../assets/Image/Earth.svg'

const TonicsHero = () => {
    return (
        <section className="TonicsHero_section">
            <div className="TonicsHero_content">
                {/* Левая часть: Текст */}
                <div className="TonicsHero_left">
                    <div className="TonicsHero_breadcrumbs">
                        Главная &gt; Страница Тоники
                    </div>

                    <h1 className="TonicsHero_title">
                        Тоники<br />жизни
                    </h1>

                    <p className="TonicsHero_description">
                        ТОНИКИ ЖИЗНИ — ЭТО РЕЛИКТОВЫЕ ТВОРЕНИЯ НАШЕЙ ПЛАНЕТЫ,
                        СОЗДАННЫЕ И СОХРАНЕННЫЕ ПРИРОДОЙ ДЛЯ ВОССТАНОВЛЕНИЯ
                        ЕСТЕСТВЕННЫХ НАСТРОЕК ЖИВЫХ ОРГАНИЗМОВ.
                    </p>

                    {/* Используем твой компонент Button */}
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
        </section>
    );
};

export default TonicsHero;
