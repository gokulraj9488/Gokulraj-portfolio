import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.8} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      // 🟢 OPTIMIZATION: Only render when necessary or when interacted with
      frameloop='demand' 
      // 🟢 OPTIMIZATION: Use optimized DPR cap
      dpr={[1, 1.5]}
      gl={{ 
        preserveDrawingBuffer: true,
        // 🟢 FIX: Ensure transparency to prevent black background overlap
        alpha: true 
      }} 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // 🛑 CRITICAL OPTIMIZATION: Disable continuous rotation
          autoRotate={false} 
          // 🛑 CRITICAL OPTIMIZATION: Disable rotation speed property (it's unused without autoRotate)
          // autoRotateSpeed={20} 
          enableZoom={false}
          // 🟢 ENABLE MANUAL ROTATION: Allow user to drag the model
          enableRotate={true} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;