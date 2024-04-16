export default function help() {
  try {
    const helpPopup = document.getElementById('need-help')
    const helpPopupHide = JSON.parse(sessionStorage.getItem('hidehelp'))

    if (helpPopupHide) {
      helpPopup.hidden = true
    }

    const button = helpPopup.getElementsByTagName('button')[0]

    button.addEventListener('click', function () {
      sessionStorage.setItem('hidehelp', JSON.stringify(true))
      helpPopup.hidden = true
    })
  } catch (error) {}
}
