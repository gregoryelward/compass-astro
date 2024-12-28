export default function makeUrl(base: string, locale: string, ...args: any[]) {
  const slugs = args.filter((f) => f)

  if (locale !== 'en-CA') {
    slugs.unshift('fr')
  }

  let url = `${base}${slugs.join('/')}`

  return url
}
