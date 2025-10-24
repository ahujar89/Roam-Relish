import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { destinations } from '@/data/destinations';
import { Card } from '@/components/ui/card';
import { Coffee } from 'lucide-react';
import { Link } from 'wouter';
import coffeeHeroImage from '@assets/generated_images/Vienna_coffeehouse_hero_image_f626bfe2.png';

export default function CoffeeCulture() {
  const coffeeDestinations = destinations.filter(d => d.coffeeCulture);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero
        image={coffeeHeroImage}
        title="Coffee Culture Chronicles"
        subtitle="Discovering the world through coffee, one cup at a time"
        height="h-[70vh]"
      />

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 bg-pattern-subtle p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-primary" />
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                A Journey Through Coffee
              </span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Coffee isn't just a beverage—it's a window into culture, a catalyst for connection, and a ritual that transcends borders. In my travels, I've discovered that the way a city approaches coffee reveals so much about its values, pace of life, and social fabric.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the grand coffeehouses of Vienna where time seems to stand still, to the innovative specialty shops of Toronto where every pour-over is an art form, each coffee culture has taught me something profound about slowing down and being present.
            </p>
          </div>

          <h2 className="font-serif text-4xl mb-12 text-center">
            Coffee Destinations
          </h2>

          <div className="space-y-12">
            {coffeeDestinations.map((destination) => (
              <Link key={destination.id} href={`/destination/${destination.id}`} data-testid={`link-coffee-${destination.id}`}>
                <Card className="overflow-hidden hover-elevate cursor-pointer smooth-hover">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <h3 className="font-serif text-3xl mb-2" data-testid={`text-coffee-city-${destination.id}`}>
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                        {destination.country}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {destination.excerpt}
                      </p>
                      <p className="text-foreground italic">
                        "{destination.content.quote}"
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg">
            <h3 className="font-serif text-2xl mb-4">What Coffee Has Taught Me</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="leading-relaxed">
                • The importance of rituals and taking time for ourselves
              </li>
              <li className="leading-relaxed">
                • How different cultures create spaces for community and conversation
              </li>
              <li className="leading-relaxed">
                • That quality often matters more than speed
              </li>
              <li className="leading-relaxed">
                • The value of craftsmanship and attention to detail
              </li>
              <li className="leading-relaxed">
                • How a simple cup can connect strangers and create moments of genuine human interaction
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
