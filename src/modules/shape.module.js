import {random} from '@/utils'
import {BackgroundModule} from './background.module'

export class ShapeModule extends BackgroundModule {

    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const shape = document.createElement('div')
        const sizeX = random(2, 200)
        const sizeY = random(2, 200)
        const {width, height} = document.body.getBoundingClientRect()
        const x = random(0, width - sizeX)
        const y = random(0, height - sizeY)
        const radius = random(0, 100)

        shape.style.position = 'absolute'
        shape.style.width = `${sizeX}px`
        shape.style.height = `${sizeY}px`
        shape.style.top = `${y}px`
        shape.style.left = `${x}px`
        shape.style.borderRadius = `${radius}%`
        shape.style.backgroundColor = super.randomColor()

        document.body.append(shape)
        setTimeout(function() {shape.remove()}, 3000)
    }
}