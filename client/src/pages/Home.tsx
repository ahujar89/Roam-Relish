import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinations';
import heroImage from '@assets/generated_images/Vienna_coffeehouse_hero_image_f626bfe2.png';
import coffeeImage from '@assets/generated_images/Coffee_culture_feature_image_d68c5200.png';
import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Home() {
  const featuredDestinations = destinations.filter(d => d.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        image={heroImage}
        title="Roam & Relish"
        subtitle="Slow Travel, Deep Connections, Rich Experiences"
      />

      {/* Featured Destinations */}
      <section className="py-20 px-6 lg:px-8 bg-pattern-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4" data-testid="text-featured-destinations">
              Featured Destinations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the places that have captured my heart and inspired my travels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button variant="outline" size="lg" data-testid="button-view-all">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coffee Culture Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-6 h-6 text-primary" />
                <span className="text-sm uppercase tracking-wide text-muted-foreground">
                  Special Feature
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Coffee Culture Chronicles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From Vienna's grand coffeehouses to Toronto's indie roasters, I've explored some of the world's most fascinating coffee cultures. Each cup tells a story of tradition, community, and the art of slowing down.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join me as I discover how different cities celebrate this beloved ritual, and learn what coffee means beyond the caffeine.
              </p>
              <Link href="/coffee-culture">
                <Button variant="default" data-testid="button-explore-coffee">
                  Explore Coffee Culture
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={coffeeImage}
                alt="Coffee culture"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Why I Travel
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Travel isn't just about seeing new places—it's about experiencing different ways of life, connecting with people across cultures, and discovering that the world is both vast and intimately connected.
          </p>
          <Link href="/about">
            <Button variant="outline" data-testid="button-learn-more">
              Learn More About Me
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
