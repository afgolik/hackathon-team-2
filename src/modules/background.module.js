import {Module} from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
    #random

    constructor() {
        this.#random = random
    }

    trigger() {
        r = random(0, 255)
        g = random(0, 255)
        b = random(0, 255)
        color = `rgb(${r}, ${g}, ${b})`
    }

    toHTML() {
        document.body.style.backgroundColor = color
    }

}