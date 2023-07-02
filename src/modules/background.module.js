import {Module} from '@/core/module'
import {random} from '@/utils'

export class BackgroundModule extends Module {

    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.body.style.backgroundColor = this.randomColor()
    }

    randomColor() {
        const r = random(0, 255)
        const g = random(0, 255)
        const b = random(0, 255)
        const color = `rgb(${r}, ${g}, ${b})`
        return color
    }
}