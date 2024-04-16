export default function makeUrl(locale: string, name: string, ...args: any[]) {
  const slugs = args.filter((f) => f)

  if (locale !== 'en-CA') {
    slugs.unshift('fr')
  }

  if (slugs.length === 0) {
    return `${name}`
  }

  return `/${slugs.join('/')}/${name}`
  // return `${slugs.join('/')}/${name}`
}
