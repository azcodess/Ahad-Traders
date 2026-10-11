# Ahad Traders

A responsive, static tyre and accessories catalog built with React and Vite.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Update the catalog

- Replace the hero photo URL in `src/components/Hero/Hero.jsx`.
- Replace `src/assets/logo.svg` to change the shop mark.
- Edit `src/data/brands.json` to update the brands and logo URLs.
- Add or replace rim logo images in `public/rims/`, then update the matching `/rims/<filename>` paths and brand names in `src/data/rim_brands.json`.
- Edit `src/data/products.json` to add or update products, categories, descriptions, prices, and image URLs. Prices are displayed in PKR.
- Update the contact details in the `CONTACT` object in `src/components/Footer/Footer.jsx`.

Product and brand photos are remote placeholders; replace their URLs with your own hosted images when ready.
