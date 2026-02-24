import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './ProductAction.css';

const AhnfeltiaModelAction = () => {
    const { scene } = useGLTF(
        new URL('../../../assets/Image/Ahnfeltia_Red.glb', import.meta.url).href
    );
    const cloned = useMemo(() => scene.clone(true), [scene]);
    return (
        <group position={[0, -2, 0]}>
            <primitive object={cloned} scale={1.5} />
        </group>
    );
};

export const ProductAction = () => {
    return (
        <section className="ProductAction">
            <div className="ProductAction_inner">

                {/* Левый блок — заголовок */}
                <div className="ProductAction_left">
                    <h2 className="ProductAction_title">
                        Анфельция – это не про обещание.<br />Это про отклик.
                    </h2>
                </div>

                {/* Центр — 3D модель */}
                <div className="ProductAction_model">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[5, 3, 5]} intensity={1.5} />
                            <pointLight position={[-5, -3, -5]} intensity={0.3} />
                            <AhnfeltiaModelAction />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                autoRotate
                                autoRotateSpeed={1.5}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Правый блок — список */}
                <div className="ProductAction_right">
                    <ul className="ProductAction_list">
                        <li className="ProductAction_list_item">
                            Помогает организму очищаться от токсинов, тяжёлых металлов и всего «лишнего»
                        </li>
                        <li className="ProductAction_list_item">
                            Насыщает клетки энергией и минералами, ускоряя метаболизм
                        </li>
                        <li className="ProductAction_list_item">
                            Поддерживает иммунитет, помогая телу быстрее восстанавливаться
                        </li>
                        <li className="ProductAction_list_item">
                            Нормализует гормональный фон и работу нервной системы
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};
