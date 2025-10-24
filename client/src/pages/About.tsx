import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Instagram, Facebook, Mail, Send, MapPin, Coffee, Heart } from 'lucide-react';
import { SiPinterest } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import saniyaPortrait from '@assets/generated_images/Saniya_portrait_for_About_595f11ef.png';
import viennaImg from '@assets/generated_images/Vienna_coffeehouse_hero_image_f626bfe2.png';

export default function About() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero Section with Creative Layout */}
        <section className="px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Photo Column - Creative Asymmetric Layout */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-lg transform rotate-3"></div>
                  <img
                    src={saniyaPortrait}
                    alt="Saniya"
                    className="relative w-full rounded-lg shadow-lg"
                    data-testid="img-saniya-portrait"
                  />
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold">11</div>
                    <div className="text-xs text-muted-foreground">Cities</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <Coffee className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold">50+</div>
                    <div className="text-xs text-muted-foreground">Cafés</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <Heart className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold">∞</div>
                    <div className="text-xs text-muted-foreground">Memories</div>
                  </Card>
                </div>

                {/* Background Image Decoration */}
                <div className="hidden lg:block relative h-48 rounded-lg overflow-hidden opacity-30">
                  <img
                    src={viennaImg}
                    alt="Vienna background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Travel Writer & Cultural Explorer</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  Hi, I'm Saniya
                </h1>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-xl text-foreground">
                    Welcome to Roam & Relish, where slow travel meets deep cultural immersion.
                  </p>
                  
                  <p>
                    I'm not your typical travel blogger rushing from landmark to landmark. I'm the person you'll find sitting in a Viennese coffeehouse for three hours, watching the world go by. The one who asks locals for restaurant recommendations instead of consulting top-10 lists. The traveler who believes the best stories happen when you're not looking for them.
                  </p>
                  
                  <p>
                    My journey into mindful travel began with a simple realization: I was visiting incredible places but not truly experiencing them. I'd return from trips with hundreds of photos but few genuine memories. That's when I decided to slow down, to linger, to truly be present.
                  </p>
                  
                  <p>
                    Now, I explore the world through coffee culture, conversations with locals, and the small moments that reveal a place's true character. Whether it's learning to appreciate Vienna's coffeehouse tradition, discovering hidden gems in Prague's winding streets, or understanding Mumbai's incredible energy, I seek experiences that connect me to the heart of each destination.
                  </p>
                </div>

                {/* Social Media Pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-card-border rounded-full hover-elevate transition-all duration-300"
                    data-testid="link-about-instagram"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm">@roamandrelish</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-card-border rounded-full hover-elevate transition-all duration-300"
                    data-testid="link-about-pinterest"
                  >
                    <SiPinterest className="w-4 h-4" />
                    <span className="text-sm">Pinterest</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-card-border rounded-full hover-elevate transition-all duration-300"
                    data-testid="link-about-facebook"
                  >
                    <Facebook className="w-4 h-4" />
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-card bg-pattern-dots">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                My Travel Philosophy
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p className="text-center italic text-foreground text-xl">
                "The world reveals itself to those who travel on foot." — Werner Herzog
              </p>
              
              <p>
                Travel, for me, isn't about checking destinations off a list—it's about immersing myself in the rhythm of a place. It's about slowing down enough to notice the small details: the way morning light falls on cobblestone streets, the aroma of freshly brewed coffee in a local café, the warmth of a stranger's smile when they help you with directions.
              </p>
              
              <p>
                I value <strong>authenticity over Instagram-perfect moments</strong>. I'd rather spend an afternoon in a neighborhood café talking to locals than rushing through ten tourist attractions. I believe the best travel experiences happen when we're open, curious, and willing to step outside our comfort zones.
              </p>
              
              <p>
                Every place I visit teaches me something new—about the world, about different ways of living, about myself. <strong>That's why I travel</strong>, and that's what I hope to share through Roam & Relish. Not just where to go, but how to truly experience a place, how to connect with its culture, and how to come home changed.
              </p>
            </div>
          </div>
        </section>

        {/* What I Value Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl text-center mb-12">
              What I Value in Travel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 smooth-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4">Cultural Immersion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I seek out local experiences—neighborhood markets, family-owned restaurants, community gatherings—anywhere I can connect with how people actually live. It's in these authentic moments that I find the true essence of a place.
                </p>
              </Card>
              
              <Card className="p-8 smooth-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4">Meaningful Connection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The best travel memories come from conversations with locals, learning their stories, and discovering our shared humanity across cultural differences. Every person I meet broadens my perspective.
                </p>
              </Card>
              
              <Card className="p-8 smooth-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4">Mindful Presence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I practice being fully present—putting away my phone, slowing down, and truly experiencing each moment rather than just documenting it. Travel is about being there, not just having been there.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 lg:px-8 bg-card">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">
                Let's Connect
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions about a destination? Want to share your own travel story? I'd love to hear from you!
              </p>
            </div>

            <Card className="p-8 bg-background border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    data-testid="input-message"
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
