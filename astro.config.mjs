import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ricardodev.pro",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  experimental: {
    optimizeHoistedScript: true,
  },
});
