'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeGlobe({ isDark }: { isDark: boolean }) {
  const globeRef = useRef<THREE.Group>(null!);
  const orbitRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * 0.35;
      orbitRef.current.rotation.y += delta * 0.15;
    }
  });

  const wireColor = isDark ? "#2A4032" : "#94A3B8";
  const accentColor = "#3DDC84";

  return (
    <group scale={1.4} position={[0, -0.4, 0]}>
      {/* Outer Wireframe Sphere */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1.5, 24, 24]} />
          <meshBasicMaterial
            color={wireColor}
            wireframe={true}
            transparent={true}
            opacity={isDark ? 0.45 : 0.5}
          />
        </mesh>

        {/* Inner Lat/Long Grid Rings */}
        <mesh scale={0.99}>
          <sphereGeometry args={[1.5, 12, 12]} />
          <meshBasicMaterial
            color={accentColor}
            wireframe={true}
            transparent={true}
            opacity={0.2}
          />
        </mesh>
      </group>

      {/* Orbit Trajectory Arc & Dots */}
      <group ref={orbitRef} rotation={[0.4, 0.2, 0.6]}>
        <mesh>
          <torusGeometry args={[1.8, 0.012, 16, 100]} />
          <meshBasicMaterial color={accentColor} transparent opacity={0.85} />
        </mesh>

        {/* Orbit Target Dots */}
        <mesh position={[1.8, 0, 0]}>
          <boxGeometry args={[0.09, 0.09, 0.09]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>
        <mesh position={[1.72, 0.25, 0]}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
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
    <div className="w-full h-[350px] md:h-[450px] absolute inset-x-0 bottom-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <WireframeGlobe isDark={isDark} />
      </Canvas>
    </div>
  );
}
