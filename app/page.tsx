import ParticleBackground from "../components/ParticleBackground";
import { IconButton } from "../components/IconButton";
import { CvIcon, SolarIcon, OtherIcon } from "../components/Icons";

export default function Home() {
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden min-h-screen min-w-full">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen min-w-full">
        <h1 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans), Helvetica, Arial, sans-serif' }}>
          Lukáš Mikšovský
        </h1>
        <p className="text-lg text-gray-300 mb-8">stránka pro vše</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <IconButton href="/cv" icon={<CvIcon />} label="CV" />
          <IconButton href="/photovoltaic" icon={<SolarIcon />} label="Fotovoltaika" />
          <IconButton href="#" icon={<OtherIcon />} label="Ostatní" disabled />
        </div>
      </div>
    </main>
  );
}
