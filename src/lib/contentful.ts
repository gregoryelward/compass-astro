import contentful from 'contentful'

// console.log('import.meta.env.CONTENTFUL_SPACE_ID ',import.meta.env.CONTENTFUL_SPACE_ID)
// console.log('import.meta.env.CONTENTFUL_PREVIEW_TOKEN ',import.meta.env.CONTENTFUL_PREVIEW_TOKEN)
// console.log('import.meta.env.CONTENTFUL_DELIVERY_TOKEN ',import.meta.env.CONTENTFUL_DELIVERY_TOKEN)

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com'
})
