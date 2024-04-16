import { defineConfig } from 'astro/config'
// import icon from "astro-icon";
// import { marked } from "marked";
// https://astro.build/config
// export default defineConfig({});

let base = ''
// console.log("@@@@@@@@@@@@@@@@@@@@@process.env --> ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  // console.log("building for production");
  base = '/compass-astro/'
} // else "development"
export default defineConfig({
  site: 'https://gregoryelward.github.io', //
  base
  //   trailingSlash: "always",
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
