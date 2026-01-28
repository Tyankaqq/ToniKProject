import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './OurGoals.css';

const OurGoals = () => {
    const [activeScene, setActiveScene] = useState(0);
    const [activeCard, setActiveCard] = useState(0);
    const [textAlignment, setTextAlignment] = useState('flex-start');
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const isTransitioning = useRef(false);
    const textRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: 'Новая энергия',
            description: 'Создать доступный и неиссякаемый источник энергии, который будет безопасным для планеты.',
            rotation: 0
        },
        {
            id: 2,
            title: 'Технологии будущего',
            description: 'Разработать принципиально новые способы передвижения, которые сотрут границы расстояний.',
            rotation: 5
        },
        {
            id: 3,
            title: 'Экотранспорт',
            description: 'Создать по-настоящему безопасный и «умный» транспорт, который будет работать долго, не вредя окружающей среде.',
            rotation: 10
        }
    ];

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 767); // Только мобилка
            setIsTablet(width >= 768 && width <= 1024); // Только планшет
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    useEffect(() => {
        if (textRef.current && activeScene === 0 && !isMobile && !isTablet) {
            const textHeight = textRef.current.scrollHeight;
            const containerHeight = textRef.current.clientHeight;

            if (textHeight > containerHeight * 0.8) {
                setTextAlignment('flex-start');
            } else {
                setTextAlignment('center');
            }
        }
    }, [activeScene, isMobile, isTablet]);

    const swipeHandlers = useSwipeable({
        onSwipedUp: (eventData) => {
            if (!isTransitioning.current && activeScene === 0) {
                isTransitioning.current = true;
                setActiveScene(1);
                setTimeout(() => {
                    isTransitioning.current = false;
                }, 800);
            }
        },
        onSwipedDown: (eventData) => {
            if (!isTransitioning.current && activeScene === 1) {
                isTransitioning.current = true;
                setActiveScene(0);
                setTimeout(() => {
                    isTransitioning.current = false;
                }, 800);
            }
        },
        trackMouse: true,
        preventScrollOnSwipe: isMobile || isTablet,
        delta: 50,
        swipeDuration: 500,
        touchEventOptions: { passive: false }
    });

    const handleWheel = (e) => {
        if (isTransitioning.current || isMobile || isTablet) return;

        const delta = e.deltaY;

        if (delta > 0 && activeScene === 0) {
            isTransitioning.current = true;
            setActiveScene(1);
            setTimeout(() => {
                isTransitioning.current = false;
            }, 800);
        } else if (delta < 0 && activeScene === 1) {
            isTransitioning.current = true;
            setActiveScene(0);
            setTimeout(() => {
                isTransitioning.current = false;
            }, 800);
        }
    };

    const handleCardClick = (index) => {
        if (index !== activeCard) {
            setActiveCard(index);
        }
    };

    const handleSceneClick = (sceneIndex) => {
        if (!isTransitioning.current && activeScene !== sceneIndex) {
            isTransitioning.current = true;
            setActiveScene(sceneIndex);
            setTimeout(() => {
                isTransitioning.current = false;
            }, 800);
        }
    };

    const progressPercentage = activeScene === 0 ? 50 : 100;

    return (
        <section
            {...swipeHandlers}
            className={`goals-new ${isMobile ? 'goals-new--mobile' : ''} ${isTablet ? 'goals-new--tablet' : ''}`}
            onWheel={handleWheel}
        >
            <div className="container">
                <div className="goals-new__wrapper">
                    {/* Desktop версия */}
                    {!isMobile && !isTablet ? (
                        <>
                            <div className="goals-new__left">
                                <div className="goals-new__progress-bar">
                                    <div className="goals-new__progress-track"></div>
                                    <motion.div
                                        className="goals-new__progress-fill"
                                        animate={{ height: `${progressPercentage}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    ></motion.div>
                                </div>

                                <div className="goals-new__titles">
                                    <div className="goals-new__title-section goals-new__title-section--top">
                                        <motion.h2
                                            className="goals-new__title"
                                            animate={{
                                                opacity: activeScene === 0 ? 1 : 0.4,
                                                filter: activeScene === 0 ? 'blur(0px)' : 'blur(0.52vw)'
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            Наша миссия находить эти скрытые дары природы
                                        </motion.h2>
                                    </div>

                                    <div className="goals-new__title-section goals-new__title-section--bottom">
                                        <motion.h2
                                            className="goals-new__title"
                                            animate={{
                                                opacity: activeScene === 1 ? 1 : 0.4,
                                                filter: activeScene === 1 ? 'blur(0px)' : 'blur(0.52vw)'
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            Наши глобальные цели для светлого будущего
                                        </motion.h2>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="goals-new__right"
                                style={{ alignItems: activeScene === 0 ? textAlignment : 'center' }}
                            >
                                <AnimatePresence mode="wait">
                                    {activeScene === 0 ? (
                                        <motion.div
                                            key="mission-text"
                                            className="goals-new__content"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                                        >
                                            <p ref={textRef} className="goals-new__description">
                                                Мы ищем ценность там, где другие видят лишь отходы, и создаём будущее из того, что уже есть вокруг.
                                                {'\n'}Для нас это больше, чем бизнес. Это новый способ видеть мир.
                                                {'\n'}Мы хотим, чтобы жизнь была по-настоящему качественной и насыщенной в любом возрасте. Чтобы каждый мог реализовать себя и подарить миру что-то важное. И мы создаём для этого все условия, используя самые неожиданные ресурсы природы.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="cards"
                                            className="goals-new__cards"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                                        >
                                            <div className="goals-new__cards-stack">
                                                <AnimatePresence mode="popLayout">
                                                    {cards.map((card, index) => (
                                                        index === activeCard && (
                                                            <motion.div
                                                                key={card.id}
                                                                className="goal-card"
                                                                onClick={() => handleCardClick((index + 1) % cards.length)}
                                                                initial={{ opacity: 0, x: 100 }}
                                                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                                                exit={{ opacity: 0, x: -100 }}
                                                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <h3 className="goal-card__title">{card.title}</h3>
                                                                <div className="goal-card__lines">
                                                                    {Array.from({ length: card.id }).map((_, i) => (
                                                                        <div key={i} className="goal-card__line"></div>
                                                                    ))}
                                                                </div>
                                                                <p className="goal-card__description">{card.description}</p>
                                                            </motion.div>
                                                        )
                                                    ))}
                                                </AnimatePresence>

                                                <div className="goals-new__cards-background">
                                                    {cards.map((card, index) => (
                                                        index !== activeCard && (
                                                            <div
                                                                key={`bg-${card.id}`}
                                                                className="goal-card goal-card--background"
                                                                style={{
                                                                    zIndex: cards.length - Math.abs(index - activeCard),
                                                                    transform: `translateX(${(index - activeCard) * 1.5}vw) translateY(${Math.abs(index - activeCard) * 0.5}vw) rotate(${card.rotation}deg)`
                                                                }}
                                                            >
                                                                <h3 className="goal-card__title">{card.title}</h3>
                                                                <div className="goal-card__lines">
                                                                    {Array.from({ length: card.id }).map((_, i) => (
                                                                        <div key={i} className="goal-card__line"></div>
                                                                    ))}
                                                                </div>
                                                                <p className="goal-card__description">{card.description}</p>
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    ) : (
                        /* Mobile/Tablet версия */
                        <div className="goals-new__mobile-container">
                            {/* Прогресс-бар */}
                            <div className="goals-new__mobile-progress">
                                <div className="goals-new__mobile-progress-track"></div>
                                <motion.div
                                    className="goals-new__mobile-progress-fill"
                                    animate={{ height: `${progressPercentage}%` }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                ></motion.div>
                            </div>

                            {/* Контент с заголовками */}
                            <div className="goals-new__mobile-content-wrapper">
                                {/* Первый заголовок */}
                                <motion.h2
                                    className="goals-new__mobile-title"
                                    onClick={() => handleSceneClick(0)}
                                    animate={{
                                        opacity: activeScene === 0 ? 1 : 0.4,
                                        filter: activeScene === 0 ? 'blur(0px)' : 'blur(1.5vw)'
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* На планшете полный текст, на мобилке короткий */}
                                    {isTablet
                                        ? 'Наша миссия находить эти скрытые дары природы'
                                        : 'Наша миссия'
                                    }
                                </motion.h2>

                                {/* Контент первой сцены */}
                                <AnimatePresence mode="wait">
                                    {activeScene === 0 && (
                                        <motion.div
                                            key="mission-content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <p className="goals-new__description">
                                                Мы ищем ценность там, где другие видят лишь отходы, и создаём будущее из того, что уже есть вокруг.
                                                {'\n\n'}Для нас это больше, чем бизнес. Это новый способ видеть мир.
                                                {'\n\n'}Мы хотим, чтобы жизнь была по-настоящему качественной и насыщенной в любом возрасте. Чтобы каждый мог реализовать себя и подарить миру что-то важное. И мы создаём для этого все условия, используя самые неожиданные ресурсы природы.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Второй заголовок */}
                                <motion.h2
                                    className="goals-new__mobile-title"
                                    onClick={() => handleSceneClick(1)}
                                    animate={{
                                        opacity: activeScene === 1 ? 1 : 0.4,
                                        filter: activeScene === 1 ? 'blur(0px)' : 'blur(1.5vw)'
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* На планшете полный текст, на мобилке короткий */}
                                    {isTablet
                                        ? 'Наши глобальные цели для светлого будущего'
                                        : 'Наши большие цели'
                                    }
                                </motion.h2>

                                {/* Контент второй сцены */}
                                <AnimatePresence mode="wait">
                                    {activeScene === 1 && (
                                        <motion.div
                                            key="goals-content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="goals-new__cards"
                                        >
                                            <div className="goals-new__cards-stack">
                                                <AnimatePresence mode="popLayout">
                                                    {cards.map((card, index) => (
                                                        index === activeCard && (
                                                            <motion.div
                                                                key={card.id}
                                                                className="goal-card"
                                                                onClick={() => handleCardClick((index + 1) % cards.length)}
                                                                initial={{ opacity: 0, x: 100 }}
                                                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                                                exit={{ opacity: 0, x: -100 }}
                                                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <h3 className="goal-card__title">{card.title}</h3>
                                                                <div className="goal-card__lines">
                                                                    {Array.from({ length: card.id }).map((_, i) => (
                                                                        <div key={i} className="goal-card__line"></div>
                                                                    ))}
                                                                </div>
                                                                <p className="goal-card__description">{card.description}</p>
                                                            </motion.div>
                                                        )
                                                    ))}
                                                </AnimatePresence>

                                                <div className="goals-new__cards-background">
                                                    {cards.map((card, index) => (
                                                        index !== activeCard && (
                                                            <div
                                                                key={`bg-${card.id}`}
                                                                className="goal-card goal-card--background"
                                                                style={{
                                                                    zIndex: cards.length - Math.abs(index - activeCard),
                                                                    transform: `translateX(${(index - activeCard) * 1.5}vw) translateY(${Math.abs(index - activeCard) * 0.5}vw) rotate(${card.rotation}deg)`
                                                                }}
                                                            >
                                                                <h3 className="goal-card__title">{card.title}</h3>
                                                                <div className="goal-card__lines">
                                                                    {Array.from({ length: card.id }).map((_, i) => (
                                                                        <div key={i} className="goal-card__line"></div>
                                                                    ))}
                                                                </div>
                                                                <p className="goal-card__description">{card.description}</p>
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OurGoals;
