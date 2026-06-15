const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");

const GRID_SIZE = 960;

function setupGridButton() {
  const button = document.querySelector(".prompt-button");
  button.addEventListener("click", () => {
    const selection = Number(
      prompt(
        "How many grids you want to create in terms of columns and rows:",
        16,
      ),
    );
    if (isNaN(selection)) {
      alert("Please enter a number!");
      return;
    }
    if (selection > 100 || selection <= 0) {
      alert("Please enter a number between 1 and 100");
      return;
    }
    generateGrid(selection);
  });
}

function generateGrid(selection) {
  container.textContent = "";
  container.style.gridTemplateColumns = `repeat(${selection}, ${GRID_SIZE / selection}px)`;
  container.style.gridTemplateRows = `repeat(${selection}, ${GRID_SIZE / selection}px)`;

  for (let i = 0; i < selection; i++) {
    for (let j = 0; j < selection; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      container.appendChild(div);
    }
  }
}

function createButton() {
  const button = document.createElement("button");
  button.classList.add("prompt-button");
  button.textContent = "Create Grid";
  body.appendChild(button);
}

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

function getRandomColor() {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function mouseOver() {
  container.addEventListener(
    "mouseover",
    (event) => (event.target.style.backgroundColor = getRandomColor()),
  );
}

createButton();
setupGridButton();
mouseOver();
body.appendChild(container);
