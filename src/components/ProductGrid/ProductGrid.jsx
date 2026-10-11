import { useState } from "react";
import products from "../../data/products.json";
import placeholder from "../../assets/product-placeholder.svg";
import "./ProductGrid.css";

const categoryOrder = ["Tyres", "Rims", "Accessories"];
const categories = [...new Set(products.map((product) => product.category))].sort(
  (first, second) => {
    const firstIndex = categoryOrder.indexOf(first);
    const secondIndex = categoryOrder.indexOf(second);
    if (firstIndex === -1 && secondIndex === -1) return first.localeCompare(second);
    if (firstIndex === -1) return 1;
    if (secondIndex === -1) return -1;
    return firstIndex - secondIndex;
  },
);
const filters = ["All", ...categories];

function ProductCard({ product }) {
  const [imageSrc, setImageSrc] = useState(product.image);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={imageSrc}
          alt={product.title}
          loading="lazy"
          onError={() => setImageSrc(placeholder)}
        />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-description" title={product.description}>
          {product.description}
        </p>
        <p className="product-price">Rs. {product.price.toLocaleString("en-PK")}</p>
      </div>
    </article>
  );
}

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <div className="section-shell">
        <div className="products-header">
          <div>
            <p className="eyebrow">Made for every mile</p>
            <h2 className="section-heading" id="products-title">Accessories</h2>
            <div className="gradient-underline" />
          </div>
          <p className="products-intro">
            Find quality road essentials from trusted names, all in one place.
          </p>
        </div>

        <div className="product-filters" role="group" aria-label="Filter products">
          {filters.map((filter) => (
            <button
              className={activeFilter === (filter === "All" ? "all" : filter) ? "is-active" : ""}
              key={filter}
              type="button"
              aria-pressed={activeFilter === (filter === "All" ? "all" : filter)}
              onClick={() => setActiveFilter(filter === "All" ? "all" : filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
