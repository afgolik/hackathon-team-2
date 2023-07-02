import {Module} from '../core/module'

export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.randomText = ['Hakaton team#2','I love JS','HTML','CSS','Привет проверяющий!','React']
    }

    trigger() {
    
      let text = this.randomText[Math.floor(Math.random()*this.randomText.length)]
        function getRandomIntLeft(max) {
          return Math.floor(Math.random() * max)
        }
        let marginLeft = getRandomIntLeft(900)
        function getRandomIntBottom(max) {
          return Math.floor(Math.random() * max)
        }
        let marginBottom = getRandomIntBottom(50)
        function getRandomIntTop(max) {
          return Math.floor(Math.random() * max)
        }
        let marginTop = getRandomIntTop(500)
        
    const div = document.createElement(`div`)
      div.classList.add('custom-text')
      div.style.border = 'solid grey 2px'
      div.style.textAlign = 'center'
      div.style.padding = '5px'
      div.style.position = 'absolute'
      div.style.borderRadius = '5px'
      div.style.marginBottom = `${marginBottom}px`
      div.style.marginLeft = `${marginLeft}px`
      div.style.marginTop = `${marginTop}px`
      div.textContent = text
    document.body.append(div)
    setTimeout(function(){div.remove()},2000)

}}