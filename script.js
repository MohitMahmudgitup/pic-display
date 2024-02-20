let carousel = document.getElementsByClassName("carousel")[0]
let isDragging = false , startX , startScrollLeft

carousel.addEventListener("mousedown",(e)=>{
    isDragging = true
    carousel.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
})

carousel.addEventListener("mousemove",(e)=>{
    if(!isDragging) return
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
})

document.addEventListener("mouseup",(e)=>{
    isDragging = false
    carousel.classList.remove("dragging")
})

let  lift = document.getElementsByClassName("left")[0]
lift.addEventListener("click",(e)=>{
    // e = "hello"
    console.log(e)
})

let fristCardWidth = carousel.querySelector(".card").offsetWidth

document.querySelectorAll(".wrapper i ").forEach(btn =>{
    btn.addEventListener("click",()=>{
        carousel.scrollLeft = btn.id ==="left" ? -fristCardWidth : fristCardWidth
    })
})