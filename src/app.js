import './styles.css'
import {ContextMenu} from "@/menu";

const contextMenu = new ContextMenu('#menu')

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.open(e)
})
// contextMenu.add(moduleName) - добавление элемента в контекстное меню
