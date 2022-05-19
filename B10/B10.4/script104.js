let Day = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thursday",
    "Fri",
    "Sat",
    
]

const timesEle = document.querySelectorAll (".times")
console.log (typeof timesEle)

setInterval ( () => {
    const date = new Date ();
    timesEle[0].innerText = Day[date.getDay ()];
    timesEle[1].innerText = date.getHours ();
    timesEle[2].innerText = date.getMinutes ();
    timesEle[3].innerText = date.getSeconds ();
},1000
)