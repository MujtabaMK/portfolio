import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = t * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a5b4fc"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CenterMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.22;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * -0.3;
      innerRef.current.rotation.y = t * -0.4;
      const s = 1 + Math.sin(t * 0.6) * 0.08;
      innerRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[3.4, 1]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function MouseParallax({ enabled }: { enabled: boolean }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // On touch / small screens we drop the pointer-driven parallax but keep ambient drift
    const px = enabled ? state.pointer.x * 0.4 : 0;
    const py = enabled ? state.pointer.y * 0.4 : 0;
    const x = px + Math.sin(t * 0.2) * 0.15;
    const y = py + Math.cos(t * 0.15) * 0.1;
    target.current.x += (x - target.current.x) * 0.04;
    target.current.y += (y - target.current.y) * 0.04;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function useViewportTier() {
  const [tier, setTier] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    if (w < 640) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setTier('mobile');
      else if (w < 1024) setTier('tablet');
      else setTier('desktop');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return tier;
}

export default function ThreeBackground() {
  const tier = useViewportTier();

  // Tune particle count + DPR + pointer parallax per device tier
  const particleCount = tier === 'mobile' ? 900 : tier === 'tablet' ? 1600 : 2500;
  const dpr: [number, number] = tier === 'mobile' ? [1, 1] : [1, 1.5];
  const pointerEnabled = tier === 'desktop';

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={dpr}
        gl={{
          antialias: tier !== 'mobile',
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ParticleField count={particleCount} />
        <CenterMesh />
        <MouseParallax enabled={pointerEnabled} />
      </Canvas>
    </div>
  );
}
