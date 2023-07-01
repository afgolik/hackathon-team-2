import './styles.css'
import {ContextMenu} from "@/menu"
import {BackgroundModule} from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import {SoundModule} from "@/modules/sound.module";

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
function createModule(moduleClass, type, text){
    const module = new moduleClass(type, text)
    modules[type] = module
    contextMenu.add(module)
}

createModule(BackgroundModule, 'backgroundColor', 'Случайный фон')
createModule(ClicksModule, 'clicksModule', 'Аналитика кликов')
createModule(SoundModule, 'soundModule', 'Случайный звук')