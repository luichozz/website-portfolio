import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles() {
  const particlesRef = useRef<THREE.Group>(null);
  const particleCount = 50;
  const positions = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 2) * 3,
    speed: Math.random() * 0.02
  }));

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += Math.sin(clock.getElapsedTime() + i) * positions[i].speed;
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color="#E9C46A"
            emissive="#E9C46A"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}