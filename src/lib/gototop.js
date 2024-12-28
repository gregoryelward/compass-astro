export default function goToTop() {
  try {
    const mybutton = document.getElementById('btnTop')

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener('click', function () {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    })
  } catch (error) {}
}
