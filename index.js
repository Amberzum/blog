let timeElement = document.getElementById("currentTime")
let d = new Date()

console.log(d.getHours())

let hours = d.getHours()
let minutes = d.getMinutes()
let seconds = d.getSeconds()

let time = hours + ":" + minutes +  ":" + seconds

timeElement.innerText = time