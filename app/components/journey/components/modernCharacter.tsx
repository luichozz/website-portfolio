import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CharacterProps } from '../types/interfaces';

export function ModernCharacter({ type, isHovered, position, onClick }: CharacterProps) {
    const groupRef = useRef<THREE.Group>(null);
    const bodyColor = type === 'education' ? "#FF8200" : "#0a4abf";
    const baseScale = 0.4; // Reduced from 0.6 to make characters smaller
    const scale = isHovered ? baseScale * 1.2 : baseScale;
    
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.1;
        groupRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.1;
      }
    });
  
    return (
      <group ref={groupRef} position={position} scale={[scale, scale, scale]} onClick={onClick}>
        {/* Head */}
        <group position={[0, 1.2, 0]}>
          {/* Base head shape */}
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial 
              color="#FFE0BD"
              roughness={0.3}
              metalness={0.1}
            />
          </mesh>
  
          {/* Eyes */}
          <group position={[0, 0, 0.3]}>
            {/* Left eye */}
            <group position={[-0.15, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.12, 32, 32]} />
                <meshStandardMaterial color="#FFFFFF" />
              </mesh>
              <mesh position={[0, 0, 0.08]}>
                <sphereGeometry args={[0.06, 32, 32]} />
                <meshStandardMaterial color="#000000" />
              </mesh>
            </group>
            {/* Right eye */}
            <group position={[0.15, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.12, 32, 32]} />
                <meshStandardMaterial color="#FFFFFF" />
              </mesh>
              <mesh position={[0, 0, 0.08]}>
                <sphereGeometry args={[0.06, 32, 32]} />
                <meshStandardMaterial color="#000000" />
              </mesh>
            </group>
          </group>
  
          {/* Smile */}
          <mesh position={[0, -0.15, 0.3]} rotation={[0.3, 0, 0]}>
            <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#FF9999" />
          </mesh>
  
          {/* Hair */}
          <group position={[0, 0.4, 0]}>
            {Array.from({ length: 8 }).map((_, i) => (
              <mesh 
                key={i} 
                position={[
                  Math.sin(i * Math.PI/4) * 0.4,
                  Math.random() * 0.1,
                  Math.cos(i * Math.PI/4) * 0.4
                ]}
              >
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial 
                  color="#2A2A2A"
                  roughness={1}
                />
              </mesh>
            ))}
          </group>
        </group>
  
        {/* Body */}
        <mesh position={[0, 0.2, 0]}>
          <capsuleGeometry args={[0.4, 0.8, 8, 16]} />
          <meshStandardMaterial 
            color={bodyColor}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
  
        {/* Arms */}
        <group>
          {/* Left Arm */}
          <mesh position={[-0.6, 0.7, 0]} rotation={[0, 0, Math.PI / 6]}>
            <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
            <meshStandardMaterial color={bodyColor} />
          </mesh>
          {/* Right Arm */}
          <mesh position={[0.6, 0.7, 0]} rotation={[0, 0, -Math.PI / 6]}>
            <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
            <meshStandardMaterial color={bodyColor} />
          </mesh>
        </group>
  
        {/* Conditional rendering based on character type */}
        {type === 'education' && (
          <group>
            {/* Graduation Cap */}
            <group position={[0, 1.9, 0]}>
              <mesh rotation={[0.2, 0, 0]}>
                <boxGeometry args={[0.8, 0.08, 0.8]} />
                <meshStandardMaterial 
                  color="#000000"
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
              <mesh position={[0.3, 0.1, 0.3]}>
                <cylinderGeometry args={[0.01, 0.01, 0.2, 16]} />
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
              <mesh position={[0.3, 0.2, 0.3]}>
                <boxGeometry args={[0.15, 0.15, 0.01]} />
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            </group>
          </group>
        )}
  
        {type === 'work' && (
          <group>
            {/* Modern Laptop */}
            <group position={[-0.8, 0.7, 0.3]} rotation={[0.5, 0.3, -0.3]}>
              {/* Screen */}
              <mesh>
                <boxGeometry args={[0.5, 0.4, 0.02]} />
                <meshStandardMaterial 
                  color="#1A1A1A"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
              {/* Base */}
              <mesh position={[0, -0.25, 0.02]} rotation={[0.3, 0, 0]}>
                <boxGeometry args={[0.5, 0.3, 0.02]} />
                <meshStandardMaterial 
                  color="#1A1A1A"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
              {/* Screen Content */}
              <mesh position={[0, 0, 0.021]}>
                <planeGeometry args={[0.45, 0.35]} />
                <meshBasicMaterial color="#00FF00" />
              </mesh>
            </group>
          </group>
        )}
      </group>
    );
}