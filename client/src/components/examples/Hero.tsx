import Hero from '../Hero';
import heroImage from '@assets/generated_images/Vienna_coffeehouse_hero_image_f626bfe2.png';

export default function HeroExample() {
  return (
    <Hero
      image={heroImage}
      title="Saniya's Wanderlust"
      subtitle="Exploring Culture, One City at a Time"
    />
  );
}
