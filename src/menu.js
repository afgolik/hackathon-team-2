import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }
    open(e) {
        this.el.classList.add('open')
        const windowWidth = window.innerWidth
        const menuWidth = 150
        this.el.style.top = e.clientY + 'px'
        if (windowWidth <= e.clientX + menuWidth){
            this.el.style.left = e.clientX - menuWidth + 'px'
        } else {
            this.el.style.left = e.clientX + 'px'
        }
    }
    close() {
        this.el.classList.remove('open')
    }
    add(module) {
        this.el.insertAdjacentHTML('beforeend', module.toHTML())
    }
}