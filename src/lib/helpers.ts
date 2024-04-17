export default function makeUrl(locale: string, name: string, ...args: any[]) {
  // console.log('INPUT ', locale, name, [...args])

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
  // console.log('slugs 2 ', slugs)

  if (slugs.length === 0) {
    return `${name}`
  }

  // console.log('slugs 3 ', `/${slugs.join('/')}/${name}`)
  return `/${slugs.join('/')}/${name}`
  // return `${slugs.join('/')}/${name}`
}
