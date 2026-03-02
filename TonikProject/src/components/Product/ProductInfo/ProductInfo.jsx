import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './ProductInfo.css';

const AhnfeltiaModelInfo = () => {
    const { scene } = useGLTF(
        new URL('../../../assets/Image/Ahnfeltia_Red.glb', import.meta.url).href
    );
    const cloned = useMemo(() => scene.clone(), [scene]);
    return (
        <primitive
            object={cloned}
            scale={1.2}
            position={[0, -1.5, 0]}
        />
    );
};

export const ProductInfo = () => {
    return (
        <section className="ProductInfo">
            <div className="ProductInfo_inner">

                {/* ===== DESKTOP верстка (скрывается на моб/планшет) ===== */}
                <div className="ProductInfo_left ProductInfo_desktop">
                    <h2 className="ProductInfo_title">
                        Что такое<br />Анфельция?
                    </h2>
                </div>

                <div className="ProductInfo_model ProductInfo_desktop">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[5, 3, 5]} intensity={1.5} />
                            <pointLight position={[-5, -3, -5]} intensity={0.3} />
                            <AhnfeltiaModelInfo />
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="ProductInfo_right ProductInfo_desktop">
                    <p className="ProductInfo_text">
                        Это красная водоросль, которая появилась
                        на Планете задолго до того, как человек научился лечить.
                    </p>
                    <p className="ProductInfo_text">
                        Она вобрала в себя силу стихий, минералов
                        и первозданного солнца. Её клеточная структура несёт в себе память о жизни в чистом виде.
                    </p>
                </div>

                {/* ===== MOBILE / TABLET верстка (скрывается на десктопе) ===== */}
                <div className="ProductInfo_adaptive">

                    {/* 3D модель — абсолютный фон */}
                    <div className="ProductInfo_adaptive_model">
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={1.2} />
                                <directionalLight position={[5, 3, 5]} intensity={1.5} />
                                <pointLight position={[-5, -3, -5]} intensity={0.3} />
                                <AhnfeltiaModelInfo />
                                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* Контент поверх */}
                    <div className="ProductInfo_adaptive_content">
                        <h2 className="ProductInfo_title">
                            Что такое Анфельция?
                        </h2>
                        <div className="ProductInfo_content">
                        <p className="ProductInfo_text">
                            Это красная водоросль, которая появилась
                            на Планете задолго до того, как человек научился лечить.
                        </p>
                        <p className="ProductInfo_text">
                            Она вобрала в себя силу стихий, минералов
                            и первозданного солнца. Её клеточная структура несёт в себе память о жизни в чистом виде.
                        </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

