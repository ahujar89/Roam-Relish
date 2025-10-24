import { ChevronDown } from 'lucide-react';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  height?: string;
}

export default function Hero({ image, title, subtitle, height = 'h-[90vh]' }: HeroProps) {
  return (
    <div className={`relative ${height} flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </div>
  );
}
