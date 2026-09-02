'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeGlobe({ isDark }: { isDark: boolean }) {
  const globeRef = useRef<THREE.Group>(null!);
  const orbitRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * 0.4;
      orbitRef.current.rotation.y += delta * 0.2;
    }
  });

  const wireColor = isDark ? "#1C2921" : "#D1D5DB";
  const accentColor = "#3DDC84";

  return (
    <group scale={2.4} position={[0, -0.8, 0]}>
      {/* Outer Wireframe Sphere */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1.6, 24, 24]} />
          <meshBasicMaterial
            color={wireColor}
            wireframe={true}
            transparent={true}
            opacity={isDark ? 0.35 : 0.4}
          />
        </mesh>

        {/* Inner Lat/Long Core */}
        <mesh scale={0.99}>
          <sphereGeometry args={[1.6, 12, 12]} />
          <meshBasicMaterial
            color={accentColor}
            wireframe={true}
            transparent={true}
            opacity={0.15}
          />
        </mesh>
      </group>

      {/* Orbit Trajectory Arc & Dots */}
      <group ref={orbitRef} rotation={[0.4, 0.2, 0.6]}>
        <mesh>
          <torusGeometry args={[1.9, 0.008, 16, 100]} />
          <meshBasicMaterial color={accentColor} transparent opacity={0.8} />
        </mesh>

        {/* Orbit Target Dots */}
        <mesh position={[1.9, 0, 0]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>
        <mesh position={[1.82, 0.25, 0]}>
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>
      </group>
    </group>
  );
}

export default function FooterGlobe({ isDark = true }: { isDark?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-h-[300px]" />;

  return (
    <div className="w-full h-[320px] md:h-[420px] absolute inset-x-0 bottom-0 pointer-events-none z-0 flex items-center justify-center opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <WireframeGlobe isDark={isDark} />
      </Canvas>
    </div>
  );
}
