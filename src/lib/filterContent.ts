import jurisdictions from './jurisdictions.json'

// console.log('jurisdictions ', jurisdictions)

export function filterContent(filter: string) {
  // console.log('filterContent 2')
  // console.log('TODO filter ', filter)
  // show those benefits for the selected province
  const provinceItems = document.querySelectorAll('[data-province-filter]')

  // console.log('provinceItems ', provinceItems)
  provinceItems.forEach(function (item) {
    const province = item.getAttribute('data-province-filter')
    // console.log(
    //   'province ',
    //   province,
    //   filter,
    //   province === filter,
    //   province === ''
    // )
    if (province === '' || province === filter) {
      // console.log(
      //   'BINGO ',
      //   province,
      //   item.getAttribute('data-province-hide-filter')
      // )
      //@ts-ignore
      item.style.display = 'block'
      // hide benefits for the selected province CPP-D, a Federal benefit should not be shown for the Province of Quebec
      // change GLE Apr 20, 2023.  Maybe should be hidden for certain provinces
      const excludeProvince = item.getAttribute('data-province-hide-filter')
      // if (excludeProvince) {
      //   console.log('exclude for ', excludeProvince)
      // }
      if (excludeProvince && excludeProvince.includes(filter)) {
        //@ts-ignore
        item.style.display = 'none'
      } else {
        //@ts-ignore
        item.style.display = 'block'
      }
    } else {
      //@ts-ignore
      item.style.display = 'none'
    }
  })
}

//@ts-ignore
function hideEmptyAgency() {
  // console.log('TODO filter agency resource page ')
  // PREACCORDION
  //   const agencyList = document.querySelectorAll('.js-accordion.benefit-agency')
  //   agencyList.forEach(function (agencyItem) {
  //     const name = agencyItem.querySelectorAll('h2')[0].innerText
  //     const agencyResources = agencyItem.querySelectorAll(
  //       '.js-accordion > [data-province-filter]'
  //     )
  //     var nodes = Array.prototype.slice.call(agencyResources)
  //     let nodeLength = nodes.filter(function (node) {
  //       return node.style.display !== 'none'
  //     }).length
  //     if (nodeLength === 0) {
  //       agencyItem.style.display = 'none'
  //     } else {
  //       agencyItem.style.display = 'block'
  //     }
  //   })
}

export default function showProvincialDataOnly() {
  console.log('CALLED', 'showProvincialDataOnly')
  // check for existing province, filter accordingly
  //@ts-ignore
  const userProvince = JSON.parse(localStorage.getItem('province'))
  // console.log('userProvince ', userProvince)
  if (userProvince) {
    filterContent(userProvince)
  }

  // Province selector - Desktop
  const provinceSelect = document.getElementById('navbarDropdown2')

  if (provinceSelect) {
    try {
      //@ts-ignore
      const provinceCode = JSON.parse(localStorage.getItem('province'))

      // console.log('province code ', provinceCode)
      if (provinceCode) {
        const language =
          document.getElementsByTagName('html')[0].getAttribute('lang') ||
          'en-CA'
        // console.log('language ', language)
        // console.log(
        //   'jurisdictions[language] ',
        //   language,
        //   // jurisdictions,
        //   jurisdictions.jurisdictions[language]
        // )
        //@ts-ignore
        provinceSelect.textContent = jurisdictions.jurisdictions[language].find(
          (j: { code: any }) => j.code === provinceCode
        ).title

        // console.log('provinceSelect.textContent ', provinceSelect.textContent)
        document
          .querySelectorAll('#navbarDropdown2 + ul.dropdown-menu li a')
          .forEach((a) => {
            if (a.getAttribute('data-province') === provinceCode) {
              a.classList.add('is-active')
              return
            }
          })
      }

      // assign province selection dropdown
      // const provinceList = document.querySelector(
      //   '#navbarDropdown2 + ul.dropdown-menu'
      // ) as HTMLElement

      // console.log('attach listener to ', provinceList)
      // provinceList.addEventListener('click', function (event) {
      //   console.log('subnav click')
      //   event.preventDefault()
      //   const targetElement = event.target
      //   //@ts-ignore
      //   const closest = targetElement?.closest('.js--sub-link')
      //   if (closest) {
      //     const provinceCode = closest.getAttribute('data-province')
      //     const provinceName = closest.text

      //     provinceList.querySelectorAll('li a').forEach((a) => {
      //       if (a.getAttribute('data-province') === provinceCode) {
      //         a.classList.add('is-active')
      //       } else {
      //         a.classList.remove('is-active')
      //       }
      //     })

      //     provinceSelect.textContent = provinceName
      //     // TODO use observer pattern?
      //     localStorage.setItem('province', JSON.stringify(provinceCode))
      //     filterContent(provinceCode)
      //   }
      // })
      //   provinceList.addEventListener('click', function (event) {
      //     event.preventDefault()
      //     const targetElement = event.target
      //     const closest = (targetElement as HTMLElement)?.closest('.js--sub-link')
      //     if (closest) {
      //       const provinceCode = closest.getAttribute('data-province')
      //       if (provinceCode) {
      //         filterContent(provinceCode)
      //       }
      //       hideEmptyAgency()
      //     }
      //   })
    } catch (error) {
      console.log('Error', error)
    }
  }
}
