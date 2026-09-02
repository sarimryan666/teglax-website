'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function TriforcePyramid({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Continuous floating rotation
      groupRef.current.rotation.y += delta * 0.3;
      
      // Interactive lerp towards cursor position
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.4, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + mouse.x * 0.02, 0.05);
    }
  });

  const accentColor = "#3DDC84";
  const darkColor = isDark ? "#0D1711" : "#E5E7EB";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={1.8}>
        {/* Top Triangle Prism */}
        <mesh position={[0, 0.9, 0]}>
          <coneGeometry args={[0.9, 1.2, 3]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.7}
            roughness={0.2}
            emissive={accentColor}
            emissiveIntensity={isDark ? 0.35 : 0.1}
          />
        </mesh>

        {/* Bottom Left Triangle Prism */}
        <mesh position={[-0.85, -0.6, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.9, 1.2, 3]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.8}
            roughness={0.15}
            emissive={accentColor}
            emissiveIntensity={isDark ? 0.4 : 0.1}
          />
        </mesh>

        {/* Bottom Right Triangle Prism */}
        <mesh position={[0.85, -0.6, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.9, 1.2, 3]} />
          <meshStandardMaterial
            color={accentColor}
            metalness={0.8}
            roughness={0.15}
            emissive={accentColor}
            emissiveIntensity={isDark ? 0.4 : 0.1}
          />
        </mesh>

        {/* Inverted Center Void Structure Overlay (Inner Outline) */}
        <mesh position={[0, -0.15, 0.05]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.75, 1.0, 3]} />
          <meshStandardMaterial
            color={darkColor}
            wireframe={true}
            wireframeLinewidth={3}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroPyramid({ isDark = true }: { isDark?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-h-[400px]" />;

  return (
    <div className="w-full h-[400px] md:h-[550px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 10]} intensity={2.0} color="#3DDC84" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#FFFFFF" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#3DDC84" />
        <TriforcePyramid isDark={isDark} />
      </Canvas>
    </div>
  );
}
