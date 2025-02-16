import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { InfoCardProps } from '../types/interfaces';

export function InfoCard({ position, info, visible }: InfoCardProps) {
    if (!visible) return null;
  
    const groupRef = useRef<THREE.Group>(null);
  
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.1;
      }
    });

    const bulletPoints = info.description.split('\n').map((point, index) => (
      <Text
        key={index}
        position={[0, 1 - (index * 0.3), 0]}
        fontSize={0.15}
        color="#fb8500"
        anchorX="center"
        anchorY="middle"
      >
        {point}
      </Text>
    ));
  
    return (
      <group ref={groupRef} position={position}>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#fb8500"
          anchorX="center"
          anchorY="middle"
        >
          {info.title}
        </Text>
        {bulletPoints}
        <Text
          position={[0, 0, 0]}
          fontSize={0.15}
          color="#ffb703"
          anchorX="center"
          anchorY="middle"
        >
          {info.period}
        </Text>
      </group>
    );
}