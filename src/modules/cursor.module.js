import {Module} from "@/core/module"
import {random} from "@/utils";

export class CursorModule extends Module{
    constructor(type, text, cursors) {
        super(type, text);
        this.cursors = cursors
    }
    trigger() {
        document.body.style.cursor = this.cursors[random(0, this.cursors.length - 1)]
    }
}