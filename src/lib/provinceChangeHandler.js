// src/provinceChangeHandler.js

export const postHandlerCallbacks = []

export function addPostHandlerListener(callback) {
  if (typeof callback === 'function') {
    postHandlerCallbacks.push(callback)
  } else {
    console.error('Post-handler listener must be a function.')
  }
}

export function runPostHandlerCallbacks() {
  postHandlerCallbacks.forEach((callback) => {
    try {
      console.log('runPostHandlerCallbacks callback()')
      callback()
    } catch (error) {
      console.error('Error in post-handler callback:', error)
    }
  })
}
