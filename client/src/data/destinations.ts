import viennaImg from '@assets/generated_images/Vienna_destination_blog_795b6e7a.png';
import budapestImg from '@assets/generated_images/Budapest_destination_blog_6acc0fcd.png';
import pragueImg from '@assets/generated_images/Prague_destination_blog_446d89e8.png';
import mumbaiImg from '@assets/generated_images/Mumbai_destination_blog_420fd57a.png';
import torontoImg from '@assets/generated_images/Toronto_destination_blog_afbfd844.png';
import banffImg from '@assets/generated_images/Banff_destination_blog_7ac8cdee.png';
import tulumImg from '@assets/generated_images/Tulum_destination_blog_111975e6.png';
import cancunImg from '@assets/generated_images/Cancun_destination_blog_18c92d9e.png';
import warsawImg from '@assets/generated_images/Warsaw_destination_blog_a2ef720e.png';
import jaipurImg from '@assets/generated_images/Jaipur_destination_blog_61eb1366.png';
import calgaryImg from '@assets/generated_images/Calgary_destination_blog_6f15d0d0.png';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  image: string;
  excerpt: string;
  featured: boolean;
  coffeeCulture: boolean;
  content: {
    intro: string;
    culture: string;
    highlights: string[];
    quote: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    region: 'Europe',
    image: viennaImg,
    excerpt: 'Where imperial elegance meets the world\'s finest coffee culture in historic coffeehouses.',
    featured: true,
    coffeeCulture: true,
    content: {
      intro: 'Vienna stole my heart with its imperial architecture and legendary coffeehouse culture. Walking through the streets feels like stepping into a living museum, where every corner reveals centuries of artistic and musical heritage.',
      culture: 'The Viennese coffeehouse tradition is a UNESCO cultural heritage, and experiencing it firsthand made me understand why. These aren\'t just cafés—they\'re institutions where time slows down, conversations deepen, and the art of simply being is celebrated.',
      highlights: [
        'Historic coffeehouses serving the perfect Melange',
        'Stunning Baroque and Art Nouveau architecture',
        'World-class museums and classical music venues',
        'Charming streets of the Innere Stadt'
      ],
      quote: 'In Vienna, I learned that coffee isn\'t just a drink—it\'s a way of life, a philosophy of slowing down and savoring every moment.'
    }
  },
  {
    id: 'budapest',
    name: 'Budapest',
    country: 'Hungary',
    region: 'Europe',
    image: budapestImg,
    excerpt: 'The Pearl of the Danube enchants with thermal baths, ruin bars, and stunning riverside views.',
    featured: true,
    coffeeCulture: false,
    content: {
      intro: 'Budapest is a city of contrasts—grand and gritty, historic and hip. The Danube splits it into Buda and Pest, each with its own personality, yet together creating something magical.',
      culture: 'From soaking in century-old thermal baths to exploring quirky ruin bars in the Jewish Quarter, Budapest offers experiences you won\'t find anywhere else. The local food scene is incredible, with traditional dishes that warm both body and soul.',
      highlights: [
        'Thermal baths like Széchenyi and Gellért',
        'Parliament Building illuminated at night',
        'Ruin bars in the Jewish Quarter',
        'Panoramic views from Fisherman\'s Bastion'
      ],
      quote: 'Budapest taught me that the most beautiful cities are those that embrace both their history and their future with equal passion.'
    }
  },
  {
    id: 'prague',
    name: 'Prague',
    country: 'Czech Republic',
    region: 'Europe',
    image: pragueImg,
    excerpt: 'A fairytale city where Gothic spires, cobblestone streets, and medieval charm create pure magic.',
    featured: true,
    coffeeCulture: false,
    content: {
      intro: 'Prague feels like walking through a storybook. The Old Town Square, with its astronomical clock and colorful buildings, is just the beginning of this city\'s enchantment.',
      culture: 'The Czech people have preserved their cultural heritage beautifully while embracing modern creativity. From traditional pubs serving excellent beer to contemporary art galleries, Prague offers layers of discovery.',
      highlights: [
        'Charles Bridge at sunrise',
        'Astronomical Clock in Old Town Square',
        'Prague Castle complex',
        'Hidden courtyards and secret gardens'
      ],
      quote: 'Prague reminded me that some places are so beautiful, they almost don\'t seem real—yet they are, and they\'re waiting to be explored.'
    }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    region: 'Asia',
    image: mumbaiImg,
    excerpt: 'India\'s maximum city pulses with energy, blending colonial heritage with modern ambition.',
    featured: false,
    coffeeCulture: false,
    content: {
      intro: 'Mumbai is sensory overload in the best way possible. This city never sleeps, never slows down, and never fails to surprise. It\'s chaotic, colorful, and completely captivating.',
      culture: 'The spirit of Mumbai lies in its contrasts—luxury high-rises next to historic neighborhoods, street food vendors near fine dining, Bollywood glamour alongside everyday hustle. The people are warm, resilient, and always ready to help a lost traveler.',
      highlights: [
        'Gateway of India and colonial architecture',
        'Street food adventures in Chowpatty',
        'Colorful markets and bazaars',
        'Marine Drive sunset walks'
      ],
      quote: 'Mumbai taught me that chaos can be beautiful, and that in the midst of millions, you can still find moments of genuine human connection.'
    }
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    region: 'North America',
    image: torontoImg,
    excerpt: 'A multicultural metropolis where world-class coffee shops meet diverse neighborhoods and lakefront views.',
    featured: true,
    coffeeCulture: true,
    content: {
      intro: 'Toronto surprised me with its diversity and energy. It\'s a city where over 140 languages are spoken, where every neighborhood has its own character, and where innovation and tradition coexist beautifully.',
      culture: 'The coffee scene in Toronto is world-class, with specialty roasters and cafés that rival any major city. Beyond coffee, the multicultural food scene is incredible—you can travel the world through Toronto\'s restaurants.',
      highlights: [
        'Specialty coffee shops in Queen West',
        'Diverse neighborhoods like Kensington Market',
        'CN Tower and waterfront',
        'Art galleries and cultural institutions'
      ],
      quote: 'Toronto showed me that a city\'s greatest strength lies in its diversity, and that the best coffee conversations happen when different cultures meet.'
    }
  },
  {
    id: 'banff',
    name: 'Banff',
    country: 'Canada',
    region: 'North America',
    image: banffImg,
    excerpt: 'Nature\'s masterpiece where turquoise lakes meet snow-capped peaks in the Canadian Rockies.',
    featured: true,
    coffeeCulture: false,
    content: {
      intro: 'Banff took my breath away—literally and figuratively. The mountain air, the impossibly blue lakes, the towering peaks... this place redefines natural beauty.',
      culture: 'Despite being a small mountain town, Banff has a vibrant community of outdoor enthusiasts, artists, and dreamers. The connection to nature here isn\'t just recreational—it\'s spiritual.',
      highlights: [
        'Lake Louise and Moraine Lake',
        'Mountain hiking trails',
        'Wildlife encounters',
        'Cozy mountain lodges'
      ],
      quote: 'In Banff, I learned that sometimes the most profound conversations are the ones we have with nature, in complete silence.'
    }
  },
  {
    id: 'tulum',
    name: 'Tulum',
    country: 'Mexico',
    region: 'Central America',
    image: tulumImg,
    excerpt: 'Ancient Mayan ruins perched above Caribbean beaches create a mystical coastal paradise.',
    featured: false,
    coffeeCulture: false,
    content: {
      intro: 'Tulum is where ancient history meets bohemian beach culture. The Mayan ruins overlooking the turquoise sea create a backdrop so stunning it doesn\'t seem real.',
      culture: 'There\'s a unique energy in Tulum—spiritual yet playful, eco-conscious yet indulgent. The wellness culture here is authentic, and the community values sustainability and connection to the land.',
      highlights: [
        'Mayan ruins with ocean views',
        'Cenotes for swimming',
        'Eco-chic beach clubs',
        'Fresh ceviche and local cuisine'
      ],
      quote: 'Tulum reminded me that the best luxury isn\'t opulence—it\'s simplicity, connection to nature, and moments of pure presence.'
    }
  },
  {
    id: 'cancun',
    name: 'Cancun',
    country: 'Mexico',
    region: 'Central America',
    image: cancunImg,
    excerpt: 'Pristine beaches and crystal-clear Caribbean waters make this a tropical paradise.',
    featured: false,
    coffeeCulture: false,
    content: {
      intro: 'Cancun is pure Caribbean bliss. The water is so clear and blue it looks photoshopped, and the white sand beaches stretch for miles.',
      culture: 'Beyond the resort zone, local Cancun reveals authentic Mexican culture, delicious street food, and warm, welcoming people. The nearby Mayan sites add historical depth to the beach paradise.',
      highlights: [
        'Pristine white sand beaches',
        'World-class snorkeling and diving',
        'Nearby Mayan archaeological sites',
        'Vibrant nightlife and restaurants'
      ],
      quote: 'Cancun taught me that sometimes you just need to relax, float in turquoise water, and let the world spin without you for a while.'
    }
  },
  {
    id: 'warsaw',
    name: 'Warsaw',
    country: 'Poland',
    region: 'Europe',
    image: warsawImg,
    excerpt: 'A phoenix risen from ashes, blending reconstructed old-world charm with modern vitality.',
    featured: false,
    coffeeCulture: false,
    content: {
      intro: 'Warsaw\'s story of resilience moved me deeply. This city was nearly destroyed in WWII, yet it rebuilt itself beautifully, recreating the Old Town so perfectly it\'s now a UNESCO World Heritage site.',
      culture: 'The Polish spirit of perseverance is palpable here. Modern Warsaw is creative, energetic, and forward-thinking, while still honoring its complex history. The café culture is growing, with young entrepreneurs opening exciting new spaces.',
      highlights: [
        'Reconstructed Old Town Square',
        'Łazienki Park and Palace',
        'Contemporary art scene',
        'Traditional Polish cuisine'
      ],
      quote: 'Warsaw showed me that cities, like people, can overcome incredible adversity and emerge stronger, more beautiful, and more determined than ever.'
    }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Asia',
    image: jaipurImg,
    excerpt: 'The Pink City dazzles with ornate palaces, vibrant bazaars, and royal Rajasthani heritage.',
    featured: true,
    coffeeCulture: false,
    content: {
      intro: 'Jaipur is a feast for the senses. The pink buildings, ornate palaces, and colorful markets create an atmosphere that\'s both regal and vibrantly alive.',
      culture: 'Rajasthani culture is rich with tradition—from intricate handicrafts to royal architecture to flavorful cuisine. The hospitality here is legendary, and every interaction feels like a warm welcome into someone\'s home.',
      highlights: [
        'Hawa Mahal (Palace of Winds)',
        'Amber Fort and Palace',
        'Vibrant textile markets',
        'Traditional Rajasthani cuisine'
      ],
      quote: 'Jaipur taught me that true luxury isn\'t about wealth—it\'s about the richness of culture, the warmth of hospitality, and the beauty of craftsmanship.'
    }
  },
  {
    id: 'calgary',
    name: 'Calgary',
    country: 'Canada',
    region: 'North America',
    image: calgaryImg,
    excerpt: 'Western spirit meets urban sophistication with the Rockies as a stunning backdrop.',
    featured: false,
    coffeeCulture: false,
    content: {
      intro: 'Calgary surprised me with its blend of Western heritage and modern cosmopolitan energy. The city skyline against the Rocky Mountains is a sight I\'ll never forget.',
      culture: 'The Calgary Stampede might be what the city is famous for, but there\'s so much more—a thriving arts scene, excellent restaurants, and incredibly friendly people. The proximity to the mountains means outdoor adventure is always just a drive away.',
      highlights: [
        'Rocky Mountain views',
        'Calgary Tower panoramas',
        'Stephen Avenue walkway',
        'Gateway to mountain adventures'
      ],
      quote: 'Calgary reminded me that the best cities are those that offer both urban excitement and easy access to nature\'s grandeur.'
    }
  }
];
