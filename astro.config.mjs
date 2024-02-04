import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://soyricardo.vercel.app/",
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
  ],
  experimental: {
    optimizeHoistedScript: true,
  },
});
