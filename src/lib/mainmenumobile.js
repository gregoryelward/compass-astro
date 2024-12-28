// // NOT IN USE
// export default function showProvincialDataOnly() {
//   try {
//     // console.log(' called mobile showProvincialDataOnly')
//     /* MOBILE PROVINCE MENU*/
//     /* Set selected province
//      */
//     const provinceCode = JSON.parse(localStorage.getItem('province'))
//     if (provinceCode) {
//       const menuItems = document.querySelectorAll(
//         '.dropdown-item[data-province]'
//       )

//       menuItems.forEach(function (item) {
//         const itemProvince = item.getAttribute('data-province')
//         if (itemProvince === '' || itemProvince === provinceCode) {
//           item.classList.add('is-active')
//         } else {
//           item.classList.remove('is-active')
//         }
//       })
//     }

//     /* Add listener
//      */
//     const provinceList = document.querySelector(
//       '#navbarDropdown-2 + .dropdown-menu'
//     )

//     provinceList.addEventListener('click', function (e) {
//       console.log('mainmenumobile provinceList province picker called')
//       e.preventDefault()
//       const provinceCode = e.target.getAttribute('data-province')

//       const menuItems = document.querySelectorAll(
//         '.dropdown-item[data-province]'
//       )

//       menuItems.forEach(function (item) {
//         const itemProvince = item.getAttribute('data-province')
//         if (itemProvince === '' || itemProvince === provinceCode) {
//           item.classList.add('is-active')
//         } else {
//           item.classList.remove('is-active')
//         }
//       })

//       // TODO use observer pattern?
//       localStorage.setItem('province', JSON.stringify(provinceCode))
//       // filterContent(provinceCode)
//     })
//   } catch (error) {}
// }
