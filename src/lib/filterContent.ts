export function filterContent(filter: string) {
  const provinceItems = document.querySelectorAll('[data-province-filter]')

  provinceItems.forEach(function (item) {
    const province = item.getAttribute('data-province-filter')
    const htmlContainer = item as HTMLElement
    if (province === '' || province === filter) {
      htmlContainer.style.display = 'block'
      const excludeProvince = item.getAttribute('data-province-hide-filter')
      if (excludeProvince && excludeProvince.includes(filter)) {
        htmlContainer.style.display = 'none'
      } else {
        htmlContainer.style.display = 'block'
      }
    } else {
      htmlContainer.style.display = 'none'
    }
  })
}

export default function showProvincialDataOnly() {
  // check for existing province, filter accordingly
  // const userProvince = JSON.parse(localStorage.getItem('province') || '')
  const userProvince = JSON.parse(localStorage.getItem('province') || 'null')
  if (userProvince) {
    filterContent(userProvince)
  }
}
