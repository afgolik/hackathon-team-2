import {Module} from '@/core/module'

export class CatImage extends Module {
    constructor(type, text) {
        super(type, text)
    }

    async trigger (){
        const divWithImg = document.querySelector('#divLogo')
        if (divWithImg){
            divWithImg.remove()
        }
        
    let catRandomUrl = 'https://cataas.com'

    const img = document.createElement('img')
    img.src = catRandomUrl
    const divImg = document.createElement('div')
    divImg.style.textAlign = 'center'
    divImg.id = 'divLogo'
    divImg.classList.add('logo-cat')
    img.style.width = '250px'
    divImg.append(img)
    document.body.append(divImg)
    
    async function getCat() {
        try {
          const response = await fetch(`${catRandomUrl}/cat?json=true`)
          const responseJson = await response.json()
          return catRandomUrl + responseJson.url
        } catch (error) {
          console.error("Ошибка!", error)
        } 
    }

    img.src = await getCat()
    setTimeout(function(){divImg.remove()},5000)
}
}