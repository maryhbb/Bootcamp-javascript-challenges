import { getRandomColor } from "./utils/randomColor.js";
console.clear();

const root = document.getElementById("root");

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
const circle = Circle();

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}
const square = Square();

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
const pentagon = Pentagon();

root.append(circle, square, pentagon);
