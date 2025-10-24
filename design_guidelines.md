# Design Guidelines: Saniya's Travel Blog

## Design Approach

**Selected Approach**: Reference-Based (Travel/Photography)  
**Primary References**: Airbnb (elegance, spacing), Medium (reading experience), National Geographic Travel (visual storytelling)  
**Design Principles**: Soothing elegance through generous whitespace, visual-first storytelling, effortless navigation, breathing room for content

---

## Typography System

**Primary Font**: Playfair Display (headers, elegant serif for destination names)  
**Secondary Font**: Inter (body text, clean sans-serif for readability)  
**Accent Font**: Cormorant Garamond (pull quotes, special highlights)

**Type Scale**:
- Hero Headlines: text-6xl md:text-7xl lg:text-8xl (Playfair Display, font-light)
- Page Titles: text-4xl md:text-5xl lg:text-6xl (Playfair Display, font-normal)
- Section Headers: text-3xl md:text-4xl (Playfair Display, font-normal)
- Blog Post Titles: text-2xl md:text-3xl (Playfair Display, font-medium)
- Subheadings: text-xl md:text-2xl (Inter, font-medium)
- Body Text: text-base md:text-lg (Inter, font-normal, leading-relaxed)
- Captions: text-sm (Inter, font-light, italic)
- Navigation: text-sm tracking-wide uppercase (Inter, font-medium)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32  
**Common Patterns**: p-8, p-12, p-16 for sections; gap-6, gap-8 for grids; mb-8, mb-12 for vertical rhythm

**Container Strategy**:
- Full-width hero sections with inner max-w-7xl
- Reading content: max-w-4xl for optimal readability
- Blog listings: max-w-6xl
- Navigation: max-w-7xl

**Grid Patterns**:
- Destination cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Photo galleries: Masonry-style grid with varying heights
- Featured destinations: 2-column asymmetric layouts (60/40 split)

---

## Component Library

### Navigation
- Fixed transparent header that becomes solid on scroll
- Logo/Name on left: "Saniya's Wanderlust" in Playfair Display
- Horizontal menu: Home, Destinations (dropdown), Coffee Culture, About, Contact
- Hamburger menu on mobile with full-screen elegant overlay
- Smooth scroll behavior throughout

### Homepage
- **Hero Section**: Full-bleed image (Vienna coffeehouse or scenic travel shot), height 90vh
  - Centered overlay with name in large Playfair Display
  - Tagline: "Exploring Culture, One City at a Time"
  - Subtle scroll indicator at bottom
- **Featured Destinations Grid**: 3-column masonry layout showcasing 6 featured cities
  - Large card format with image, city name overlay, brief description
  - Hover reveals "Read More" with subtle zoom effect on image
- **Coffee Culture Highlight**: 2-column section with atmospheric coffee shop image and text about Saniya's coffee journey
- **Recent Stories**: 2-column blog preview cards

### Destination Blog Pages
- **Hero Image**: Full-width, 60vh height with city name overlaid
- **Content Layout**: Single column max-w-4xl with generous margins
- **Photo Gallery Section**: 3-column grid transitioning to masonry for varied heights
- **Culture Highlights**: Pull quotes in Cormorant Garamond, text-2xl, with decorative quotation marks
- **Experience Blocks**: Card-style sections with icon, title, description (Food, People, Architecture, Hidden Gems)
- **Navigation**: Previous/Next destination at bottom with thumbnail previews

### About Me Page
- **Hero Introduction**: 2-column layout (40/60) - stunning portrait photo left, bio text right
- **Travel Philosophy Section**: Full-width with centered text max-w-3xl
- **Photo Gallery**: Asymmetric 3-column grid with 5-7 travel moments, varying heights
- **Social Media Links**: Horizontal icon row (Instagram, Pinterest, Facebook) with elegant hover states
- **Message/Contact Form**: Single column max-w-2xl
  - Name, Email, Message fields with elegant underline-style inputs
  - Submit button with refined styling

### Coffee Culture Section
- **Hero**: Atmospheric coffee shop image, 70vh
- **City Spotlights**: Alternating 2-column layouts (image-text, text-image) for Vienna, Toronto, and other coffee cities
- **Gallery**: 4-column grid of coffee culture photos

### Global Components
- **Blog Cards**: Vertical format with 16:9 image, city name, excerpt, "Read More" link
- **Photo Captions**: Below images in italic text-sm with subtle separator line
- **Section Dividers**: Minimal decorative elements (thin lines, small ornamental symbols)
- **Footer**: 3-column layout - About snippet, Quick Links, Social Media. Newsletter signup optional.
- **CTA Buttons**: Pill-shaped with subtle shadow, uppercase tracking-wide text

---

## Animations

Use sparingly for elegance:
- Smooth scroll behavior (scroll-smooth)
- Image fade-in on scroll (intersection observer)
- Gentle hover lift on cards (transform translateY -2px)
- Navigation menu smooth slide-in
- NO: parallax, complex scroll animations, distracting transitions

---

## Images

**Hero Images** (Large, atmospheric):
- Homepage: Scenic European cityscape or intimate coffee shop moment
- Vienna: Historic coffeehouse interior
- Budapest: Danube riverfront at golden hour
- Prague: Charles Bridge or Old Town Square
- Each destination: Iconic landmark or cultural scene
- About Page: Professional portrait in travel setting

**Supporting Images**:
- Destination galleries: 8-12 photos per city (architecture, food, people, landscapes)
- Coffee culture: Close-ups of coffee, café interiors, latte art
- About page gallery: Personal travel moments (5-7 varied shots)

**Image Treatment**:
- Maintain natural aspect ratios, avoid forced crops
- Use subtle shadows on standalone images
- Gallery images should have consistent border-radius (rounded-lg)
- Hero images: Full-bleed, no borders
- Buttons on images: Implement backdrop-blur-sm with semi-transparent background

---

## Accessibility & Polish

- All images with descriptive alt text
- Focus states with visible outlines
- Semantic HTML structure (article, section, nav)
- Form labels properly associated
- Keyboard navigation fully supported
- Readable contrast in all text overlays on images
- Consistent spacing rhythm maintaining vertical flow
- Mobile-first responsive design with thoughtful breakpoints