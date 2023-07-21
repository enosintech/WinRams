const addButtonElOne = document.getElementById("plus-one");
const minusButtonElOne = document.getElementById("minus-one");
const addButtonElTwo = document.getElementById("plus-two");
const minusButtonElTwo = document.getElementById("minus-two");
const scoreOneEl = document.getElementById("scoreGeorge");
const scoreTwoEl = document.getElementById("scoreSDS");

let countOne = localStorage.getItem("countOne");
let countTwo = localStorage.getItem("countTwo");

addButtonElOne.addEventListener("click", () => {
    countOne++;
    localStorage.setItem("countOne", countOne);
    scoreOneEl.innerHTML = localStorage.getItem("countOne");
})

minusButtonElOne.addEventListener("click", () => {
    countOne--;
    localStorage.setItem("countOne", countOne);
    scoreOneEl.innerHTML = localStorage.getItem("countOne");
})

addButtonElTwo.addEventListener("click", () => {
    countTwo++;
    localStorage.setItem("countTwo", countTwo);
    scoreTwoEl.innerHTML = localStorage.getItem("countTwo");
})

minusButtonElTwo.addEventListener("click", () => {
    countTwo--;
    localStorage.setItem("countTwo", countTwo);
    scoreTwoEl.innerHTML = localStorage.getItem("countTwo");
})

scoreOneEl.innerHTML = localStorage.getItem("countOne");
scoreTwoEl.innerHTML = localStorage.getItem("countTwo");




