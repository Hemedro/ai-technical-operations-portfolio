import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ai-technical-operations-portfolio/",
  server: {
    host: "127.0.0.1",
    allowedHosts: true,
  },
});
