// Bygger en URL till en fil i public/ som fungerar oavsett var appen är deployad
// (t.ex. localhost root eller ett GitHub Pages-underkatalog som /journey-map/).
// import.meta.env.BASE_URL sätts av Vite utifrån `base` i vite.config.js.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
