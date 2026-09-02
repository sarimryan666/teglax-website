'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function TextLetterTMesh({ isDark }: { isDark: boolean }) {
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
      // Continuous smooth rotation
      groupRef.current.rotation.y += delta * 0.5;

      // Mouse tracking lerp
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.5, 0.08);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + mouse.x * 0.05, 0.08);
    }
  });

  const greenColor = "#3DDC84";

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={groupRef} scale={1.2}>
        {/* Horizontal Top Crossbar of 't' */}
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[1.6, 0.35, 0.35]} />
          <meshStandardMaterial
            color={greenColor}
            metalness={0.7}
            roughness={0.2}
            emissive={greenColor}
            emissiveIntensity={isDark ? 0.35 : 0.15}
          />
        </mesh>

        {/* Vertical Main Stem of 't' */}
        <mesh position={[-0.1, -0.2, 0]}>
          <boxGeometry args={[0.35, 1.8, 0.35]} />
          <meshStandardMaterial
            color={greenColor}
            metalness={0.7}
            roughness={0.2}
            emissive={greenColor}
            emissiveIntensity={isDark ? 0.35 : 0.15}
          />
        </mesh>

        {/* Bottom Curved Curve of 't' */}
        <mesh position={[0.2, -1.0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.5, 0.35, 0.35]} />
          <meshStandardMaterial
            color={greenColor}
            metalness={0.7}
            roughness={0.2}
            emissive={greenColor}
            emissiveIntensity={isDark ? 0.35 : 0.15}
          />
        </mesh>

        {/* Outer Glowing Wireframe Cage */}
        <group scale={1.15}>
          <mesh position={[0, 0.7, 0]}>
            <boxGeometry args={[1.6, 0.35, 0.35]} />
            <meshBasicMaterial color={greenColor} wireframe transparent opacity={0.3} />
          </mesh>
          <mesh position={[-0.1, -0.2, 0]}>
            <boxGeometry args={[0.35, 1.8, 0.35]} />
            <meshBasicMaterial color={greenColor} wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function HeroIconT({ isDark = true }: { isDark?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-h-[350px]" />;

  return (
    <div className="w-full h-[350px] md:h-[480px] relative flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} color="#3DDC84" />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#FFFFFF" />
        <pointLight position={[0, 0, 5]} intensity={2.0} color="#3DDC84" />
        <TextLetterTMesh isDark={isDark} />
      </Canvas>
    </div>
  );
}
