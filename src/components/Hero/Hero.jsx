import "./Hero.css";

// Swap this URL to replace the single image shown in the hero.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2200&q=90";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Ahad Traders tyre shop">
      <img
        className="hero-image"
        src={HERO_IMAGE}
        alt="Tyre and wheel at an automotive workshop"
        fetchpriority="high"
      />
    </section>
  );
}
