import {Module} from '@/core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        let countClicks = -1;
        alert('Как только ты нажмешь OK, у тебя будет ровно 3 секунды, чтобы показать за что ты способен!')
        document.body.addEventListener('click', (event) => {
            countClicks++
        })
        function letMessage(){
            if(countClicks > 0) {
                alert(`Количество кликов:${countClicks}`)
                localStorage.removeItem('count')
            } else {
                alert('Похоже ты ниразу не кликнул по экрану!')
            }
            countClicks = 0;
        }
        setTimeout(letMessage, 3000)
    }
}