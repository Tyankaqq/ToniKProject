import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const EarthModel = () => {
    const { scene } = useGLTF(
        new URL('../../../assets/Image/Earth_New_1024.glb', import.meta.url).href
    );

    const cloned = useMemo(() => scene.clone(), [scene]);

    return (
        <primitive object={cloned} scale={10} position={[0, -10, 0]} />
    );
};

const EarthCanvas = () => {
    return (
        <div className="TonicsHero_canvas">
            <Canvas
                camera={{ position: [0, -1, 20], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[5, 3, 5]} intensity={0.8} />
                    <pointLight position={[-5, -3, -5]} intensity={0.2} />
                    <EarthModel />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />
                </Suspense>
            </Canvas>
            <div className="TonicsHero_canvas_overlay" />
        </div>
    );
};

export default EarthCanvas;
