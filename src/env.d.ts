/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// If you would like to have IntelliSense for your Contentful environment variables, you can create a env.d.ts file in the src/ directory and configure ImportMetaEnv like this:

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
}