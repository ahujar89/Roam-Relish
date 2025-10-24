import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function CursorSplash() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    const colors = ['#D97341', '#B85C2F', '#E8A87C', '#C49A6C'];

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create new particle occasionally
      if (Math.random() > 0.85) {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          opacity: 0.6,
          color: colors[Math.floor(Math.random() * colors.length)]
        };

        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fade out particles
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, opacity: p.opacity - 0.02, size: p.size * 0.98 }))
          .filter(p => p.opacity > 0)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.05s ease-out'
          }}
        />
      ))}
    </div>
  );
}
