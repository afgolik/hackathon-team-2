import './styles.css'
import {ContextMenu} from "@/menu"
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {CursorModule} from "@/modules/cursor.module"
import {TimerModule} from './modules/timer.module'

const contextMenu = new ContextMenu('#menu')
document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.open(e)
})

const modules = {}
const menu = document.querySelector('#menu')
menu.addEventListener('click', (e) => {
    modules[e.target.dataset.type].trigger()
    contextMenu.close()
})
function createModule(moduleClass, type, text, ...params){
    const module = new moduleClass(type, text, ...params)
    modules[type] = module
    contextMenu.add(module)
}

createModule(BackgroundModule, 'backgroundColor', 'Случайный фон')
createModule(ClicksModule, 'clicksModule', 'Аналитика кликов')
createModule(CursorModule, 'cursorModule', 'Сменить курсор', ['help', 'pointer', 'progress', 'wait', 'cell', 'no-drop', 'grab'])
createModule(CursorModule, 'defaultCursorModule', 'Вернуть курсор', ['default'])
createModule(TimerModule, 'timerModule', 'Таймер')