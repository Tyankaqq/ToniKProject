// src/pages/PartnerDetailPage/PartnerDetailPage.jsx
import React from "react";
import {useParams} from "react-router-dom";
import Header from "../../components/Home/Header/Header.jsx";
import {Footer} from "../../components/Home/Footer/Footer.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import partnerLogo from "../../assets/Image/partner-logo.svg";
import "./PartnerDetailPage.css";

export const PartnerDetailPage = () => {
    const {id} = useParams();

    return (
        <>
            <Header />
            <main className="Partner_main">
                <div className="Partner_container container">
                    <Breadcrumbs />

                    <section className="Partner_hero">
                        <div className="Partner_hero_content">
                            <h1 className="Partner_page_title">
                                «СУВЕРЕННЫЙ КУРС» — ЭТО ОБЩЕСТВЕННОЕ ДВИЖЕНИЕ.
                            </h1>
                            <p className="Partner_page_description">
                                Создано для консолидации активных граждан и экспертов вокруг
                                ключевых задач национального развития. Наша деятельность
                                направлена на глубокий анализ правовой и социально-экономической
                                реальности России и выработку практических решений для ее укрепления.
                            </p>
                            <a
                                href="https://example.ru"
                                target="_blank"
                                rel="noreferrer"
                                className="Partner_site_link"
                            >
                                Перейти на сайт партнёра
                            </a>
                        </div>

                        <div className="Partner_hero_cards">
                            <div className="Partner_stat_card">
                                <div className="Partner_stat_number">53</div>
                                <div className="Partner_stat_bottom">
                                    <div className="Partner_stat_label">
                                        УЧАСТНИКА В СК
                                    </div>
                                </div>
                            </div>
                            <div className="Partner_stat_card">
                                <div className="Partner_stat_number">5</div>
                                <div className="Partner_stat_bottom">
                                    <div className="Partner_stat_row">
                                        <div className="Partner_stat_label">ГОРОДОВ В РФ</div>
                                        <div className="Partner_stat_cities">
                                            Москва<br/>
                                            Санкт-Петербург
                                            Владивосток
                                            Хабаровск<br/>
                                            Владимир
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};
