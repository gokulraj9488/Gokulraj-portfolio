import React, { Suspense, useEffect, useState } from "react";
// Import THREE for the LoopRepeat constant
import * as THREE from 'three'; 
// Import useFrame from @react-three/fiber for continuous updates
import { Canvas, useFrame } from "@react-three/fiber";
// Import useAnimations from @react-three/drei
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Assuming this path is correct

const Computers = ({ isMobile }) => {
  // Destructure scene and animations from useGLTF
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  
  // Use useAnimations to get the mixer, actions, and the ref
  const { ref, mixer, actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      
      // 1. Set the loop mode to repeat indefinitely (LoopRepeat)
      action.setLoop(THREE.LoopRepeat, Infinity);
      
      // 2. Play the animation automatically
      action.play();
    }
  }, [actions, names]); 

  // 3. Update the animation mixer on every frame using useFrame
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* SPOT LIGHT: Repositioned to be closer and slightly above/in front of the model */}
      <spotLight
        // Updated position from [-20, 50, 10] to [5, 10, 5] 
        // This places it closer to the origin (where the object is centered)
        // [X: slightly right, Y: higher up, Z: slightly forward/closer]
        position={[5, 30, 5]} 
        angle={0.12}
        penumbra={1}
        intensity={8}
        castShadow
        shadow-mapSize={1024}
      />
      {/* POINT LIGHT: Repositioned to provide ambient front/side illumination */}
      <pointLight 
        intensity={5} 
        // Updated position from [0, 0, 0] to [-5, 5, 0]
        // This places it to the left, slightly up, and near the object's center
        position={[-15, 15, 0]}
      />
      <primitive
        // 4. Attach the ref to the primitive/scene object
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
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // 🚀 THE CRITICAL FIX: Change 'demand' to 'always' to enable continuous rendering
      frameloop='always' 
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
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