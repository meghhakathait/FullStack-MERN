let box = document.querySelector(".box")


// let date = new Date()
// box.textContent = date.getHours + ":" +date.getMinutes +":" date.getSeconds


// function updateTime(){
//  box.textContent =` ${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()}`
// }
// setTimeout(updateTime,1000)


function updateTime() {
    let date = new Date()
    let hours =  date.getHours()
    let minutes =  date.getMinutes()
    let seconds =  date.getSeconds()

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    box.textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(updateTime, 1000)