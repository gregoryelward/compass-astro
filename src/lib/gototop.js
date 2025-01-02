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
}
