import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  
  const regions = ['all', ...Array.from(new Set(destinations.map(d => d.region)))];
  
  const filteredDestinations = selectedRegion === 'all' 
    ? destinations 
    : destinations.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl mb-6" data-testid="text-page-title">
              All Destinations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all the incredible places I've been fortunate to visit
            </p>
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                onClick={() => setSelectedRegion(region)}
                data-testid={`button-filter-${region.toLowerCase()}`}
              >
                {region === 'all' ? 'All Regions' : region}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
