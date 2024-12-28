export class PriorityEventDispatcher {
  constructor() {
    this.handlers = []
  }

  subscribe(callback, priority = 0) {
    this.handlers.push({ callback, priority })
    this.handlers.sort((a, b) => b.priority - a.priority)
  }

  dispatch(...args) {
    this.handlers.forEach((handler) => handler.callback(...args))
  }
}

// Shared instance
export const provinceSelectionDispatcher = new PriorityEventDispatcher()
