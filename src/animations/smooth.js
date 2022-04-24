/**
 * bounce animation
 * @param {HTMLElement} app app element 
 * @param {HTMLElement} main main element 
 * @param {HTMLElement} element text element 
 * @param {string} message 
 */
const smooth = (app, main, element, message) => {  
  let duration = message.length / 10
  const animation = `smooth ${duration}s cubic-bezier(.17,1.09,.89,.97) {0}`
  const paragraph = document.createElement('p')

  for (let i = 0; i < message.length; i++) {
    const delay = i / 10

    const item = document.createElement('span')
    item.innerText = message[i]
    item.style.display = 'inline-block'
    item.style.animation = animation.replace('{0}', `${delay}s`)
    item.style.opacity = 0

    item.addEventListener('animationstart', () => item.style.opacity = 1)
    paragraph.appendChild(item)
  }
  paragraph.style.animation = `smooth-p 0.7s cubic-bezier(.17,1.09,.89,.97) ${duration * 2}s forwards`
  
  element.classList.add('smooth')
  element.appendChild(paragraph)
  
  const background = document.createElement('h2')
  background.classList.add('h2-background')
  background.innerText = message
  background.style.animation = `smooth-h2 0.7s cubic-bezier(.17,1.09,.89,.97) forwards`
  
  app.appendChild(element)

  paragraph.addEventListener('animationstart', (e) => {
    if(e.target.tagName === 'P') app.appendChild(background)
  })

  main.classList.add('background-yellow')
}

export default smooth