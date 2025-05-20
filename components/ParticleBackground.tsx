'use client';
import React, { useEffect } from "react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { initParticlesEngine } from "@tsparticles/react";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadLinksPreset(engine);
    });
  }, []);

  return (
    <Particles
        id="tsparticles"
        options={{
        preset: "links",
        background: { color: { value: "#0a0a0a" } },
        fullScreen: { enable: true, zIndex: -1 }, // Let tsParticles control size
        particles: {
          color: { value: "#ffe600" },
          links: { enable: true, color: "#ffe600", distance: 150, opacity: 0.4, width: 2 },
          number: { value: 120, density: { enable: true } },
          opacity: { value: 0.8 },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            direction: "none",
            outModes: { default: "bounce" }, // particles bounce off all edges
            random: false,
            speed: 1,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
