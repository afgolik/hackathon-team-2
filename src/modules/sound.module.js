import {Module} from "@/core/module"

export class SoundModule extends Module{
    constructor(type, text) {
        super(type, text);
        this.sounds = ['./sounds/1.mp3']

    }
    trigger() {

    }
}