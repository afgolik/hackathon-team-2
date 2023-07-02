import {random} from '../utils'
import {BackgroundModule} from './background.module'

export class ShapeModule extends BackgroundModule {

    constructor(type, text) {
        super(type, text)
        this.random = random
    }

    trigger() {
        const shape = document.createElement('div')
        const sizeX = this.random(2, 200)
        const sizeY = this.random(2, 200)
        const {width, height} = document.body.getBoundingClientRect()
        const x = this.random(0, width - sizeX)
        const y = this.random(0, height - sizeY)
        const raduis = this.random(0, 100)

        shape.style.position = 'absolute'
        shape.style.width = `${sizeX}px`
        shape.style.height = `${sizeY}px`
        shape.style.top = `${y}px`
        shape.style.left = `${x}px`
        shape.style.borderRadius = `${raduis}%`
        shape.style.backgroundColor = super.randomColor()

        document.body.append(shape)
        setTimeout(function() {shape.remove()}, 3000)
    }
}