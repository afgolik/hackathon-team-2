import {Module} from '../core/module'
import {random} from '../utils'

export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.randomText = ['Hakaton team#2','I love JS','HTML','CSS','Привет проверяющий!','React']
        this.random = random
    }

    trigger() {
    
    const randomIndexText = this.random(0, this.randomText.length - 1)
    const text = this.randomText[randomIndexText]
    const div = document.createElement('div')

    const {width, height} = document.body.getBoundingClientRect()
    const x = random(0, width - 50)
    const y = random(0, height - 200)
        
    div.classList.add('custom-text')
    div.style.border = 'solid grey 2px'
    div.style.textAlign = 'center'
    div.style.padding = '5px'
    div.style.position = 'absolute'
    div.style.borderRadius = '5px'
    div.style.top = `${y}px`
    div.style.left = `${x}px`
    div.textContent = text
    document.body.append(div)
    setTimeout(function() {div.remove()}, 2000)
  }
}