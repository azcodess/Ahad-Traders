import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import BrandMarquee from "./components/BrandMarquee/BrandMarquee.jsx";
import ProductGrid from "./components/ProductGrid/ProductGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import brands from "./data/brands.json";
import rimBrands from "./data/rim_brands.json";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandMarquee brands={brands} title="Tyre Brands We Deal In" id="brands" />
        <BrandMarquee brands={rimBrands} title="Rim Brands We Deal In" id="rim-brands" />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
