
const filmList = document.getElementById("film-list")
const titleDisplay = document.getElementById("title")
const runtime = document.getElementById("runtime")
const showtime = document.getElementById("showtime")
let availableTickets = document.getElementById("ticket-num")
const filmInfo = document.getElementById("film-info")
const button = document.getElementById("buy-ticket")
let capacity = document.getElementById("capacity")

titleDisplay.innerText = "The Giant Gila Monster"
runtime.innerText = "108 minutes"
showtime.innerText = "04:00PM"
availableTickets.innerText = "3"
filmInfo.innerText = "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature."
//just including the name of the film on the left side

const grabFilms = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    console.log(res)
    // let film = res
    // res.forEach((film, i) => {
    //     let li = document.createElement("li")
    //     li.innerText = film.title
    //     console.log(li)
    //     filmList.append(li)
    // })


button.addEventListener('click', (e) => {
    e.preventDefault()
    let availbleTickets = (capacity--)
    console.log(availableTickets)
})

}
grabFilms()