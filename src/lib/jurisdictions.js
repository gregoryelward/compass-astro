import jurisdictions from './jurisdictions.json'
// console.log('jurisdictions ', jurisdictions.jurisdictions)

export default function getJurisdiction(title, locale = `en-CA`) {
  //   console.log(
  //     'jurisdictions.jurisdictions[locale] ',
  //     jurisdictions.jurisdictions[locale]
  //   )
  //   return 'xx'
  // console.log(
  //   'x ',
  //   jurisdictions.jurisdictions[locale].find((f) => f.name === title)
  // )
  return jurisdictions.jurisdictions[locale].find((f) => f.name === title)
}
