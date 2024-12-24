const translations: Record<string, Record<string, string>> = {
  'en-CA': {
    lightmode: 'Light mode',
    darkmode: 'Dark mode'
  },
  'fr-CA': {
    lightmode: 'Mode lumière',
    darkmode: 'Mode sombre'
  }
}

const setMode = function (target: HTMLButtonElement, isDarkMode: boolean) {
  const language =
    document.getElementsByTagName('html')[0].getAttribute('lang') || 'en-CA'

  // console.log('setMode isDarkMode', isDarkMode)
  if (!isDarkMode) {
    document.body.classList.add('light-theme')
    // console.log('add light-theme')
    target.setAttribute('aria-pressed', 'true')
    target.innerHTML = `${translations[language].lightmode}&nbsp<span><span></span></span>`
  } else {
    document.body.classList.remove('light-theme')
    // console.log('remove light-theme')
    target.setAttribute('aria-pressed', 'false')
    target.innerHTML = `${translations[language].darkmode}&nbsp<span><span></span></span>`
  }
}

export default function prepareThemeToggle() {
  try {
    const themeToggle = document.getElementById(
      'js--theme-toggle'
    ) as HTMLButtonElement

    // console.log('themeToggle ', themeToggle)
    if (themeToggle) {
      themeToggle.addEventListener('click', function (e) {
        const currentState = (
          e.currentTarget as HTMLButtonElement
        ).getAttribute('aria-pressed')
        const isDarkMode = currentState === 'true' ? true : false

        localStorage.setItem('darkmode', JSON.stringify(isDarkMode))
        setMode(themeToggle, isDarkMode)
      })
    }

    const setting = JSON.parse(
      window?.localStorage?.getItem('darkmode') || 'false'
    ) as boolean
    // console.log('setting ', typeof setting, setting)

    const isDarkMode = setting //=== true' ? true : false
    // console.log('Calling setMode ', isDarkMode)
    setMode(themeToggle, isDarkMode)
  } catch (error) {
    console.log('Error', error)
  }
}
