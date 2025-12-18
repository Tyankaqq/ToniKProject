import React from 'react';
import './ProductHero.css';
import coralImage from '../../../assets/Image/Tonic.svg';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

export const ProductHero = ({

                                title = 'Анфельция',
                                subtitle = 'Тоник жизни, который возвращает природную силу',
                                description = 'Иногда, чтобы услышать себя, нужно просто замолчать. Иногда, чтобы восстановиться, нужно просто прикоснуться к тому, что живет миллионы лет в согласии с природой. Анфельция — это не про "таблетки" "от чего-то". Это про возвращение к себе. Про ту самую чистую версию организма, которая знает, как жить, как восстанавливаться, как быть в балансе.'
                            }) => {
    return (
        <section className="ProductHero">
            <div className="ProductHero_container container">


                <div className="ProductHero_wrapper">
                    <Breadcrumbs />
                    <div className="ProductHero_top">

                        <div className="ProductHero_text_wrapper">

                            <h2 className="ProductHero_subtitle">{subtitle}</h2>
                            <p className="ProductHero_description">{description}</p>
                        </div>

                        <div className="ProductHero_coral">
                            <img src={coralImage} alt={title} />
                        </div>
                    </div>

                    <h1 className="ProductHero_title">{title}</h1>
                </div>
            </div>
        </section>
    );
};
