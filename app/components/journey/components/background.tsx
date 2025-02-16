import { GradientTexture } from '@react-three/drei';

export function Background() {
    return (
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[40, 35]} />
        <meshPhongMaterial>
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#264653', '#2A9D8F', '#264653']}
          />
        </meshPhongMaterial>
      </mesh>
    );
}