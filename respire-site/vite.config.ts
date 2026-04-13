import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel/vite";
import { getVercelEntries } from "vite-plugin-vercel";

const entries = await getVercelEntries("endpoints/api", { destination: "api" });

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vercel({
      entries,
      rewrites: [
        {
          source: "/((?!api/).*)",
          destination: "/index.html",
        },
      ],
    }),
  ],
});
