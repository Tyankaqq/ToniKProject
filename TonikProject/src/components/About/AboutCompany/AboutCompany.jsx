import React from 'react';
import './AboutCompany.css';
import AboutImage from '../../../assets/Image/AboutCompany.jpg';

const AboutCompany = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="about__label">О компании</h2>

                {/* ДЕСКТОП ВЕРСИЯ */}
                <div className="about__inner about__inner--desktop">
                    <div className="about__left">
                        <p className="about__subtitle">
                            Основополагающая идея нашей философии обращать внимание на неочевидное.
                        </p>
                        <div className="about__image-wrapper">
                            <img src={AboutImage} alt="" className="about__image" />
                        </div>
                    </div>

                    <div className="about__right">
                        <p className="about__lead">
                            А что, если всё вокруг — не совсем то, чем кажется? Обычное дерево в парке, уголь в костре, вода в реке... Мы привыкли к ним и проходим мимо.<br/>
                            Наша компания родилась из желания заглянуть глубже. Мы верим, что в самых простых вещах спрятаны удивительные возможности.
                        </p>

                        <div className="about__mission">

                            <p className="about__mission-text">
                                <span className="about__mission-highlight">
                                    Наша миссия — находить эти скрытые дары природы
                                </span>{' '}
                                и превращать их в решения, которые помогают человеку раскрыть свой потенциал —почувствовать себя полным сил, энергии и ясности. Мы ищем ценность там, где другие видят лишь отходы, и создаём будущее из того, что уже есть вокруг.
                                Для нас это больше, чем бизнес. Это новый способ видеть мир.<br/>
                                Мы хотим, чтобы жизнь была по-настоящему качественной и насыщенной в любом возрасте. Чтобы каждый мог реализовать себя и подарить миру что-то важное. И мы создаём для этого все условия, используя самые неожиданные ресурсы природы.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ПЛАНШЕТ ВЕРСИЯ */}
                <div className="about__inner about__inner--mobile">
                    <div className="about__grid">
                        <div className="about__column about__column--left">
                            <p className="about__subtitle">
                                Основополагаю<span className="about__br-tablet"><br/></span>щая идея нашей философии обращать внимание на неочевидное.
                            </p>

                            <p className="about__lead">
                                А что, если всё вокруг — не совсем то, чем кажется? Обычное дерево в парке, уголь в костре, вода в реке... Мы привыкли к ним и проходим мимо.<br/>
                                Наша компания родилась из желания заглянуть глубже. Мы верим, что в самых простых вещах спрятаны удивительные возможности.
                            </p>
                        </div>

                        <div className="about__column about__column--right">
                            <div className="about__image-wrapper">
                                <img src={AboutImage} alt="" className="about__image" />
                            </div>

                            <div className="about__mission">

                                <p className="about__mission-text">
                    <span className="about__mission-highlight">
                        Наша миссия — находить эти скрытые дары природы
                    </span>{' '}
                                    и превращать их в решения, которые помогают человеку раскрыть свой потенциал —почувствовать себя полным сил, энергии и ясности. Мы ищем ценность там, где другие видят лишь отходы, и создаём будущее из того, что уже есть вокруг.
                                    Для нас это больше, чем бизнес. Это новый способ видеть мир.<br/>
                                    Мы хотим, чтобы жизнь была по-настоящему качественной и насыщенной в любом возрасте. Чтобы каждый мог реализовать себя и подарить миру что-то важное. И мы создаём для этого все условия, используя самые неожиданные ресурсы природы.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
