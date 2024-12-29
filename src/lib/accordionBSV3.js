export default function accordion(
  target = '.js-accordion h2',
  tagName = 'H2',
  ariaLevel = 2
) {
  const getContent = (elem) => {
    let elems = []
    while (
      elem.nextElementSibling &&
      elem.nextElementSibling.tagName !== tagName
    ) {
      elems.push(elem.nextElementSibling)
      elem = elem.nextElementSibling
    }
    // Delete the old versions of the content nodes
    elems.forEach((node) => {
      node.parentNode.removeChild(node)
    })
    return elems
  }

  const headings = document.querySelectorAll(target)
  if (!headings) return

  Array.prototype.forEach.call(headings, (heading, index) => {
    const name = `${heading.id}-${index}`
    let contents = getContent(heading)

    let wrapper = document.createElement('div')
    let target = document.createElement('div')
    target.className = 'accordion accordion--small'
    target.id = name
    heading.parentNode.insertBefore(target, heading) // inserts a node before a reference node - the next heading

    contents.forEach((node) => {
      wrapper.appendChild(node)
    })

    let foobar = `<div class="card">
                <div class="card-header" id="title-${name}">
                    <h2 class="mb-0 h6" aria-level="${ariaLevel}">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse-${name}" aria-expanded="false" aria-controls="collapse${name}">
                        <span>${heading.textContent}</span>
                        <span class="bi bi-dash"></span>
                    </button>
                    </h2>
                </div>

                <div id="collapse-${name}" class="collapse" aria-labelledby="#${name}" data-parent="#${target.id}">
                    <div class="card-body">
                    ${wrapper.outerHTML}
                    </div>
                </div>
            </div>`

    target.innerHTML += foobar

    heading.parentNode.removeChild(heading) // ie 11
  })
}
