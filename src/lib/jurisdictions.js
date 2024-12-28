import jurisdictions from './jurisdictions.json'

export default function getJurisdiction(title, locale = `en-CA`) {
  return jurisdictions.jurisdictions[locale].find((f) => f.name === title)
}
