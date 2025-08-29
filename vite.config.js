// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/image-upload-widget/", // путь на GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    lib: {
      entry: "src/ImageUpload.jsx",
      name: "ImageUpload",
      fileName: (format) => `image-upload.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@mui/icons-material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@mui/icons-material": "MaterialIcons",
        },
      },
    },
  },
});
