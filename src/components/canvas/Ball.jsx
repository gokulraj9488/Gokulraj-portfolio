import React from "react";
// Removed: @react-three/fiber, @react-three/drei imports

// --- CSS Keyframes to simulate 3D floating effect ---
const styleSheet = `
    /* Custom Keyframes for the 2D floating effect (simulating the Float component) */
    @keyframes floating {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-6px) rotate(2deg); }
        100% { transform: translateY(0px) rotate(0deg); }
    }
    /* Adds a subtle glow/pulse to the shadow (simulating dynamic lighting) */
    @keyframes pulse-shadow {
        0% { box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.4); }
        50% { box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.7); }
        100% { box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.4); }
    }
`;

// --- 2D Ball component (replaces 3D Mesh Logic) ---
const Ball = (props) => {
    // 3D concepts (useTexture, mesh, icosahedronGeometry, Decal, Float) replaced with 2D styling
    return (
        // The container simulates the sphere and the Float component
        <div
            className="
                relative w-24 h-24 p-3
                rounded-full flex items-center justify-center
                bg-white/5 backdrop-blur-sm
                border border-white/10
                shadow-lg
                transition-transform duration-300 ease-in-out hover:scale-[1.05]
                cursor-pointer
            "
            style={{
                // Apply CSS animations to mimic the 3D float and lighting
                animation: 'floating 4s ease-in-out infinite, pulse-shadow 2s ease-in-out infinite',
            }}
        >
            {/* The image decal replaced with standard <img> tag */}
            <img
                src={props.imgUrl}
                alt="Skill Icon"
                className="w-14 h-14 object-contain"
                // Fallback for broken image URLs
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/60x60/6B7280/FFFFFF?text=Icon';
                    e.target.alt = 'Placeholder Icon';
                }}
            />
        </div>
    );
};

// --- 2D BallCanvas component (replaces Three.js Canvas Setup) ---
const BallCanvas = ({ icon }) => {
    return (
        // The container now just sets up the styles and renders the 2D Ball
        <div className="w-full h-full flex justify-center items-center">
            {/* Inject the keyframes needed for the animation */}
            <style>{styleSheet}</style>

            {/* Suspense, CanvasLoader, OrbitControls, Preload are removed */}
            <Ball imgUrl={icon} />
        </div>
    );
};

export default BallCanvas;
