import './styles.css'
import {ContextMenu} from "@/menu";
import { BackgroundModule } from './modules/background.module';

const contextMenu = new ContextMenu('#menu')

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.open(e)
    contextMenu.add(BackgroundModule)
})
// contextMenu.add(moduleName) - добавление элемента в контекстное меню
