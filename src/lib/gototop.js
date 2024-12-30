export default function goToTop() {
  const myButton = document.getElementById('btnTop')

  if (!myButton) {
    console.error('Button with ID "btnTop" not found')
    return
  }

  // Function to handle scrolling behavior
  const handleScroll = () => {
    if (window.scrollY > 500) {
      myButton.style.display = 'block'
    } else {
      myButton.style.display = 'none'
    }
  }

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Attach event listeners
  window.addEventListener('scroll', handleScroll)
  myButton.addEventListener('click', scrollToTop)

  // Cleanup function (optional, useful in SPA frameworks like React)
  // return () => {
  //   console.log('return')
  //   window.removeEventListener('scroll', handleScroll)
  //   myButton.removeEventListener('click', scrollToTop)
  // }
}

// export default function goToTop() {
//   try {
//     const mybutton = document.getElementById('btnTop')

//     // When the user scrolls down 20px from the top of the document, show the button
//     window.onscroll = function () {
//       console.log('onscroll')
//       if (
//         document.body.scrollTop > 500 ||
//         document.documentElement.scrollTop > 500
//       ) {
//         mybutton.style.display = 'block'
//       } else {
//         mybutton.style.display = 'none'
//       }
//     }

//     // When the user clicks on the button, scroll to the top of the document
//     mybutton.addEventListener('click', function () {
//       console.log('onclick')
//       document.body.scrollTop = 0 // For Safari
//       document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
//     })
//   } catch (error) {}
// }
