'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function TriforceExactMesh({ isDark }: { isDark: boolean }) {
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
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.3, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + mouse.x * 0.02, 0.05);
    }
  });

  const greenAccent = "#3DDC84";
  const bodyColor = isDark ? "#0E2417" : "#DCFCE7";

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.8}>
        {/* Top Tetrahedron */}
        <group position={[0, 0.86, 0]}>
          <mesh>
            <tetrahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
              color={bodyColor}
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh>
            <tetrahedronGeometry args={[0.905, 0]} />
            <meshBasicMaterial color={greenAccent} wireframe wireframeLinewidth={2} />
          </mesh>
        </group>

        {/* Bottom Left Tetrahedron */}
        <group position={[-0.86, -0.6, 0]}>
          <mesh>
            <tetrahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
              color={bodyColor}
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh>
            <tetrahedronGeometry args={[0.905, 0]} />
            <meshBasicMaterial color={greenAccent} wireframe wireframeLinewidth={2} />
          </mesh>
        </group>

        {/* Bottom Right Tetrahedron */}
        <group position={[0.86, -0.6, 0]}>
          <mesh>
            <tetrahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
              color={bodyColor}
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh>
            <tetrahedronGeometry args={[0.905, 0]} />
            <meshBasicMaterial color={greenAccent} wireframe wireframeLinewidth={2} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function HeroPyramid({ isDark = true }: { isDark?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-h-[420px]" />;

  return (
    <div className="w-full h-[420px] md:h-[560px] relative">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} color="#3DDC84" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#FFFFFF" />
        <TriforceExactMesh isDark={isDark} />
      </Canvas>
    </div>
  );
}
