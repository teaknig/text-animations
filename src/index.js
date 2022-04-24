import { shuffle } from './utils'

import bounce from './animations/bounce'
import scale from './animations/scale'
import smooth from './animations/smooth'
import './style.scss'

const list = [
  'Creative.',
  'Design.',
  'Motion.',
  'Future.',
  'Modern.'
]

const animations = [
  bounce,
  scale,
  smooth,
  bounce,
  scale
]

const messages = shuffle(list)

const textElement = document.createElement('h1')
const helpElement = document.createElement('p')
const main = document.getElementById('main')
const app = document.getElementById('app')

let index = 0
let timer = null

const init = () => {
  animations[index](app, main, textElement, messages[index])

  const reset = () => {
    main.classList.remove(...main.classList)
    if(main.querySelector('.help'))
      main.removeChild(helpElement)

    textElement.classList.remove(...textElement.classList)
    app.classList.remove(...app.classList)
    textElement.innerHTML = ''
    app.innerHTML = ''
  }

  const createHelp = () => {
    helpElement.classList.add('help')
    helpElement.innerHTML = `<span>☝</span><span>click!</span>`
    main.appendChild(helpElement)
  }

  textElement.addEventListener('click', () => {
    clearTimeout(timer)
    reset()

    index++
    if(index > 4) index = 0

    animations[index](app, main, textElement, messages[index])
    timer = setTimeout(createHelp, 3000)
  })

  timer = setTimeout(createHelp, 3000)
}

init()
