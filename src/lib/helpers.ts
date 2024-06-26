export default function makeUrl(
  base: string,
  locale: string,
  // name?: string,
  ...args: any[]
) {
  // locale : 'fr-CA' | 'en-CA'
  // base:  "/" | "/compass-astro"
  // name:  remove this?
  // args: [] | ["sluga" | "slugb" | ...]
  // /fr
  //

  // console.log('INPUT ', locale, base, name, [...args])

  // INPUT  en-CA how-do-i-set-up-a-my-self-serve-myss-account [ '/', 'resource' ]
  //href={`${ makeUrl(locale,
  //   b.fields?.slug as string,
  //   base,
  //   getJurisdiction(b.fields.authority, locale)?.slug)
  // }`}
  //INPUT  en-CA canada-pension-plan-disability-benefit [ 'foobar-base', undefined ]
  const slugs = args.filter((f) => f)

  // console.log('slugs 1 ', slugs)

  if (locale !== 'en-CA') {
    slugs.unshift('fr') // add
  }
  // if (base && base !== '/') {
  //   slugs.unshift(base)
  // }
  // console.log('slugs 2 ', slugs, slugs.length)

  // if (slugs.length === 0) {
  //   return `${name}`
  // }
  let url = `${base}${slugs.join('/')}`

  // if (name) {
  //   url = url + name
  // }
  // console.log('name ', url)
  return url

  // console.log('slugs 3 ', `${base}${slugs.join('/')}/${name}`)
  // return `${base}${slugs.join('/')}/${name}`
  // return `${slugs.join('/')}/${name}`
}
