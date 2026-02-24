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
            scale={1}
            position={[0, -1.5, 0]}
        />
    );
};

export const ProductHow = () => {
    return (
        <section className="ProductHow">
            <div className="ProductHow_inner">

                {/* Левый блок — заголовок */}
                <div className="ProductHow_left">
                    <h2 className="ProductHow_title">
                        Как она<br />действует?
                    </h2>
                </div>

                {/* Центр — 3D модель */}
                <div className="ProductHow_model">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[5, 3, 5]} intensity={1.5} />
                            <pointLight position={[-5, -3, -5]} intensity={0.3} />
                            <AhnfeltiaModelHow />
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
                <div className="ProductHow_right">
                    <p className="ProductHow_text">
                        Мы не говорим «лечит». Мы говорим: организм вспоминает. Организм — сложная система.
                    </p>
                    <p className="ProductHow_text">
                        И в нем есть всё, чтобы быть здоровым.
                        Иногда нужно просто напомнить.
                    </p>
                </div>

            </div>
        </section>
    );
};
