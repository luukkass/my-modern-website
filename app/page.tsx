'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Link from 'next/link';

function SolarPanel({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[-0.5, 0, 0]}>
      <boxGeometry args={[0.6, 0.05, 0.4]} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}

function WindTurbine({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 1.1, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.2, 0.3, 3]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function Player({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.2, 0.5, 0.2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Field() {
  return (
    <mesh position={[0, -0.01, 0]}>
      <boxGeometry args={[4, 0.02, 3]} />
      <meshStandardMaterial color="#228B22" />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Vítej na mém webu</h1>
      <p className="text-lg mb-6 max-w-xl">
        Najdeš zde informace o mně, mém CV i vizualizaci dat z domácí FVE.
      </p>

      <nav className="flex gap-6 mb-8">
        <Link href="/about" className="text-blue-500 hover:underline">
          O mně
        </Link>
        <Link href="/fve" className="text-blue-500 hover:underline">
          FVE
        </Link>
      </nav>

      <div className="w-full h-[400px]">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls />

          <Field />
          <Player position={[-1, 0.25, 0]} color="green" />
          <Player position={[1, 0.25, 0]} color="blue" />

          {/* Solar panels */}
          <SolarPanel position={[-2, 0.05, -1.4]} />
          <SolarPanel position={[-1, 0.05, -1.4]} />
          <SolarPanel position={[1, 0.05, -1.4]} />
          <SolarPanel position={[2, 0.05, -1.4]} />

          {/* Wind turbines */}
          <WindTurbine position={[-2.5, 0, 1.5]} />
          <WindTurbine position={[2.5, 0, 1.5]} />
        </Canvas>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Nízkopoly model hřiště s hráči, solárními panely a větrníky. Otáčej scénou myší!
      </p>
    </main>
  );
}
