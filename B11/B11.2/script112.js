let bodyEle = document.querySelector("body")

// function randomInteger(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
// bodyEle.style.backgroundColor = 'rgb(' + A + ',' + B + ',' + C + ')'

function changeColor() {
    let color1 = Math.floor(Math.random() * 256) + 0
    let color2 = Math.floor(Math.random() * 256) + 0
    let color3 = Math.floor(Math.random() * 256) + 0
    bodyEle.style.backgroundColor = "rgb("+color1+", "+color2+", "+color3+")"
}






