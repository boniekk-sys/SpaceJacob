"use client";

import { Float, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

function HologramShip() {
  const ship = useRef<Mesh>(null);
  const rings = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ship.current) {
      ship.current.rotation.y = Math.sin(t * 0.4) * 0.32;
      ship.current.rotation.z = Math.sin(t * 0.7) * 0.045;
    }
    if (rings.current) {
      rings.current.rotation.z = t * 0.18;
      rings.current.rotation.x = Math.sin(t * 0.2) * 0.18;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.28} floatIntensity={0.9}>
        <mesh ref={ship} scale={[2.5, 0.32, 0.9]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#101a36" emissive="#00e5ff" emissiveIntensity={1.35} metalness={0.9} roughness={0.18} />
        </mesh>
        <mesh position={[-2.2, 0, 0]} scale={[1.2, 0.22, 0.5]}>
          <coneGeometry args={[1, 2.4, 4]} />
          <meshStandardMaterial color="#ff2bd6" emissive="#ff2bd6" emissiveIntensity={2.1} transparent opacity={0.72} />
        </mesh>
        <mesh position={[1.15, 0.24, 0]} scale={[0.55, 0.18, 0.5]}>
          <sphereGeometry args={[1, 24, 12]} />
          <meshStandardMaterial color="#ffffff" emissive="#8f4dff" emissiveIntensity={1.2} transparent opacity={0.8} />
        </mesh>
      </Float>
      <mesh ref={rings} rotation={[1.2, 0.2, 0]} scale={[3.4, 3.4, 3.4]}>
        <torusGeometry args={[1, 0.006, 16, 160]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function NebulaPoints() {
  const points = useMemo(() => {
    return Array.from({ length: 90 }, () => [
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8
    ]);
  }, []);

  return (
    <group>
      {points.map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <sphereGeometry args={[index % 4 === 0 ? 0.026 : 0.014, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#ff2bd6" : index % 3 === 1 ? "#00e5ff" : "#8f4dff"} transparent opacity={0.62} />
        </mesh>
      ))}
    </group>
  );
}

export function SpaceScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0.3, 6], fov: 48 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#03040d"]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[2, 3, 4]} color="#00e5ff" intensity={35} />
        <pointLight position={[-3, -1, 2]} color="#ff2bd6" intensity={24} />
        <Stars radius={80} depth={40} count={2400} factor={4} fade speed={0.45} />
        <NebulaPoints />
        <HologramShip />
      </Canvas>
    </div>
  );
}
