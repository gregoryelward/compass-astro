import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: 'https://realtorjian.ca',
  site: 'https://prospercanada.github.io',
  //
  // base: '/compass-astro/',
  base: process.env.NODE_ENV === 'production' ? '/compass-astro/' : '/',
  // trailingSlash: "always",
  vite: {
    build: {
      rollupOptions: {
        external: [/public\//] // Skip files in the public folder
      }
    }
  },
  integrations: [sitemap()]
});
// https://gregoryelward.github.io/trove-astro/

// export default defineConfig({
//   integrations: [icon()],
// });

// export default defineConfig({
//   output: "server",
//   //   adapter: netlify(),
//   //   integrations: [tailwind()],
// });