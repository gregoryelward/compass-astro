export default function updateExternalLinks() {
  let main = document.getElementsByTagName('main')
  let thelinks = main[0].getElementsByTagName('a')

  if (thelinks.length > 0) {
    for (var t = 0; t < thelinks.length; t++) {
      if (
        thelinks[t].getAttribute('href') &&
        thelinks[t].hostname !== location.hostname &&
        (thelinks[t].target = '_blank')
      ) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        var svgNS = svg.namespaceURI
        svg.setAttribute(`aria-hidden`, `true`)
        svg.setAttribute(`viewBox`, `0 0 20 20`)
        svg.setAttribute(`width`, `16`)
        svg.setAttribute(`height`, `16`)

        var svgpath = document.createElementNS(svgNS, 'path')
        svgpath.setAttribute(`fill-rule`, `evenodd`)
        svgpath.setAttribute(
          `d`,
          `M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z`
        )

        svg.appendChild(svgpath)

        thelinks[t].setAttribute(`rel`, `noopener`)
        thelinks[t].setAttribute(`aria-describedby`, `new_window`)
        thelinks[t].appendChild(svg)
      }
    }
  }
}
