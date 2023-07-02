import {Module} from '../core/module'

export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
            const randomText = ["Привет","Poka","Ola","GoodBye","Kak Dela?","How are U?"]
            document.body.addEventListener("click" , (event) => {
              let text = randomText[Math.floor(Math.random()*randomText.length)];
                function getRandomIntLeft(max) {
                  return Math.floor(Math.random() * max);
                };
                let marginLeft = getRandomIntLeft(900);
                function getRandomIntBottom(max) {
                  return Math.floor(Math.random() * max);
                };
                let marginBottom = getRandomIntBottom(50);
                function getRandomIntTop(max) {
                  return Math.floor(Math.random() * max);
                };
                let marginTop = getRandomIntTop(500);
                
            const div = document.createElement(`div`);
              div.classList.add(`custom-text`);
              div.style.display = "inline-block";
              div.style.border = "solid grey 2px";
              div.style.textAlign = "center";
              div.style.position = "absolute";
              div.style.borderRadius = "5px";
              div.style.marginBottom = `${marginBottom}px`;
              div.style.marginLeft = `${marginLeft}px`;
              div.style.marginTop = `${marginTop}px`;
              div.textContent = text;
            document.body.append(div);
            setTimeout(function(){div.remove()},2000);
        })
        };
};