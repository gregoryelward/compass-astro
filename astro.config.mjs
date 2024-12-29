import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://realtorjian.ca',
  // site: 'https://prospercanada.github.io',
  //
  // base: '/compass-astro/',
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  // base: process.env.NODE_ENV === 'production' ? '/compass-astro/' : '/',
  // trailingSlash: "always",
  vite: {
    build: {
      rollupOptions: {
        external: [/public\//] // Skip files in the public folder
      }
    }
  },
  integrations: [
    sitemap({
      // changefreq: 'weekly',
      // priority: 0.7,
      lastmod: new Date('2023-01-01'),
      i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-CA', // The `defaultLocale` value must present in `locales` keys
          fr: 'fr-CA'
        }
      }
    })
  ]
})
// https://gregoryelward.github.io/trove-astro/

// export default defineConfig({
//   integrations: [icon()],
// });

// export default defineConfig({
//   output: "server",
//   //   adapter: netlify(),
//   //   integrations: [tailwind()],
// });
