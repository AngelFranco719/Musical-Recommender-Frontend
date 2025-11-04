import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api":
        "http://https://spotify-backend.agreeablemushroom-8c2dff51.westus2.azurecontainerapps.io",
    },
  },
});
