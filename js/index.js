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
});






const search = document.getElementById("search");
const productName = document.querySelectorAll(".badge");
const noResult = document.querySelector(".no-result");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();

  productName.forEach((product) => {
    const item = product.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.parentElement.parentElement.style.display = "block";
      noResult.style.display = "none";
    } else {
      product.parentElement.parentElement.parentElement.parentElement.style.display = "none";
      noResult.style.display = "block";
    }
  });
};
