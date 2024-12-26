// const filterContent = function (filter) {
//   // show those benefits for the selected province
//   // console.log('filterContent 1')
//   const provinceItems = document.querySelectorAll('[data-province-filter]')

//   provinceItems.forEach(function (item) {
//     const province = item.getAttribute('data-province-filter')
//     if (province === '' || province === filter) {
//       item.style.display = 'block'
//       // hide benefits for the selected province CPP-D, a Federal benefit should not be shown for the Province of Quebec
//       // change GLE Apr 20, 2023.  Maybe should be hidden for certain provinces
//       const excludeProvince = item.getAttribute('data-province-hide-filter')
//       if (excludeProvince && excludeProvince.includes(filter)) {
//         item.style.display = 'none'
//       } else {
//         item.style.display = 'block'
//       }
//     } else {
//       item.style.display = 'none'
//     }
//   })
// }

// NOT IN USE
export default function showProvincialDataOnly() {
  try {
    // console.log(' called mobile showProvincialDataOnly')
    /* MOBILE PROVINCE MENU*/
    /* Set selected province
     */
    const provinceCode = JSON.parse(localStorage.getItem('province'))
    if (provinceCode) {
      const menuItems = document.querySelectorAll(
        '.dropdown-item[data-province]'
      )

      menuItems.forEach(function (item) {
        const itemProvince = item.getAttribute('data-province')
        if (itemProvince === '' || itemProvince === provinceCode) {
          item.classList.add('is-active')
        } else {
          item.classList.remove('is-active')
        }
      })
    }

    /* Add listener
     */
    const provinceList = document.querySelector(
      '#navbarDropdown-2 + .dropdown-menu'
    )

    provinceList.addEventListener('click', function (e) {
      console.log('mainmenumobile provinceList province picker called')
      e.preventDefault()
      const provinceCode = e.target.getAttribute('data-province')

      const menuItems = document.querySelectorAll(
        '.dropdown-item[data-province]'
      )

      menuItems.forEach(function (item) {
        const itemProvince = item.getAttribute('data-province')
        if (itemProvince === '' || itemProvince === provinceCode) {
          item.classList.add('is-active')
        } else {
          item.classList.remove('is-active')
        }
      })

      // TODO use observer pattern?
      localStorage.setItem('province', JSON.stringify(provinceCode))
      // filterContent(provinceCode)
    })
  } catch (error) {}
}
