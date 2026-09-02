'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function TriforcePyramidGlass({ isDark }: { isDark: boolean }) {
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
      // Continuous floating rotation matching video_frame_1 & video_frame_6
      groupRef.current.rotation.y += delta * 0.25;

      // Mouse tracking lerp
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.35, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + mouse.x * 0.02, 0.05);
    }
  });

  const greenAccent = "#3DDC84";
  const faceColor = isDark ? "#0A1F13" : "#D1FADB";

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef} scale={1.75} position={[0, 0, 0]}>
        {/* Top Triangular Prism */}
        <group position={[0, 0.85, 0]}>
          <mesh>
            <coneGeometry args={[0.9, 1.2, 3]} />
            <meshStandardMaterial
              color={faceColor}
              transparent={true}
              opacity={isDark ? 0.75 : 0.8}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
          {/* Green Border Outline */}
          <mesh>
            <coneGeometry args={[0.905, 1.205, 3]} />
            <meshBasicMaterial color={greenAccent} wireframe={true} wireframeLinewidth={2} />
          </mesh>
        </group>

        {/* Bottom Left Triangular Prism */}
        <group position={[-0.85, -0.6, 0]}>
          <mesh>
            <coneGeometry args={[0.9, 1.2, 3]} />
            <meshStandardMaterial
              color={faceColor}
              transparent={true}
              opacity={isDark ? 0.75 : 0.8}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
          <mesh>
            <coneGeometry args={[0.905, 1.205, 3]} />
            <meshBasicMaterial color={greenAccent} wireframe={true} wireframeLinewidth={2} />
          </mesh>
        </group>

        {/* Bottom Right Triangular Prism */}
        <group position={[0.85, -0.6, 0]}>
          <mesh>
            <coneGeometry args={[0.9, 1.2, 3]} />
            <meshStandardMaterial
              color={faceColor}
              transparent={true}
              opacity={isDark ? 0.75 : 0.8}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
          <mesh>
            <coneGeometry args={[0.905, 1.205, 3]} />
            <meshBasicMaterial color={greenAccent} wireframe={true} wireframeLinewidth={2} />
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

  if (!mounted) return <div className="w-full h-full min-h-[400px]" />;

  return (
    <div className="w-full h-[400px] md:h-[520px] relative">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 15, 10]} intensity={2.0} color="#3DDC84" />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#FFFFFF" />
        <TriforcePyramidGlass isDark={isDark} />
      </Canvas>
    </div>
  );
}
