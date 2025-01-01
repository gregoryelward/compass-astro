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
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${name}" aria-expanded="false" aria-controls="collapse-${name}">
                        <span>${heading.textContent}</span>
                        <span class="bi bi-dash"></span>
                    </button>
                    </h2>
                </div>

                <div id="collapse-${name}" class="collapse" aria-labelledby="#${name}" data-bs-parent="#${target.id}">
                    <div class="card-body">
                    ${wrapper.outerHTML}
                    </div>
                </div>
            </div>`

    target.innerHTML += foobar

    heading.parentNode.removeChild(heading) // ie 11
  })
}

// Key Changes:
// Replaced data-toggle with data-bs-toggle:

// Updated data-toggle="collapse" to data-bs-toggle="collapse".
// Replaced data-target with data-bs-target:

// Updated data-target="#collapse-${name}" to data-bs-target="#collapse-${name}".
// Replaced data-parent with data-bs-parent:

// Updated data-parent="#${target.id}" to data-bs-parent="#${target.id}".
// Note: Bootstrap 5 allows you to use data-bs-parent for accordion behavior, but you should ensure the parent container has the appropriate structure.
// ARIA Attributes:

// Updated aria-controls="collapse${name}" to aria-controls="collapse-${name}" for consistency.
