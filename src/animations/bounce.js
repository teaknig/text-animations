/**
 * bounce animation
 * @param {HTMLElement} app main element 
 * @param {HTMLElement} element text element 
 * @param {string} message 
 */
const bounce = (app, element, message) => {
  const duration = 0.7
  const animation = `bounce ${duration}s cubic-bezier(.14,.99,.57,1.44) {0}`

  for (let i = 0; i < message.length; i++) {
    const item = document.createElement('span')
    item.innerText = message[i]
    item.style.display = 'inline-block'
    item.style.animation = animation.replace('{0}', `0.${i}s`)
    item.style.opacity = 0

    item.addEventListener('animationstart', () => item.style.opacity = 1)
    element.appendChild(item)
  }

  app.appendChild(element)
  element.classList.add('bounce')
}

export default bounce