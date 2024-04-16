export default function sendAnalyticsEvent(eventPayload) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(eventPayload)
}
