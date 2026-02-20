import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './TonicsSeoText.css';

const TonicsSeoText = () => {
    const [activeScene, setActiveScene] = useState(0);
    const [activeCard, setActiveCard] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const isTransitioning = useRef(false);

    const scenes = [
        { id: 0, title: 'Что такое тоники', shortTitle: 'Что такое тоники' },
        { id: 1, title: 'Почему мы называем их реликтовыми?', shortTitle: 'Реликтовые вещества' },
        { id: 2, title: 'Области применения', shortTitle: 'Применение' },
    ];

    const scene0Content = [
        'Тоники Жизни — это не просто БАД или природный концентрат.',
        'Это реликтовые творения самой Земли — древние, живые субстанции, в которых сохранилась первозданная память о том, как устроена жизнь.',
        'Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях.',
        'Тоники Жизни — это не просто БАД или природный концентрат.',
        'Это реликтовые творения самой Земли — древние, живые субстанции, в которых сохранилась первозданная память о том, как устроена жизнь.',
        'Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях.',
        'Тоники Жизни — это не просто БАД или природный концентрат.',
        'Это реликтовые творения самой Земли — древние, живые субстанции, в которых сохранилась первозданная память о том, как устроена жизнь.',
        'Они действуют тонко, но глубоко: на клеточном, энергетическом и структурном уровнях.',
    ];

    const scene1Text = `Потому что это вещества, происхождение которых уходит корнями в глубины геологического времени.\n\nОни несут в себе информацию о первозданных настройках клетки — о том, какой она должна быть в идеале: здоровой, сильной, способной к саморегуляции и восстановлению.\n\nИменно к этим настройкам и стремится тело, получая «инструкцию» от Тоников.`;

    const cards = [
        { id: 1, title: 'Промышленность', description: 'Применение тоников в промышленных процессах для повышения эффективности и снижения воздействия на окружающую среду.', rotation: 0 },
        { id: 2, title: 'Сельское хозяйство', description: 'Использование реликтовых субстанций для восстановления почв и повышения урожайности без химических удобрений.', rotation: 3 },
        { id: 3, title: 'Косметика', description: 'Природные компоненты тоников в составе косметических средств для глубокого восстановления кожи.', rotation: 6 },
        { id: 4, title: 'Медицина', description: 'Реликтовые вещества как основа для разработки новых терапевтических подходов и восстановительных методик.', rotation: 9 },
        { id: 5, title: 'Ботаника', description: 'Влияние тоников на рост и развитие растений, восстановление природных экосистем.', rotation: 12 },
    ];

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 767);
            setIsTablet(width >= 768 && width <= 1024);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const totalScenes = scenes.length;
    const progressPercentage = ((activeScene + 1) / totalScenes) * 100;

    const goToScene = (index) => {
        if (!isTransitioning.current && activeScene !== index) {
            isTransitioning.current = true;
            setActiveScene(index);
            setActiveCard(0);
            setTimeout(() => { isTransitioning.current = false; }, 800);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedUp: () => {
            if (!isTransitioning.current && activeScene < totalScenes - 1) goToScene(activeScene + 1);
        },
        onSwipedDown: () => {
            if (!isTransitioning.current && activeScene > 0) goToScene(activeScene - 1);
        },
        trackMouse: true,
        preventScrollOnSwipe: isMobile || isTablet,
        delta: 50,
        swipeDuration: 500,
        touchEventOptions: { passive: false },
    });

    const handleWheel = (e) => {
        if (isTransitioning.current || isMobile || isTablet) return;
        if (e.deltaY > 0 && activeScene < totalScenes - 1) goToScene(activeScene + 1);
        else if (e.deltaY < 0 && activeScene > 0) goToScene(activeScene - 1);
    };

    const handleCardClick = (index) => {
        if (index !== activeCard) setActiveCard(index);
    };

    const CardsBlock = () => (
        <div className="TonicsSeoText_cards">
            <div className="TonicsSeoText_cards-stack">
                <AnimatePresence mode="popLayout">
                    {cards.map((card, index) =>
                            index === activeCard && (
                                <motion.div
                                    key={card.id}
                                    className="TonicsSeoText_card"
                                    onClick={() => handleCardClick((index + 1) % cards.length)}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h3 className="TonicsSeoText_card-title">{card.title}</h3>
                                    <div className="TonicsSeoText_card-lines">
                                        {Array.from({ length: card.id }).map((_, i) => (
                                            <div key={i} className="TonicsSeoText_card-line" />
                                        ))}
                                    </div>
                                    <p className="TonicsSeoText_card-description">{card.description}</p>
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
                <div className="TonicsSeoText_cards-background">
                    {cards.map((card, index) =>
                            index !== activeCard && (
                                <div
                                    key={`bg-${card.id}`}
                                    className="TonicsSeoText_card TonicsSeoText_card--background"
                                    style={{
                                        zIndex: cards.length - Math.abs(index - activeCard),
                                        transform: `translateX(${(index - activeCard) * 1.5}vw) translateY(${Math.abs(index - activeCard) * 0.5}vw) rotate(${card.rotation}deg)`,
                                    }}
                                >
                                    <h3 className="TonicsSeoText_card-title">{card.title}</h3>
                                    <div className="TonicsSeoText_card-lines">
                                        {Array.from({ length: card.id }).map((_, i) => (
                                            <div key={i} className="TonicsSeoText_card-line" />
                                        ))}
                                    </div>
                                    <p className="TonicsSeoText_card-description">{card.description}</p>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section
            {...swipeHandlers}
            className={`TonicsSeoText_section ${isMobile ? 'TonicsSeoText_section--mobile' : ''} ${isTablet ? 'TonicsSeoText_section--tablet' : ''}`}
            onWheel={handleWheel}
        >
            <div className="container">
                <div className="TonicsSeoText_wrapper">

                    {/* ===== DESKTOP ===== */}
                    {!isMobile && !isTablet ? (
                        <>
                            <div className="TonicsSeoText_left">
                                <div className="TonicsSeoText_progress-bar">
                                    <div className="TonicsSeoText_progress-track" />
                                    <motion.div
                                        className="TonicsSeoText_progress-fill"
                                        animate={{ height: `${progressPercentage}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                                <div className="TonicsSeoText_titles">
                                    {scenes.map((scene) => (
                                        <div
                                            key={scene.id}
                                            className="TonicsSeoText_title-section"
                                            onClick={() => goToScene(scene.id)}
                                        >
                                            <motion.h2
                                                className="TonicsSeoText_title"
                                                animate={{
                                                    opacity: activeScene === scene.id ? 1 : 0.4,
                                                    filter: activeScene === scene.id ? 'blur(0px)' : 'blur(0.52vw)',
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {scene.title}
                                            </motion.h2>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="TonicsSeoText_right">
                                <AnimatePresence mode="wait">

                                    {/* Десктоп — все строки без ограничений */}
                                    {activeScene === 0 && (
                                        <motion.div
                                            key="scene0"
                                            className="TonicsSeoText_content"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {scene0Content.map((line, i) => (
                                                <p key={i} className="TonicsSeoText_text">{line}</p>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeScene === 1 && (
                                        <motion.div
                                            key="scene1"
                                            className="TonicsSeoText_content"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <p className="TonicsSeoText_text">{scene1Text}</p>
                                        </motion.div>
                                    )}

                                    {activeScene === 2 && (
                                        <motion.div
                                            key="scene2"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <CardsBlock />
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </>
                    ) : (

                        /* ===== MOBILE / TABLET ===== */
                        <div className="TonicsSeoText_mobile-container">
                            <div className="TonicsSeoText_mobile-progress">
                                <div className="TonicsSeoText_mobile-progress-track" />
                                <motion.div
                                    className="TonicsSeoText_mobile-progress-fill"
                                    animate={{ height: `${progressPercentage}%` }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                />
                            </div>

                            <div className="TonicsSeoText_mobile-content">
                                {scenes.map((scene) => (
                                    <div key={scene.id}>
                                        <motion.h2
                                            className="TonicsSeoText_mobile-title"
                                            onClick={() => goToScene(scene.id)}
                                            animate={{
                                                opacity: activeScene === scene.id ? 1 : 0.4,
                                                filter: activeScene === scene.id ? 'blur(0px)' : 'blur(1.5vw)',
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {isTablet ? scene.title : scene.shortTitle}
                                        </motion.h2>

                                        <AnimatePresence mode="wait">
                                            {activeScene === scene.id && (
                                                <motion.div
                                                    key={`mobile-${scene.id}`}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {/* Мобайл/планшет — сцена 0: ограниченная высота + нативный скролл */}
                                                    {scene.id === 0 && (
                                                        <div className="TonicsSeoText_scroll-content">
                                                            {scene0Content.map((line, i) => (
                                                                <p key={i} className="TonicsSeoText_text">{line}</p>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {scene.id === 1 && (
                                                        <p className="TonicsSeoText_text">{scene1Text}</p>
                                                    )}

                                                    {scene.id === 2 && <CardsBlock />}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TonicsSeoText;
