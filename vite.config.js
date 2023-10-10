const path = require("path");

export default {
  base: "/restaurant-css-framework-vite/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: "dist", // Le répertoire de sortie pour les fichiers construits
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/main.js"),
        index: path.resolve(__dirname, "src/index.html"),
        menu: path.resolve(__dirname, "src/Menu.html"),
        pictures: path.resolve(__dirname, "src/Onze MenuKaart.html"),
        restaurant: path.resolve(__dirname, "src/Restaurant.html"),
        contact: path.resolve(__dirname, "src/Contact.html"),
        dessert: path.resolve(__dirname, "src/Dessert.html"),
        drankenkaart: path.resolve(__dirname, "src/Drankenkaart.html"),
      },
    },
  },
};
