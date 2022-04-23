/**
 * bounce animation
 * @param {HTMLElement} app main element 
 * @param {HTMLElement} element text element 
 * @param {string} message 
 */
const bounce = (app, element, message) => {
  const duration = 0.4
  const animation = `bounce ${duration}s cubic-bezier(.14,.99,.57,1.44) {0}`

  const innerElement = message
    .split('')
    .map(item => `<span>${item}</span>`)
    .join('')
  
  element.innerHTML = innerElement
  const spans = element.querySelectorAll('span')

  for (let i = 0; i < spans.length; i++) {
    const item = spans[i]
    item.style.display = 'inline-block'
    item.style.animation = animation.replace('{0}', `0.${i}s`)
    item.style.opacity = 0

    item.addEventListener('animationstart', () => item.style.opacity = 1)
  }

  app.appendChild(element)
  element.classList.add('bounce')
}

export default bounce