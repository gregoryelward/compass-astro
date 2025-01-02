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

const getLanguage = (): string =>
  document.documentElement.getAttribute('lang') || 'en-CA'

const setMode = (isDarkMode: boolean): void => {
  const language = getLanguage()
  const toggles =
    document.querySelectorAll<HTMLButtonElement>('.js--theme-toggle')

  if (isDarkMode) {
    document.body.classList.add('dark-theme')
    document.body.classList.remove('light-theme')
    toggles.forEach((toggle) => {
      toggle.setAttribute('aria-pressed', 'true')
      toggle.innerHTML = `${translations[language].darkmode}&nbsp<span><span></span></span>`
    })
  } else {
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')
    toggles.forEach((toggle) => {
      toggle.setAttribute('aria-pressed', 'false')
      toggle.innerHTML = `${translations[language].lightmode}&nbsp<span><span></span></span>`
    })
  }
}

const initializeToggle = (toggle: HTMLButtonElement): void => {
  toggle.addEventListener('click', () => {
    const isDarkMode = toggle.getAttribute('aria-pressed') === 'false' // Toggle the state

    // Save the state to localStorage
    localStorage.setItem('darkmode', JSON.stringify(isDarkMode))

    // Apply the state to all toggles
    setMode(isDarkMode)
  })
}

export default function prepareThemeToggles() {
  try {
    const toggles =
      document.querySelectorAll<HTMLButtonElement>('.js--theme-toggle')

    if (toggles.length === 0) {
      console.warn('No theme toggles found')
      return
    }

    // Initialize the state from localStorage
    const storedSetting = localStorage.getItem('darkmode')
    const isDarkMode = storedSetting ? JSON.parse(storedSetting) : false

    // Apply the state on page load
    setMode(isDarkMode)

    // Initialize all toggles
    toggles.forEach((toggle) => initializeToggle(toggle))
  } catch (error) {
    console.error('Error initializing theme toggles:', error)
  }
}
