import {Module} from "@/core/module"
import {random} from "@/utils";

export class CursorModule extends Module{
    constructor(type, text) {
        super(type, text);
        this.cursors = ['help', 'pointer', 'progress', 'wait', 'cell', 'no-drop', 'grab']
    }
    trigger() {
        document.body.style.cursor = this.cursors[random(0, this.cursors.length - 1)]
    }
}