import React, { Suspense, useEffect, useState } from "react";
// Import THREE for the LoopRepeat constant
import * as THREE from 'three'; 
// UPDATED IMPORT: Include useThree
import { Canvas, useFrame, useThree } from "@react-three/fiber"; 
// Import useAnimations from @react-three/drei
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Assuming this path is correct

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const { ref, mixer, actions, names } = useAnimations(animations, scene);

  // Get the invalidate function to force rendering on demand
  const { invalidate } = useThree(); 

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      action.setLoop(THREE.LoopRepeat, Infinity);
      
      // Setting timeScale to 1.0 ensures animation runs at normal speed
      mixer.timeScale = 1.0; 
      action.play();
    }
  }, [actions, names, mixer]); 
  
  useFrame((state, delta) => {
    // 1. Update the animation mixer
    mixer.update(delta);
    
    // 2. CRITICAL FIX: Force a render update (required when frameloop='demand')
    invalidate(); 
  });

  return (
    <mesh>
      {/* Lights optimized for visibility and performance */}
      <ambientLight intensity={3} /> 
      <spotLight
        position={[5, 10, 5]} 
        angle={0.12}
        penumbra={1}
        intensity={2} 
        castShadow
        shadow-mapSize={512} 
      />
      <pointLight 
        intensity={1} 
        position={[-5, 5, 0]}
      />
      
      <primitive
        ref={ref} 
        object={scene}
        scale={isMobile ? 0.0012 : 0.0015}
        position={isMobile ? [0, -2.2, -1.3] : [0, -2, 0]}
        rotation={[0, -250, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // OPTIMIZED: Render only on 'demand' (Required for performance)
      frameloop='demand' 
      shadows
      dpr={[1, 1.5]} 
      camera={{ 
        position: [20, 3, 5], 
        fov: 30, // Increased for visibility
        near: 0.1, 
        far: 1000, // Increased far clipping
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        // CRITICAL FIX: Set alpha to true to enable transparency
        alpha: true 
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // 🛑 CRITICAL FIX: Disable user-driven rotation entirely
          enableRotate={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;