import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {

    constructor() {
        super(type, text)
        this.random = random
    }

    trigger() {
        const r = this.random(0, 255)
        const g = this.random(0, 255)
        const b = this.random(0, 255)
        const color = `rgb(${r}, ${g}, ${b})`
        document.body.style.backgroundColor = color
    }

    // toHTML() {}
}