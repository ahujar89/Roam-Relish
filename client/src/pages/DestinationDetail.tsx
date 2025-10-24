import { useRoute, Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { destinations } from '@/data/destinations';
import { ArrowLeft, MapPin, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function DestinationDetail() {
  const [, params] = useRoute('/destination/:id');
  const destination = destinations.find(d => d.id === params?.id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="font-serif text-4xl mb-4">Destination Not Found</h1>
          <Link href="/destinations">
            <Button variant="outline">Back to Destinations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero
        image={destination.image}
        title={destination.name}
        subtitle={destination.country}
        height="h-[70vh]"
      />

      <article className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/destinations">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>{destination.region}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              {destination.content.intro}
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">Cultural Experience</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {destination.content.culture}
            </p>

            <Card className="my-12 p-8 bg-accent/30 border-accent-border">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="font-serif text-2xl italic text-foreground leading-relaxed">
                "{destination.content.quote}"
              </blockquote>
            </Card>

            <h2 className="font-serif text-3xl mt-12 mb-6">Highlights</h2>
            <ul className="space-y-3 mb-12">
              {destination.content.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Next/Previous Destinations */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(() => {
                const currentIndex = destinations.findIndex(d => d.id === destination.id);
                const prevDestination = destinations[currentIndex - 1] || destinations[destinations.length - 1];
                const nextDestination = destinations[currentIndex + 1] || destinations[0];
                
                return (
                  <>
                    <Link href={`/destination/${prevDestination.id}`} data-testid="link-previous">
                      <Card className="p-6 hover-elevate cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-2">Previous</p>
                        <h3 className="font-serif text-2xl">{prevDestination.name}</h3>
                      </Card>
                    </Link>
                    <Link href={`/destination/${nextDestination.id}`} data-testid="link-next">
                      <Card className="p-6 hover-elevate cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-2">Next</p>
                        <h3 className="font-serif text-2xl">{nextDestination.name}</h3>
                      </Card>
                    </Link>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
