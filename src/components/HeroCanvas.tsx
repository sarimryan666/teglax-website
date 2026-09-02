'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function InteractivePrism({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base continuous rotation
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;

      // Smooth mouse-follow effect
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mousePos.y * 0.8, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mousePos.x * 0.8, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* 3D Tetrahedron / Triangular Pyramid Mesh */}
      <mesh ref={meshRef} scale={2.2}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={isDark ? "#3DDC84" : "#101713"}
          wireframe={true}
          wireframeLinewidth={2}
          emissive={isDark ? "#3DDC84" : "#000000"}
          emissiveIntensity={isDark ? 0.3 : 0.1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas({ isDark = true }: { isDark?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-h-[350px] bg-transparent" />;

  return (
    <div className="w-full h-[350px] md:h-[450px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3DDC84" />
        <pointLight position={[-10, -10, -5]} intensity={1} color={isDark ? "#3DDC84" : "#000000"} />
        <InteractivePrism isDark={isDark} />
      </Canvas>
    </div>
  );
}
