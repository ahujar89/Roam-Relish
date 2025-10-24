import { useRoute, Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { destinations } from '@/data/destinations';
import { ArrowLeft, MapPin, Quote, Check } from 'lucide-react';
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

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Aesthetic transparent "glass" container for blog content.
              Uses a semi-transparent background with backdrop blur so the
              hero image / page background can subtly show through. */}
          <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg">
          <Link href="/destinations">
            <Button variant="ghost" className="mb-8 -ml-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>

          <div className="flex items-center gap-3 text-muted-foreground mb-8">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{destination.region}</span>
            {destination.coffeeCulture && (
              <>
                <span className="text-muted-foreground/40">•</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Coffee Culture
                </span>
              </>
            )}
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-2xl leading-relaxed text-foreground font-light">
              {destination.content.intro}
            </p>
          </div>

          {/* The Story */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl mb-6">The Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {destination.content.story}
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <Card className="my-16 p-8 bg-gradient-to-br from-accent/20 to-primary/5 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <Quote className="w-10 h-10 text-primary mb-6 relative z-10" />
            <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed relative z-10">
              "{destination.content.quote}"
            </blockquote>
          </Card>

          {/* Cultural Experience */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl mb-6">Cultural Immersion</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {destination.content.culture}
              </p>
            </div>
          </section>

          {/* Personal Experience */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl mb-6">My Experience</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {destination.content.experience}
              </p>
            </div>
          </section>

          {/* Highlights */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl mb-8">Travel Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate smooth-hover">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="my-16 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Next/Previous Destinations */}
          <section className="mt-16">
            <h3 className="font-serif text-2xl mb-6 text-center">Continue Exploring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(() => {
                const currentIndex = destinations.findIndex(d => d.id === destination.id);
                const prevDestination = destinations[currentIndex - 1] || destinations[destinations.length - 1];
                const nextDestination = destinations[currentIndex + 1] || destinations[0];
                
                return (
                  <>
                    <Link href={`/destination/${prevDestination.id}`} data-testid="link-previous">
                      <Card className="p-6 hover-elevate cursor-pointer smooth-hover overflow-hidden group">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Previous</p>
                        <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                          {prevDestination.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{prevDestination.country}</p>
                      </Card>
                    </Link>
                    <Link href={`/destination/${nextDestination.id}`} data-testid="link-next">
                      <Card className="p-6 hover-elevate cursor-pointer smooth-hover overflow-hidden group">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Next</p>
                        <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                          {nextDestination.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{nextDestination.country}</p>
                      </Card>
                    </Link>
                  </>
                );
              })()}
            </div>
          </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
