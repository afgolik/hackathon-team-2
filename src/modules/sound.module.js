import {Module} from "@/core/module"
import {random} from "@/utils";

export class SoundModule extends Module{
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        const sound = new Audio(`./src/sounds/${random(1, 20)}.mp3`)
        sound.play()
    }
}