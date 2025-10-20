import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float, // We will remove the usage of this component
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader"; // Assuming this path is correct

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // 🛑 FIX 1: Remove the Float component wrapper
    // The component below is now static, eliminating continuous physics calculations.
    <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.5} /> {/* 🟢 OPTIMIZATION: Increased ambient light for brightness */}
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} /> {/* 🟢 OPTIMIZATION: Added intensity */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
    // </Float> <-- Removed closing tag
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand' // Keep on demand, as there is no motion now
      // 🛑 FIX 2: Lower the max Device Pixel Ratio (DPR) for performance
      dpr={[1, 1.5]}
      // 🛑 FIX 3: Apply antialias for smoother edges at lower resolution
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          // 🛑 FIX 4: Disable rotation to prevent manual dragging from consuming resources
          enableRotate={false} 
        /> 
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
