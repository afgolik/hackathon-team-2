import {Module} from '@/core/module'

export class TimerModule extends Module {

    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const divTimer = document.createElement('div')
        const pTimer = document.createElement('p')
        pTimer.style.cursor = 'pointer'
        pTimer.style.display = 'inline-block'
        pTimer.id = 'timer'
        divTimer.append(pTimer)
        document.body.append(divTimer)
        pTimer.addEventListener('click', () => {
            divTimer.remove()
        })

        const promptTime = prompt('Задайте время до 1 часа в формате 00:00 мин:сек')
        const separator = /([\:\-\.\,\/])/
        const timeArr = promptTime.split(separator)
        let time = Number(timeArr[0]) * 60 + Number(timeArr[2])

        if (!time) {
            alert('Введите время!')
        } else if (time >= 3600) {
            alert('Введённое время должно быть менее 1 часа!')
        } else {
            startTimer()
        }

        function startTimer() { 
            setInterval(decreaseTime, 1000)
            decreaseTime()
        }

        function decreaseTime() {
          if (time === 0) {
              overTime()
          } else {
              let current = time--
              let minutes = Math.floor(current / 60)
              let seconds = current % 60
              if (minutes < 10) {minutes = `0${minutes}`}
              if (seconds < 10) {seconds = `0${seconds}`}
              pTimer.textContent = `${minutes}:${seconds}`
          }
        }

        function overTime() {
            pTimer.textContent = 'Всем пока!'
            setTimeout(function() {divTimer.remove()}, 2000)
        }
    }
}