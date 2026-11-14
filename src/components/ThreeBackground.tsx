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

function CenterMesh({ scale = 1, opacity = 1 }: { scale?: number; opacity?: number }) {
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
    <group scale={scale}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[3.4, 1]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.35 * opacity} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.55 * opacity} />
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

// Drives rendering at a fixed fps when the Canvas uses frameloop="demand".
// Phones get 30fps — the motion is slow ambient drift, so it looks the same at half the GPU cost.
function FrameLimiter({ fps }: { fps: number }) {
  const { invalidate } = useThree();
  useEffect(() => {
    let raf = 0;
    let last = 0;
    const interval = 1000 / fps;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last >= interval) {
        last = now;
        invalidate();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [fps, invalidate]);
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
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowPower = tier === 'mobile' || isTouch;

  const particleCount = tier === 'mobile' ? 450 : tier === 'tablet' ? 900 : 2500;
  const dpr: [number, number] = lowPower ? [1, 1] : [1, 1.5];
  const pointerEnabled = tier === 'desktop' && !isTouch;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={dpr}
        frameloop={lowPower || reducedMotion ? 'demand' : 'always'}
        gl={{
          antialias: !lowPower,
          alpha: true,
          powerPreference: lowPower ? 'low-power' : 'high-performance',
        }}
      >
        {lowPower && !reducedMotion && <FrameLimiter fps={30} />}
        <ParticleField count={particleCount} />
        {/* Smaller and fainter on phones so it doesn't fight with the text */}
        <CenterMesh scale={tier === 'mobile' ? 0.62 : 1} opacity={tier === 'mobile' ? 0.6 : 1} />
        <MouseParallax enabled={pointerEnabled} />
      </Canvas>
    </div>
  );
}
