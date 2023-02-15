const sliders = document.getElementById("sliders");
const empanadas = document.getElementById("empanadas");
const cordero = document.getElementById("cordero");
const prawns = document.getElementById("prawns");

const amountSliders = document.getElementById("slidersAmount");
const amountEmpanadas = document.getElementById("empanadasAmount");
const amountCordero = document.getElementById("corderoAmount");
const amountPrawns = document.getElementById("prawnsAmount");

const packSliders = document.getElementById("packSliders");
const packEmpanadas = document.getElementById("packEmpanadas");
const packCordero = document.getElementById("packCordero");
const packPrawns = document.getElementById("packPrawns");

function addselected(food) {
  let targetAmount;
  console.log(food);
  if (food == "sliders") {
    targetAmount = amountSliders;
  }
  if (food == "empanadas") {
    targetAmount = amountEmpanadas;
  }
  if (food == "cordero") {
    targetAmount = amountCordero;
  }
  if (food == "prawns") {
    targetAmount = amountPrawns;
  }

  targetAmount.innerHTML = `${Number(targetAmount.innerHTML) + 1}`;

  if (amountSliders.innerHTML >= 4) {
    packSliders.innerHTML = `Pack of sliders`;
  }
  if (amountEmpanadas.innerHTML >= 4) {
    packEmpanadas.innerHTML = `Pack of Empanadas`;
  }
  if (amountCordero.innerHTML >= 4) {
    packCordero.innerHTML = `Pack of Cordero`;
  }
  if (amountPrawns.innerHTML >= 4) {
    packPrawns.innerHTML = `Pack of Prawns`;
  }

  console.log(targetAmount.innerHTML);
}

sliders.addEventListener("click", function () {
  addselected("sliders");
});
empanadas.addEventListener("click", function () {
  addselected("empanadas");
});
cordero.addEventListener("click", function () {
  addselected("cordero");
});
prawns.addEventListener("click", function () {
  addselected("prawns");
});

const myButton = document.querySelector("button");

myButton.addEventListener("mouseenter", function () {
  myButton.classList.add("hover");
});

myButton.addEventListener("mouseleave", function () {
  myButton.classList.remove("hover");
});
