import { useState } from "react";
import "./BrandMarquee.css";

function BrandTrack({ brands, direction, label }) {
  const trackItems = [...brands, ...brands];

  return (
    <div className={`marquee-window marquee-${direction}`} aria-label={label}>
      <div className="marquee-track">
        {trackItems.map((brand, index) => (
          <BrandCard
            key={`${brand.id}-${index}`}
            brand={brand}
            duplicate={index >= brands.length}
          />
        ))}
      </div>
    </div>
  );
}

function BrandCard({ brand, duplicate }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="brand-card" aria-hidden={duplicate ? "true" : undefined}>
      {!imageFailed && (
        <img
          src={brand.logo}
          alt=""
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}
      <span className={imageFailed ? "brand-name-fallback" : ""}>{brand.name}</span>
    </div>
  );
}

export default function BrandMarquee({ brands, title, id }) {
  const middle = Math.ceil(brands.length / 2);
  const firstRow = brands.slice(0, middle);
  const secondRow = brands.slice(middle).reverse();
  const headingId = `${id}-title`;

  return (
    <section className="brands-section" id={id} aria-labelledby={headingId}>
      <div className="section-shell">
        <div className="brands-heading">
          <p className="eyebrow">Reliable names, ready for the road</p>
          <h2 className="section-heading" id={headingId}>{title}</h2>
          <div className="gradient-underline" />
        </div>
      </div>
      <div className="brand-marquees">
        <BrandTrack brands={firstRow} direction="left-to-right" label={`${title}, first strip`} />
        <BrandTrack brands={secondRow} direction="right-to-left" label={`${title}, second strip`} />
      </div>
    </section>
  );
}
