import Link from "next/link";
import { PHOTOS, SITE } from "@/lib/siteData";

function placeholderUrl(label: string) {
  return `https://placehold.co/960x640/E7D6C4/5D3C28?text=${encodeURIComponent(label)}`;
}

const showcase = [
  {
    title: "Matcha Latte",
    text: "The best matcha in Park Slope, whisked to order.",
    image: placeholderUrl("Matcha Latte"),
  },
  {
    title: "Fresh Croissant",
    text: "Made from scratch daily with buttery, flaky layers.",
    image: placeholderUrl("Fresh Croissant"),
  },
  {
    title: "Khachapuri",
    text: "Georgian cheese bread and a Pulse specialty.",
    image: placeholderUrl("Khachapuri"),
  },
];

const collagePhotos = [
  { src: PHOTOS.storefront, alt: "Pulse Coffee storefront" },
  { src: "/locations1.png", alt: "Pulse Coffee cafe view" },
  { src: "/new1.png", alt: "Pulse Coffee pastry and drink" },
  { src: "/new2.png", alt: "Pulse Coffee drink detail" },
  { src: "/new3.png", alt: "Pulse Coffee interior moment" },
  { src: "/new4.png", alt: "Pulse Coffee menu item" },
  { src: "/pulse.png", alt: "Pulse Coffee cafe scene" },
  { src: "/pulse.png.jpg", alt: "Pulse Coffee wide cafe view" },
  { src: "/pulses1.png", alt: "Pulse Coffee signature item" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero tea-style-hero splash-only" aria-label="Pulse Coffee hero image">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">SOUTH SLOPE, BROOKLYN</p>
          <h1 className="hero-brand-title">Pulse Coffee</h1>
          <p className="lede">Matcha, coffee, and fresh bakery in South Slope, Brooklyn</p>
        </div>
      </section>

      <section className="section container">
        <div className="hero-content-dark">
          <p className="eyebrow dark">PULSE COFFEE · SOUTH SLOPE</p>
          <h1>Minimalist cafe energy with scratch-made favorites.</h1>
          <p className="lede-dark">
            Your neighborhood spot for matcha, coffee, and scratch-made pastries in a calm, clean space with outdoor
            seating.
          </p>
          <div className="hero-actions">
            <Link className="button outline" href="/menu">
              View Menu
            </Link>
            <Link className="button dark" href="/locations">
              Find Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section container photo-collage-section" aria-label="Pulse Coffee photo collage">
        <div className="collage-shell">
          <div className="intro-band collage-intro">
            <p className="intro-kicker">Around Pulse</p>
            <h2>A quick look inside</h2>
            <p className="intro-copy">
              Built for Slow Mornings and Afternoon Pickups. Stop in for quality coffee, whisked-to-order matcha,
              samsa, crepes, and khachapuri in the heart of South Slope, Brooklyn.
            </p>
          </div>
          <div className="photo-collage-grid">
            {collagePhotos.map((photo) => (
              <figure key={photo.src} className="collage-tile">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section container intro-band">
        <p className="intro-kicker">Featured</p>
        <h2>Our Signatures</h2>
        <p className="intro-copy">
          Your neighborhood spot for matcha, coffee, and scratch-made pastries.
        </p>
      </section>

      <section className="section container product-grid">
        {showcase.map((item) => (
          <article key={item.title} className="product-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="product-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section container social-callout">
        <p className="intro-kicker">Follow Pulse Coffee</p>
        <h2>Stay Connected</h2>
        <div className="social-grid">
          <a className="social-card instagram" href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.3 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
              </svg>
            </span>
            <strong>Instagram</strong>
            <span>@pulsecoffee.nyc</span>
          </a>
        </div>
      </section>
    </main>
  );
}
