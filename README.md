# Collection Suites

A luxury real estate marketing website for **CollectionSuites** -- premium collector suites located in Miami and Palm Beach, Florida. Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Pages

### Home (`/`)
- Full-screen hero with luxury garage imagery
- Interactive Florida map with Palm Beach and Miami locations
- Available suites grid with pricing and details
- Location showcase sections for Miami and Palm Beach
- Contact form (Connect section)

### About Us (`/about`)
- Brand origins with vintage racing photo collage
- History and heritage narrative
- Checkered flag visual divider
- Classic cars showcase
- CollectionSuites today with call-to-action
- Team member profiles
- Press and media coverage grid
- Contact form (Connect section)

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 16 (App Router)             |
| Language     | TypeScript 5.7                      |
| UI Library   | React 19                            |
| Styling      | Tailwind CSS 4, tw-animate-css      |
| Components   | shadcn/ui, Radix UI primitives      |
| Icons        | Lucide React                        |
| Fonts        | Cinzel (headings), Montserrat (body)|
| Analytics    | Vercel Analytics                    |

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Home page
  globals.css         # Tailwind config and design tokens
  about/
    page.tsx          # About Us page

components/
  header.tsx          # Fixed navigation bar with mobile menu
  footer.tsx          # Site footer with contact info and social links
  hero-section.tsx    # Full-screen hero with overlay
  map-section.tsx     # Florida locations map
  suites-grid.tsx     # Available suites card grid
  location-section.tsx# Reusable location showcase
  contact-form.tsx    # Connect / contact form
  logo.tsx            # Diamond-shaped brand logo
  about/
    origins-section.tsx      # Photo collage grid
    history-section.tsx      # Two-column narrative
    checkered-flag.tsx       # CSS checkered pattern
    classic-cars-section.tsx # Vintage cars showcase
    today-section.tsx        # Modern brand section with CTA
    team-section.tsx         # Team member profiles
    press-section.tsx        # Press/media article grid

public/images/        # Generated hero, location, team, and vintage images
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Design System

- **Primary color**: Warm amber/brown (`oklch(0.47 0.1 55)`) for luxury accents
- **Typography**: Cinzel serif for headings, Montserrat sans-serif for body text
- **Radius**: `0rem` for sharp, architectural corners
- **Layout**: Mobile-first responsive design with `container` max-width sections

## Deployment

Deploy to Vercel with one click or via the CLI:

```bash
npx vercel
```
