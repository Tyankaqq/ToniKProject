import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import './BlogArticle.css';
import WhatsAppIcon from '../../../assets/Image/WhLogo.svg';
import TelegramIcon from '../../../assets/Image/TgLogo.svg';
import VKIcon from '../../../assets/Image/VkLogo.svg';
import Pointer from '../../../assets/Image/Pointer.svg';
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

export const BlogArticle = ({ articleData }) => {
    const article = articleData || {
        id: 1,
        title: "НАЗВАНИЕ СТАТЬИ",
        description: "Описание описание описание описание",
        author: "Автор Иванов Иван",
        date: "Дата публикации: 25.09.25",
        heroImage: "/images/blog-hero.jpg",
        sections: [
            {
                id: 1,
                title: "ЧТО ТАКОЕ ТОНИКИ?",
                content: "Тоники Жизни — это не просто БАД или природный концентрат. Это реликтовые творения самой Земли — древние, живые субстанции, в которых сохранилась первозданная память о том, как устроена жизнь. Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях.",
                // Добавляем короткую версию для мобилки (3 предложения)
                shortContent: [
                    "Тоники Жизни — это не просто БАД или природный концентрат.",
                    "Это реликтовые творения самой Земли — древние, живые субстанции.",
                    "Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях."
                ]
            },
            {
                id: 2,
                title: "ВТОРОЙ ЗАГОЛОВОК",
                content: "Второй блок текста. Тоники Жизни — это не просто БАД или природный концентрат. Это реликтовые творения самой Земли — древние, живые субстанции.",
                shortContent: [
                    "Второй блок текста первое предложение.",
                    "Второй блок текста второе предложение.",
                    "Второй блок текста третье предложение."
                ]
            },
            {
                id: 3,
                title: "ТРЕТИЙ ЗАГОЛОВОК",
                content: "Третий блок текста. Тоники Жизни — это не просто БАД или природный концентрат. Это реликтовые творения самой Земли — древние, живые субстанции.",
                shortContent: [
                    "Третий блок текста первое предложение.",
                    "Третий блок текста второе предложение.",
                    "Третий блок текста третье предложение."
                ]
            },
            {
                id: 4,
                title: "ЧЕТВЕРТЫЙ ЗАГОЛОВОК",
                content: "Четвертый блок текста. Тоники Жизни — это не просто БАД или природный концентрат. Это реликтовые творения самой Земли — древние, живые субстанции.",
                shortContent: [
                    "Четвертый блок текста первое предложение.",
                    "Четвертый блок текста второе предложение.",
                    "Четвертый блок текста третье предложение."
                ]
            },
            {
                id: 5,
                title: "ПЯТЫЙ ЗАГОЛОВОК",
                content: "Пятый блок текста. Тоники Жизни — это не просто БАД или природный концентрат. Это реликтовые творения самой Земли — древние, живые субстанции.",
                shortContent: [
                    "Пятый блок текста первое предложение.",
                    "Пятый блок текста второе предложение.",
                    "Пятый блок текста третье предложение."
                ]
            }
        ],
        relatedArticles: [
            { id: 1, title: "Название статьи 1", excerpt: "Текст...", date: "16 июля 2025", image: "/images/blog-6.jpg" },
            { id: 2, title: "Название статьи 2", excerpt: "Текст...", date: "16 июля 2025", image: "/images/blog-7.jpg" },
            { id: 3, title: "Название статьи 3", excerpt: "Текст...", date: "16 июля 2025", image: "/images/blog-8.jpg" }
        ]
    };

    const [activeScene, setActiveScene] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (isMobile) return;
        const sectionsCount = article.sections.length;
        const step = 1 / sectionsCount;
        const newIndex = Math.min(
            Math.floor(latest / step),
            sectionsCount - 1
        );
        if (newIndex !== activeScene) {
            setActiveScene(newIndex);
        }
    });

    const handleMobileClick = (index) => {
        setActiveScene(index);
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = article.title;
        switch(platform) {
            case 'whatsapp': window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`); break;
            case 'telegram': window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`); break;
            case 'vk': window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`); break;
            default: break;
        }
    };

    const progressPercentage = ((activeScene + 1) / article.sections.length) * 100;

    // Функция для получения контента в зависимости от устройства
    const getContent = (section) => {
        if (isMobile && section.shortContent) {
            return section.shortContent; // Массив из 3 предложений
        }
        return Array.isArray(section.content) ? section.content : [section.content];
    };

    return (
        <div className="BlogArticle">
            <div className="container">
                <Breadcrumbs />
            </div>

            {/* Hero Section */}
            <div className="container">
                <div className="BlogArticle_hero">
                    <img src={article.heroImage} alt={article.title} className="BlogArticle_hero_image" />
                    <div className="BlogArticle_hero_overlay">
                        <div className="BlogArticle_hero_content">
                            <h1 className="BlogArticle_hero_title">{article.title}</h1>
                            <p className="BlogArticle_hero_description">{article.description}</p>
                        </div>
                        <div className="BlogArticle_hero_meta">
                            <p className="BlogArticle_hero_author">{article.author}</p>
                            <p className="BlogArticle_hero_date">{article.date}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ОСНОВНОЙ КОНТЕНТ */}
            {!isMobile ? (
                // --- DESKTOP VERSION (Sticky Scroll) ---
                <div ref={targetRef} className="BlogArticle_scroll_container">
                    <div className="BlogArticle_sticky_wrapper">
                        <section className="BlogArticle_scenes">
                            <div className="container" style={{ height: '100%' }}>
                                <div className="BlogArticle_scenes_wrapper">

                                    <div className="BlogArticle_scenes_left">
                                        <div className="BlogArticle_scenes_progress_bar">
                                            <div className="BlogArticle_scenes_progress_track"></div>
                                            <motion.div
                                                className="BlogArticle_scenes_progress_fill"
                                                animate={{ height: `${progressPercentage}%` }}
                                                transition={{ duration: 0.2, ease: "linear" }}
                                            ></motion.div>
                                        </div>

                                        <div className="BlogArticle_scenes_titles">
                                            {article.sections.map((section, index) => (
                                                <div key={section.id} className="BlogArticle_scenes_title_section">
                                                    <motion.h2
                                                        className="BlogArticle_scenes_title"
                                                        animate={{
                                                            opacity: activeScene === index ? 1 : 0.4,
                                                            filter: activeScene === index ? 'blur(0px)' : 'blur(0.52vw)'
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                        onClick={() => {
                                                            const container = targetRef.current;
                                                            if(container) {
                                                                const sectionHeight = container.scrollHeight / article.sections.length;
                                                                window.scrollTo({
                                                                    top: container.offsetTop + (sectionHeight * index) + 10,
                                                                    behavior: 'smooth'
                                                                });
                                                            }
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        {section.title}
                                                    </motion.h2>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="BlogArticle_scenes_right">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeScene}
                                                className="BlogArticle_scenes_content"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -15 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                            >
                                                <div className="BlogArticle_scenes_paragraphs">
                                                    {getContent(article.sections[activeScene]).map((p, i) => (
                                                        <p key={i} className="BlogArticle_scenes_description">{p}</p>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                // --- MOBILE / TABLET VERSION (Accordion) ---
                <section className="BlogArticle_scenes BlogArticle_scenes--mobile">

                        <div className="BlogArticle_scenes_wrapper">
                            <div className="BlogArticle_scenes_mobile_container">

                                <div className="BlogArticle_scenes_mobile_progress">
                                    <div className="BlogArticle_scenes_mobile_progress_track"></div>
                                    <motion.div
                                        className="BlogArticle_scenes_mobile_progress_fill"
                                        animate={{ height: `${progressPercentage}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    ></motion.div>
                                </div>

                                <div className="BlogArticle_scenes_mobile_content_wrapper">
                                    {article.sections.map((section, index) => (
                                        <div key={section.id}>
                                            <motion.h2
                                                className="BlogArticle_scenes_mobile_title"
                                                onClick={() => handleMobileClick(index)}
                                                animate={{
                                                    opacity: activeScene === index ? 1 : 0.4,
                                                    filter: activeScene === index ? 'blur(0px)' : 'blur(1.5vw)'
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {section.title}
                                            </motion.h2>

                                            <AnimatePresence mode="wait">
                                                {activeScene === index && (
                                                    <motion.div
                                                        key={`content-${index}`}
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <div className="BlogArticle_scenes_paragraphs">
                                                            {/* Выводим только 3 предложения для мобилки */}
                                                            {getContent(section).map((paragraph, pIndex) => (
                                                                <p key={pIndex} className="BlogArticle_scenes_description">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                </section>
            )}

            {/* Share */}
            <div className="container">
                <div className="BlogArticle_share">
                    <p className="BlogArticle_share_text">Поделиться статьей:</p>
                    <div className="BlogArticle_share_icons">
                        <button onClick={() => handleShare('whatsapp')} className="BlogArticle_share_icon"><img src={WhatsAppIcon} alt="WhatsApp" /></button>
                        <button onClick={() => handleShare('telegram')} className="BlogArticle_share_icon"><img src={TelegramIcon} alt="Telegram" /></button>
                        <button onClick={() => handleShare('vk')} className="BlogArticle_share_icon"><img src={VKIcon} alt="VK" /></button>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div className="container">
                <div className="BlogArticle_related">
                    <div className="BlogArticle_related_header">
                        <h2 className="BlogArticle_related_title">СТАТЬИ</h2>
                        <a href="/blog" className="BlogArticle_all_articles_link">ВСЕ СТАТЬИ <img src={Pointer} alt="" /></a>
                    </div>
                    <div className="BlogArticle_related_grid">
                        {article.relatedArticles.map((relArticle, index) => (
                            <a
                                key={relArticle.id}
                                href={`/blog/${relArticle.id}`}
                                className={`BlogArticle_related_card ${index === 0 ? 'large' : 'medium'}`}
                            >
                                <div className="BlogArticle_related_card_image_wrapper">
                                    <img src={relArticle.image} alt={relArticle.title} className="BlogArticle_related_card_image" />

                                    {/* OVERLAY С КНОПКОЙ */}
                                    <div className="BlogArticle_related_card_overlay">
                                        <span className="BlogArticle_related_card_tag">#РУБРИКА</span>
                                        <button className="BlogArticle_related_card_btn" type="button">
                                            читать статью <img src={Pointer} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="BlogArticle_related_card_content">
                                    <p className="BlogArticle_related_card_date">{relArticle.date}</p>
                                    <h3 className="BlogArticle_related_card_title">{relArticle.title}</h3>
                                    <p className="BlogArticle_related_card_excerpt">{relArticle.excerpt}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArticle;
