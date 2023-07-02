import {Module} from "@/core/module"

export class PaintingModule extends Module{
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        alert('Закрой это сообщение и начинай рисовать. Если устал рисовать, просто нажми Escape')
        const canvas = document.createElement('canvas')
        canvas.style.position = 'fixed'
        canvas.style.top = '0'
        canvas.style.left = '0'
        canvas.width = screen.width
        canvas.height = screen.height
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')
        ctx.lineWidth = 2
        let isMouseDown = false
        canvas.addEventListener('mousedown', () => {
            isMouseDown = true
        })
        canvas.addEventListener('mouseup', () => {
            isMouseDown = false
            ctx.beginPath()
        })
        canvas.addEventListener('mousemove', (e) => {
            if (isMouseDown){
                ctx.lineTo(e.clientX, e.clientY)
                ctx.stroke()
                ctx.beginPath()
                ctx.arc(e.clientX, e.clientY, 1, 0, Math.PI * 2)
                ctx.fill()
                ctx.beginPath()
                ctx.moveTo(e.clientX, e.clientY)
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape'){
                canvas.remove()
            }
        })
    }
}