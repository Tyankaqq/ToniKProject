import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const AhnfeltiaModel = () => {
    const { scene } = useGLTF(
        new URL('../../../assets/Image/Ahnfeltia_Red.glb', import.meta.url).href
    );
    const cloned = useMemo(() => scene.clone(), [scene]);
    return (
        <primitive
            object={cloned}
            scale={1}
            position={[0, -2, 0]}
        />
    );
};

const AhnfeltiaCanvas = () => {
    return (
        <div className="ProductHero_canvas">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[5, 3, 5]} intensity={1.5} />
                    <pointLight position={[-5, -3, -5]} intensity={0.3} />
                    <AhnfeltiaModel />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default AhnfeltiaCanvas;
