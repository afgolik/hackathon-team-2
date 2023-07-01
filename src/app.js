import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from './modules/background.module';

const contextMenu = new ContextMenu('#menu')
const backgroundColor = new BackgroundModule('backgroundColor', 'Случайный фон')

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.open(e)
})
// contextMenu.add(moduleName) - добавление элемента в контекстное меню
contextMenu.add(backgroundColor)