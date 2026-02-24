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
            scale={1}
            position={[0, 0, 0]}
        />
    );
};

export const ProductInfo = () => {
    return (
        <section className="ProductInfo">
            <div className="ProductInfo_inner">

                {/* Левый блок — заголовок */}
                <div className="ProductInfo_left">
                    <h2 className="ProductInfo_title">
                        Что такое<br />Анфельция?
                    </h2>
                </div>

                {/* Центр — 3D модель */}
                <div className="ProductInfo_model">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[5, 3, 5]} intensity={1.5} />
                            <pointLight position={[-5, -3, -5]} intensity={0.3} />
                            <AhnfeltiaModelInfo />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                autoRotate
                                autoRotateSpeed={1.5}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Правый блок — текст */}
                <div className="ProductInfo_right">
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
        </section>
    );
};
