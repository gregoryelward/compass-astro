import sendAnalyticsEvent from './analytics'
export default function feedback() {
  try {
    document.querySelectorAll('.js-feedback--answer').forEach((link) => {
      link.addEventListener('click', function (event) {
        const yesButton = document.querySelector('.js-feedback--answer-yes')
        const noButton = document.querySelector('.js-feedback--answer-no')
        const yesResponse = document.querySelector('.js-feedback--response-yes')
        const noResponse = document.querySelector('.js-feedback--response-no')

        if (event.target === yesButton) {
          yesResponse.classList.add('feedback--response__visible')
        } else {
          noResponse.classList.add('feedback--response__visible')
        }

        const feebackvalue = event.target.getAttribute('aria-label')

        if (feebackvalue) {
          sendAnalyticsEvent({
            event: 'feedback',
            answer: feebackvalue
          })

          yesButton.disabled = true
          noButton.disabled = true
        }
      })
    })
  } catch {}
}
