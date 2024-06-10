let scrollContainer = document.querySelector(".galeria")

let backBtn = document.getElementById("backBtn")

let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt)=> {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltay;
})

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})