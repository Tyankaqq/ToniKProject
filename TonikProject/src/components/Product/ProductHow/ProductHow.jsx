import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './ProductHow.css';

const AhnfeltiaModelHow = () => {
    const { scene } = useGLTF(
        new URL('../../../assets/Image/Ahnfeltia_Red.glb', import.meta.url).href
    );
    const cloned = useMemo(() => scene.clone(true), [scene]);
    return (
        <primitive
            object={cloned}
            scale={1.2}
            position={[0, -1.5, 0]}
        />
    );
};

export const ProductHow = () => {
    return (
        <section className="ProductHow">
            <div className="ProductHow_inner">

                {/* ===== DESKTOP ===== */}
                <div className="ProductHow_left ProductHow_desktop">
                    <h2 className="ProductHow_title">
                        Как она действует?
                    </h2>
                </div>

                <div className="ProductHow_model ProductHow_desktop">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[5, 3, 5]} intensity={1.5} />
                            <pointLight position={[-5, -3, -5]} intensity={0.3} />
                            <AhnfeltiaModelHow />
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="ProductHow_right ProductHow_desktop">
                    <p className="ProductHow_text">
                        Мы не говорим «лечит». Мы говорим: организм вспоминает. Организм — сложная система.
                    </p>
                    <p className="ProductHow_text">
                        И в нем есть всё, чтобы быть здоровым.
                        Иногда нужно просто напомнить.
                    </p>
                </div>

                {/* ===== MOBILE / TABLET ===== */}
                <div className="ProductHow_adaptive">

                    <div className="ProductHow_adaptive_model">
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={1.2} />
                                <directionalLight position={[5, 3, 5]} intensity={1.5} />
                                <pointLight position={[-5, -3, -5]} intensity={0.3} />
                                <AhnfeltiaModelHow />
                                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="ProductHow_adaptive_content">
                        <h2 className="ProductHow_title">
                            Как она действует?
                        </h2>
                        <div className="ProductHow_content">
                        <p className="ProductHow_text">
                            Мы не говорим «лечит». Мы говорим: организм вспоминает. Организм — сложная система.
                        </p>
                        <p className="ProductHow_text">
                            И в нем есть всё, чтобы быть здоровым.
                            Иногда нужно просто напомнить.
                        </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

