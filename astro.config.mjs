import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://realtorjian.ca',
  // site: "https://prospercanada.github.io", //
  // base: "/trove/",
  // trailingSlash: "always",
  vite: {
    build: {
      rollupOptions: {
        external: [/public\//] // Skip files in the public folder
      }
    }
  }
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
