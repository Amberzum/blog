let timeElement = document.getElementById("currentTime");

setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let time = hours + ":" + minutes + ":" + seconds;
  timeElement.innerText = time;
}, 1000);
