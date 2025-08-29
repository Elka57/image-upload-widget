// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isSite = process.env.BUILD_SITE === "true";

export default defineConfig({
  base: isSite ? "/image-upload-widget/" : undefined,
  plugins: [react()],
  build: isSite
    ? {
        outDir: "dist-site",
        rollupOptions: { input: "index.html" },
      }
    : {
        lib: {
          entry: "src/ImageUpload.jsx",
          name: "ImageUpload",
          fileName: (fmt) => `image-upload.${fmt}.js`,
        },
        rollupOptions: {
          external: [
            "react",
            "react-dom",
            "@mui/material",
            "@mui/icons-material",
          ],
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
