import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "../../assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@utils": path.resolve("./src/utils"),
      "@src": path.resolve("./src"),
    },
  },
  build:{
    chunkSizeWarningLimit:1000,
    rollupOptions:{
      output:{
        manualChunks:{
          react:['react' , 'react-dom'],
          
        }
      }
    }
  }
});
