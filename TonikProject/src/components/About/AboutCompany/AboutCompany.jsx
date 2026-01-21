import React from 'react';
import { motion } from 'framer-motion';
import './AboutCompany.css';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

// Настройки анимации для переиспользования
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const AboutCompany = () => {
    return (
        <>
            {/* Хлебные крошки */}
            <div className="about__breadcrumbs-wrapper">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>

            {/* Блок 1 */}
            <section className="about__block">
                <div className="container">
                    <motion.h3
                        className="about__block-title"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                    >
                        Основополагающая идея нашей философии<br/>
                        обращать внимание на неочевидное.
                    </motion.h3>
                </div>
            </section>

            {/* Блок 2 */}
            <section className="about__block">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.3 } }
                        }}
                    >
                        <motion.h3 className="about__block-title" variants={fadeInUp}>
                            А что, если всё вокруг — не совсем то, чем кажется?
                        </motion.h3>
                        <motion.p className="about__block-text" variants={fadeInUp}>
                            Обычное дерево в парке, уголь в костре, вода в реке...<br/>
                            Мы привыкли к ним и проходим мимо.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Блок 3 */}
            <section className="about__block">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.3 } }
                        }}
                    >
                        <motion.h3 className="about__block-title" variants={fadeInUp}>
                            Наша компания родилась из желания заглянуть глубже.
                        </motion.h3>
                        <motion.p className="about__block-text" variants={fadeInUp}>
                            Мы верим, что в самых простых вещах спрятаны<br/>
                            удивительные возможности.
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AboutCompany;
