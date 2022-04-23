import { shuffle } from './utils'

import bounce from './animations/bounce'
import './style.scss'

const list = [
  'Creative.',
  'Design.',
  'Motion.',
  'Future.',
  'Style.'
]

const messages = shuffle(list)

const textElement = document.createElement('h1')
const app = document.getElementById('app')

bounce(app, textElement, messages[0])
