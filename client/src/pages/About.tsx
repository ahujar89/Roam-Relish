import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Instagram, Facebook, Mail, Send } from 'lucide-react';
import { SiPinterest } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import saniyaPortrait from '@assets/generated_images/Saniya_portrait_for_About_595f11ef.png';

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
        {/* Hero Section */}
        <section className="px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <img
                  src={saniyaPortrait}
                  alt="Saniya"
                  className="w-full rounded-lg"
                  data-testid="img-saniya-portrait"
                />
              </div>
              <div className="lg:col-span-3">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">
                  Hi, I'm Saniya
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  A passionate traveler, coffee enthusiast, and seeker of authentic cultural experiences. My journey around the world has taught me that the best stories are found not in guidebooks, but in the conversations we have with locals, the meals we share, and the quiet moments we take to truly see a place.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe travel is about connection—connecting with different cultures, connecting with ourselves, and connecting with the universal human experiences that bind us all together, no matter where we're from.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              My Travel Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Travel, for me, isn't about checking destinations off a list—it's about immersing myself in the rhythm of a place. It's about slowing down enough to notice the small details: the way morning light falls on cobblestone streets, the aroma of freshly brewed coffee in a local café, the warmth of a stranger's smile.
              </p>
              <p>
                I value authenticity over Instagram-perfect moments. I'd rather spend an afternoon in a neighborhood café talking to locals than rushing through ten tourist attractions. I believe the best travel experiences happen when we're open, curious, and willing to step outside our comfort zones.
              </p>
              <p>
                Every place I visit teaches me something new—about the world, about different ways of living, and about myself. That's why I travel, and that's what I hope to share through this blog.
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
              <Card className="p-8">
                <h3 className="font-serif text-2xl mb-4">Cultural Immersion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I seek out local experiences—neighborhood markets, family-owned restaurants, community gatherings—anywhere I can connect with how people actually live.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="font-serif text-2xl mb-4">Meaningful Connection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The best travel memories come from conversations with locals, learning their stories, and discovering our shared humanity across cultural differences.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="font-serif text-2xl mb-4">Mindful Presence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I practice being fully present—putting away my phone, slowing down, and truly experiencing each moment rather than just documenting it.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow along on my adventures, get travel inspiration, and connect with me on social media.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="hover-elevate p-4 rounded-lg border border-border"
                aria-label="Instagram"
                data-testid="link-about-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover-elevate p-4 rounded-lg border border-border"
                aria-label="Pinterest"
                data-testid="link-about-pinterest"
              >
                <SiPinterest className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover-elevate p-4 rounded-lg border border-border"
                aria-label="Facebook"
                data-testid="link-about-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover-elevate p-4 rounded-lg border border-border"
                aria-label="Email"
                data-testid="link-about-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions about a destination? Want to share your own travel story? I'd love to hear from you!
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
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
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit">
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
