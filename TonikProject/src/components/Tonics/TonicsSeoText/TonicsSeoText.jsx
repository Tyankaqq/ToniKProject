import React from 'react';
import './TonicsSeoText.css';

const TonicsSeoText = () => {
    return (
        <section className="TonicsSeoText_section">
            <div className="TonicsSeoText_container">

                {/* Левая колонка: Заголовок */}
                <div className="TonicsSeoText_left">
                    <h2 className="TonicsSeoText_title">
                        ОПИСАНИЕ ТОНИКОВ<br />КАК ЯВЛЕНИЯ
                    </h2>
                </div>

                {/* Правая колонка: Два текстовых блока */}
                <div className="TonicsSeoText_right">

                    <div className="TonicsSeoText_block">
                        <h3 className="TonicsSeoText_subtitle">Что такое Тоники Жизни?</h3>
                        <p className="TonicsSeoText_text">
                            Тоники Жизни — это не просто БАД или природный концентрат.
                            Это реликтовые творения самой Земли — древние, живые субстанции,
                            в которых сохранилась первозданная память о том, как устроена жизнь.
                            Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях.
                        </p>
                    </div>

                    <div className="TonicsSeoText_block">
                        <h3 className="TonicsSeoText_subtitle">Почему мы называем их реликтовыми?</h3>
                        <p className="TonicsSeoText_text">
                            Потому что это вещества, происхождение которых уходит корнями в глубины
                            геологического времени. Они несут в себе информацию о первозданных настройках
                            клетки — о том, какой она должна быть в идеале: здоровой, сильной,
                            способной к саморегуляции и восстановлению. Именно к этим настройкам и стремится тело,
                            получая «инструкцию» от Тоников.
                        </p>
                    </div>

                </div>
            </div>

            {/* Декоративные элементы фона */}
            <div className="TonicsSeoText_bg_glow"></div>
        </section>
    );
};

export default TonicsSeoText;
