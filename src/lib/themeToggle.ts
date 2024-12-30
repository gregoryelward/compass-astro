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

// const translations: Record<string, Record<string, string>> = {
//   'en-CA': {
//     lightmode: 'Light mode',
//     darkmode: 'Dark mode'
//   },
//   'fr-CA': {
//     lightmode: 'Mode lumière',
//     darkmode: 'Mode sombre'
//   }
// }

// const getLanguage = (): string =>
//   document.documentElement.getAttribute('lang') || 'en-CA'

// const setMode = (target: HTMLButtonElement, isDarkMode: boolean): void => {
//   const language = getLanguage()

//   if (isDarkMode) {
//     document.body.classList.add('dark-theme')
//     document.body.classList.remove('light-theme')
//     target.setAttribute('aria-pressed', 'true')
//     target.innerHTML = `${translations[language].darkmode}&nbsp<span><span></span></span>`
//   } else {
//     document.body.classList.add('light-theme')
//     document.body.classList.remove('dark-theme')
//     target.setAttribute('aria-pressed', 'false')
//     target.innerHTML = `${translations[language].lightmode}&nbsp<span><span></span></span>`
//   }
// }

// const initializeToggle = (toggle: HTMLButtonElement): void => {
//   toggle.addEventListener('click', (e) => {
//     const currentState = toggle.getAttribute('aria-pressed') === 'true'
//     const isDarkMode = !currentState // Toggle the state

//     localStorage.setItem('darkmode', JSON.stringify(isDarkMode))
//     setMode(toggle, isDarkMode)
//   })

//   // Initialize toggle state from localStorage
//   const storedSetting = localStorage.getItem('darkmode')
//   const isDarkMode = storedSetting ? JSON.parse(storedSetting) : false

//   setMode(toggle, isDarkMode)
// }

// export default function prepareThemeToggles() {
//   try {
//     const toggles =
//       document.querySelectorAll<HTMLButtonElement>('.js--theme-toggle')

//     toggles.forEach((toggle) => initializeToggle(toggle))
//   } catch (error) {
//     console.error('Error initializing theme toggles:', error)
//   }
// }

// const translations: Record<string, Record<string, string>> = {
//   'en-CA': {
//     lightmode: 'Light mode',
//     darkmode: 'Dark mode'
//   },
//   'fr-CA': {
//     lightmode: 'Mode lumière',
//     darkmode: 'Mode sombre'
//   }
// }

// const setMode = function (target: HTMLButtonElement, isDarkMode: boolean) {
//   const language =
//     document.getElementsByTagName('html')[0].getAttribute('lang') || 'en-CA'

//   if (!isDarkMode) {
//     document.body.classList.add('light-theme')
//     target.setAttribute('aria-pressed', 'true')
//     target.innerHTML = `${translations[language].lightmode}&nbsp<span><span></span></span>`
//   } else {
//     document.body.classList.remove('light-theme')
//     target.setAttribute('aria-pressed', 'false')
//     target.innerHTML = `${translations[language].darkmode}&nbsp<span><span></span></span>`
//   }
// }

// export default function prepareThemeToggle() {
//   try {
//     const themeToggle = document.getElementById(
//       'js--theme-toggle'
//     ) as HTMLButtonElement

//     if (themeToggle) {
//       themeToggle.addEventListener('click', function (e) {
//         const currentState = (
//           e.currentTarget as HTMLButtonElement
//         ).getAttribute('aria-pressed')
//         const isDarkMode = currentState === 'true' ? true : false

//         localStorage.setItem('darkmode', JSON.stringify(isDarkMode))
//         setMode(themeToggle, isDarkMode)
//       })
//     }

//     const setting = JSON.parse(
//       window?.localStorage?.getItem('darkmode') || 'false'
//     ) as boolean

//     const isDarkMode = setting
//     setMode(themeToggle, isDarkMode)
//   } catch (error) {
//     console.log('Error', error)
//   }
// }
