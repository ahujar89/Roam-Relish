import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  excerpt: string;
}

export default function DestinationCard({ id, name, country, image, excerpt }: DestinationCardProps) {
  return (
    <Link href={`/destination/${id}`} data-testid={`link-destination-${id}`}>
      <Card className="overflow-hidden hover-elevate group cursor-pointer border">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={`${name}, ${country}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-serif text-3xl text-white mb-1" data-testid={`text-destination-name-${id}`}>
              {name}
            </h3>
            <p className="text-sm text-white/80 uppercase tracking-wide">{country}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>
          <div className="flex items-center text-foreground group-hover:text-primary transition-colors">
            <span className="text-sm tracking-wide uppercase mr-2">Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
