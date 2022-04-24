/**
 * bounce animation
 * @param {HTMLElement} app app element 
 * @param {HTMLElement} main main element 
 * @param {HTMLElement} element text element 
 * @param {string} message 
 */
 const scale = (app, main, element, message) => {
  const duration = 0.7
  const animation = `scale ${duration}s cubic-bezier(.61,.7,.49,1.24) {0} forwards`

  for (let i = 0; i < message.length; i++) {
    const delay = i / 10

    const item = document.createElement('span')
    item.innerText = message[i]
    item.style.animation = animation.replace('{0}', `${delay}s`)

    element.appendChild(item)
  }

  app.appendChild(element)
  app.classList.add('app-gragient')
  element.classList.add('scale')

  main.classList.add('background-black')
}

export default scale