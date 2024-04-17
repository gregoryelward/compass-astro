export default function makeUrl(
  locale: string,
  base: string = '',
  name: string,
  ...args: any[]
) {
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
    slugs.unshift('fr')
  }
  // if (base && base !== '/') {
  //   slugs.unshift(base)
  // }
  // console.log('slugs 2 ', slugs)

  if (slugs.length === 0) {
    return `${name}`
  }

  // console.log('slugs 3 ', `/${slugs.join('/')}/${name}`)
  return `${base}${slugs.join('/')}/${name}`
  // return `${slugs.join('/')}/${name}`
}
