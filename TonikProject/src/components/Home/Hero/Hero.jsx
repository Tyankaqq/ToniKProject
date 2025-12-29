import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mockData } from '../../../data/data.js';
import { Button } from '../Button/Button.jsx';
// import heroVideo from '../../../assets/videos/hero-video.mp4'; // Закомментировано
import heroImage from '../../../assets/Image/HeroImage.svg'; // ← НОВАЯ КАРТИНКА
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const { hero } = mockData;
    const sectionRef = useRef(null);
    const imageRef = useRef(null); // ← Переименовал с videoRef на imageRef

    // Refs
    const desktopContainerRef = useRef(null);
    const desktopTitleLeftRef = useRef(null);
    const desktopTitleRightRef = useRef(null);
    const desktopSubtitleRef = useRef(null);
    const desktopButtonsRef = useRef(null);
    const desktopImageTargetRef = useRef(null);

    const mobileContainerRef = useRef(null);
    const mobileTextRef = useRef(null);
    const mobileButtonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            const scrollConfig = {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=150%',
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true
            };

            // === DESKTOP (> 1200px) ===
            mm.add("(min-width: 1200px)", () => {
                gsap.set(imageRef.current, {
                    position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50,
                    width: '100vw', height: '100vh', borderRadius: 0, zIndex: 0
                });
                gsap.set(desktopContainerRef.current, { opacity: 1 });
                gsap.set([desktopTitleLeftRef.current, desktopTitleRightRef.current], { x: (i) => i === 0 ? '-50vw' : '50vw', opacity: 0 });
                gsap.set([desktopSubtitleRef.current, desktopButtonsRef.current], { y: 100, opacity: 0 });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                tl.to(imageRef.current, {
                    width: '30vw',
                    height: '16.7vw',
                    borderRadius: '0.3vw',
                    top: '40%', // ← Подгонка высоты
                    left: '49%', x: 0, y: 0,
                    duration: 1, ease: 'power2.inOut'
                }, 0);

                tl.to([desktopTitleLeftRef.current, desktopTitleRightRef.current], { x: 0, opacity: 1, duration: 0.8 }, 0.2);
                tl.to([desktopSubtitleRef.current, desktopButtonsRef.current], { y: 0, opacity: 1, duration: 0.8 }, 0.3);
            });

            // === TABLET (768px - 1199px) ===
            mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
                gsap.set(imageRef.current, {
                    position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50,
                    width: '100vw', height: '100vh', borderRadius: 0, zIndex: 0
                });
                gsap.set(desktopContainerRef.current, { opacity: 1 });
                gsap.set([desktopTitleLeftRef.current, desktopTitleRightRef.current], { x: (i) => i === 0 ? '-50vw' : '50vw', opacity: 0 });
                gsap.set([desktopSubtitleRef.current, desktopButtonsRef.current], { y: 100, opacity: 0 });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                tl.to(imageRef.current, {
                    width: '30vw',
                    height: '16.7vw',
                    borderRadius: '0.52vw',
                    top: '40%', // ← Подгонка высоты
                    left: '49%', x: 0, y: 0,
                    duration: 1, ease: 'power2.inOut'
                }, 0);

                tl.to([desktopTitleLeftRef.current, desktopTitleRightRef.current], { x: 0, opacity: 1, duration: 0.8 }, 0.2);
                tl.to([desktopSubtitleRef.current, desktopButtonsRef.current], { y: 0, opacity: 1, duration: 0.8 }, 0.3);
            });

            // === MOBILE (< 767px) ===
            mm.add("(max-width: 767px)", () => {
                gsap.set(imageRef.current, {
                    position: 'absolute', top: 0, left: 0, x: 0, y: 0, xPercent: 0, yPercent: 0,
                    width: '100vw', height: '100vh', borderRadius: 0
                });
                gsap.set(mobileContainerRef.current, { opacity: 1 });
                gsap.set([mobileTextRef.current, mobileButtonsRef.current], { y: 50, opacity: 0 });

                const tl = gsap.timeline({ scrollTrigger: scrollConfig });

                tl.to(imageRef.current, {
                    width: '100vw', height: '64.72vw', top: '22.22vw',
                    left: 0, x: 0, y: 0, borderRadius: 0,
                    duration: 1, ease: 'power2.inOut'
                }, 0);

                tl.to([mobileTextRef.current, mobileButtonsRef.current], { y: 0, opacity: 1, duration: 0.8 }, 0.3);
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="Hero_section" ref={sectionRef}>

            {/* ← КАРТИНКА ВМЕСТО ВИДЕО */}
            <div className="Hero_imageFloating" ref={imageRef}>
                <img
                    src={heroImage}
                    alt="Hero Image"
                    className="Hero_imageFloatingImg"
                />
                <div className="Hero_imageFloatingOverlay"></div>
            </div>

            <div className="Hero_content">
                <div className="Hero_desktop" ref={desktopContainerRef}>
                    <div className="Hero_title_wrapper">
                        <h1 className="Hero_title Hero_title--left" ref={desktopTitleLeftRef}>{hero.titleLeft}</h1>
                        <div className="Hero_image_container" ref={desktopImageTargetRef}></div>
                        <h1 className="Hero_title Hero_title--right" ref={desktopTitleRightRef}>{hero.titleRight}</h1>
                    </div>
                    <div ref={desktopSubtitleRef}>
                        <p className="Hero_subtitle">{hero.subtitle}</p>
                    </div>
                    <div className="Hero_buttons" ref={desktopButtonsRef}>
                        <Button
                            variant="primary"
                            onClick={() => window.location.href = '/catalog'}
                        >
                            {hero.buttons[0].text}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.open('https://t.me/le_bed_eva', '_blank')}
                        >
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
                        <Button
                            variant="primary"
                            onClick={() => window.location.href = '/catalog'}
                        >
                            {hero.buttons[0].text}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.open('https://t.me/le_bed_eva', '_blank')}
                        >
                            {hero.buttons[1].text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
