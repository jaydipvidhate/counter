// first take three buttons and set initial value in h1

// click on increment button, increment the value
// click on decrement button, decrement the value
// click on reset button, reset the value to initial

// select initial value
let h1 = document.querySelector("h1");

// select all buttons
let incBtn = document.querySelector(".increment");
let decBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");

// select onClick button
let inputBtn = document.querySelector("input");

// select mouse movement
let movement = document.querySelector(".movement");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");

// initializing the value
let count = 10;
h1.textContent = count;

// btn handlers
function incHandler() {
  count += 1;
  h1.textContent = count;
}

// function decHandler() {
//   count -= 1;
//   h1.textContent = count;
// }
const decHandler = () => {
  count -= 1;
  h1.textContent = count;
};

// function resetHandler() {
//   count = 0;
//   h1.textContent = count;
// }
const resetHandler = () => {
  count = 0;
  h1.textContent = count;
};

function mouseMoveHandler() {
  first.innerText = event.screenX;
  second.innerText = event.screenY;
  third.innerText = event.clientX;
  fourth.innerText = event.clientY;
}

// event listeners
incBtn.addEventListener("click", incHandler);
decBtn.addEventListener("click", decHandler);
resetBtn.addEventListener("click", resetHandler);

movement.addEventListener("mousemove", mouseMoveHandler);

//input addEventListener types

//normal
// function inputHandler(event) {
//   console.log(event.target.value);
// }

// inputBtn.addEventListener("click", inputHandler);

//another
inputBtn.onclick = function (event) {
  // console.log(event.target);
  event.target.value = "jay";
  event.target.style.backgroundColor = "green";
};
