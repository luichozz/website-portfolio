import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, Suspense } from 'react';
import { Colors, StyleSheet } from "~/utils/StyleSheet";

import { ModernCharacter } from './components/modernCharacter';
import { InfoCard } from './components/infoCard';
import { Background } from './components/background';
import { Particles } from './components/particles';
import { journeyPoints } from './constants/journeyPoints';

function Scene() {
    const [hoveredAvatar, setHoveredAvatar] = useState<'education' | 'work' | null>(null);
  
    return (
      <>
        <ambientLight intensity={0.6} />
        <spotLight 
          position={[5, 5, 5]} 
          angle={0.4} 
          penumbra={0.5}
          intensity={0.8}
          castShadow
        />
        <pointLight 
          position={[-5, 5, -5]} 
          intensity={0.5}
          color="#6495ED"
        />
  
        <Background />
        <Particles />
  
        <ModernCharacter
          position={journeyPoints.education.position}
          type="education"
          isHovered={hoveredAvatar === 'education'}
          onClick={() => setHoveredAvatar(hoveredAvatar === 'education' ? null : 'education')}
        />
  
        <ModernCharacter
          position={journeyPoints.work.position}
          type="work"
          isHovered={hoveredAvatar === 'work'}
          onClick={() => setHoveredAvatar(hoveredAvatar === 'work' ? null : 'work')}
        />
  
        <InfoCard
          position={[journeyPoints.education.position[0], 1.2, 0]}
          info={journeyPoints.education.info}
          visible={hoveredAvatar === 'education'}
        />
  
        <InfoCard
          position={[journeyPoints.work.position[0], 1.2, 0]}
          info={journeyPoints.work.info}
          visible={hoveredAvatar === 'work'}
        />
  
        <OrbitControls 
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          enableDamping={true}
        />
      </>
    );
}

export function Journey() {
  const styles = StyleSheet.create({
    container: {
      marginTop: '3rem',
      height: '500px',
      backgroundColor: Colors.text.light,
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  });

  return (
    <div style={styles.container}>
      <Canvas 
        camera={{ 
          position: [0, 0, 8],
          fov: 40,
          near: 0.1,
          far: 2000
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}