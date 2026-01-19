import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mockData } from '../../../data/data.js';
import { Button } from '../Button/Button.jsx';
import heroVideo from '../../../assets/videos/hero-video.mp4';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const { hero } = mockData;
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const spacerRef = useRef(null);

    const desktopContainerRef = useRef(null);
    const desktopTitleLeftRef = useRef(null);
    const desktopTitleRightRef = useRef(null);
    const desktopSubtitleRef = useRef(null);
    const desktopButtonsRef = useRef(null);

    const mobileContainerRef = useRef(null);
    const mobileTextRef = useRef(null);
    const mobileButtonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // ДЕСКТОП
            mm.add("(min-width: 1200px)", () => {
                const scrollConfig = {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=150%',
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true
                };

                gsap.set(videoRef.current, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0,
                    borderRadius: 0
                });

                gsap.set(desktopContainerRef.current, { opacity: 1 });
                gsap.set([desktopTitleLeftRef.current, desktopTitleRightRef.current], {
                    x: (i) => i === 0 ? '-50vw' : '50vw',
                    opacity: 0
                });
                gsap.set([desktopSubtitleRef.current, desktopButtonsRef.current], {
                    y: 100,
                    opacity: 0
                });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                // Анимация видео с translate(-48px, 50px)
                tl.to(videoRef.current, {
                    width: '44.27vw',
                    height: '24.74vw',
                    x: '15px',  // translate X
                    y: '50px',   // translate Y
                    top: () => {
                        const spacerRect = spacerRef.current.getBoundingClientRect();
                        const sectionRect = sectionRef.current.getBoundingClientRect();
                        return spacerRect.top - sectionRect.top + spacerRect.height / 2;
                    },
                    left: () => {
                        const spacerRect = spacerRef.current.getBoundingClientRect();
                        const sectionRect = sectionRef.current.getBoundingClientRect();
                        return spacerRect.left - sectionRect.left + spacerRect.width / 2;
                    },
                    xPercent: -50,
                    yPercent: -50,
                    duration: 1,
                    ease: 'power2.inOut'
                }, 0);

                // Левый заголовок (ТОНИК)
                tl.to(desktopTitleLeftRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8
                }, 0.2);

                // Правый заголовок (ЖИЗНИ) с translate(20px, 0px)
                tl.to(desktopTitleRightRef.current, {
                    x: '20px',
                    y: '0px',
                    xPercent: 0,
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8
                }, 0.2);

                // Подзаголовок и кнопки
                tl.to([desktopSubtitleRef.current, desktopButtonsRef.current], {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, 0.3);
            });


            // ПЛАНШЕТ
            // ПЛАНШЕТ (768px - 1199px)
            mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
                const scrollConfig = {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=80%',
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true
                };

                // Начальное состояние: видео на весь экран сверху
                gsap.set(videoRef.current, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    xPercent: 0,
                    yPercent: 0,
                    width: '100vw',
                    height: '100vh'
                });

                gsap.set(mobileContainerRef.current, { opacity: 1 });
                gsap.set([mobileTextRef.current, mobileButtonsRef.current], {
                    y: 50,
                    opacity: 0
                });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                // Анимация видео: уменьшение и позиционирование
                tl.to(videoRef.current, {
                    width: '70.83vw',
                    height: '91.02vw',
                    top: '10.42vw',  // Отступ сверху
                    left: '50%',
                    xPercent: -50,
                    yPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                }, 0);

                // Появление текста и кнопок
                tl.to([mobileTextRef.current, mobileButtonsRef.current], {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, 0.3);
            });


            // МОБИЛЬНЫЙ
            // МОБИЛЬНЫЙ
            mm.add("(max-width: 767px)", () => {
                const scrollConfig = {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=60%',
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true
                };

                gsap.set(videoRef.current, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    xPercent: 0,
                    yPercent: 0,
                    width: '100vw',
                    height: '100vh'
                });

                gsap.set(mobileContainerRef.current, { opacity: 1 });
                gsap.set([mobileTextRef.current, mobileButtonsRef.current], {
                    y: 50,
                    opacity: 0
                });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                tl.to(videoRef.current, {
                    width: '88.89vw',      // 320px
                    height: '91.94vw',     // 331px
                    top: '22.22vw',        // 80px отступ сверху
                    left: '50%',           // Центрируем
                    xPercent: -50,         // Центрируем
                    yPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                }, 0);

                tl.to([mobileTextRef.current, mobileButtonsRef.current], {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, 0.3);
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="Hero_section" ref={sectionRef}>
            <div className="Hero_videoFloating" ref={videoRef}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="Hero_videoFloatingVideo"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="Hero_videoFloatingOverlay"></div>
            </div>

            <div className="Hero_content">
                <div className="Hero_desktop" ref={desktopContainerRef}>
                    <div className="Hero_title_wrapper">
                        <h1 className="Hero_title Hero_title--left" ref={desktopTitleLeftRef}>{hero.titleLeft}</h1>
                        <div className="Hero_image_container" ref={spacerRef}></div>
                        <h1 className="Hero_title Hero_title--right" ref={desktopTitleRightRef}>{hero.titleRight}</h1>
                    </div>
                    <div ref={desktopSubtitleRef}>
                        <p className="Hero_subtitle">{hero.subtitle}</p>
                    </div>
                    <div className="Hero_buttons" ref={desktopButtonsRef}>
                        <Button variant="primary" onClick={() => window.location.href = '/catalog'}>
                            {hero.buttons[0].text}
                        </Button>
                        <Button variant="outline" onClick={() => window.open('https://t.me/tonik_jizni', '_blank')}>
                            {hero.buttons[1].text}
                        </Button>
                    </div>
                </div>

                <div className="Hero_mobile" ref={mobileContainerRef}>
                    <div className="Hero_image_container"></div>
                    <div className="Hero_mobile_text" ref={mobileTextRef}>
                        <h1 className="Hero_mobile_title">{hero.titleLeft} {hero.titleRight}</h1>
                        <p className="Hero_mobile_subtitle">{hero.subtitle}</p>
                    </div>
                    <div className="Hero_mobile_buttons" ref={mobileButtonsRef}>
                        <Button variant="primary" onClick={() => window.location.href = '/catalog'}>
                            {hero.buttons[0].text}
                        </Button>
                        <Button variant="outline" onClick={() => window.open('https://t.me/tonik_jizni', '_blank')}>
                            {hero.buttons[1].text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
