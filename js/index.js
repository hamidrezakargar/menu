new Splide('.splide', {
    type: 'slide',
    perPage: 4,
    arrows: boolean = false,
    drag: 'free',
    pagination: false,
    direction: "rtl",
}).mount();

let list = document.querySelectorAll(".list li img");
let box = document.querySelectorAll(".box");

list.forEach((el) => {
    el.addEventListener("click", (e) => {
        box.forEach((el2) => {
            el2.style.display = "none";
        })
        console.log(e.target.dataset.color);
        document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
            console.log("bug");
            el3.style.display = "flex";
        })
    })
})
