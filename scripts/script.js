let gridBlock = document.querySelector(".grid-block");
let gridSize = 16;
let rainbowMode = false;
let newGridBtn = document.querySelector(".new-grid-btn");
let allBoxes = document.querySelectorAll(".grid-box");
let rainbowBtn = document.querySelector(".rainbow-mode");
let bwBtn = document.querySelector(".b-w");
let sizeSlider = document.querySelector("#size-slider");
let sliderLabel = document.querySelector(".slider");

//creates a row which will contain the grid boxes
function createRow() {
  let row = document.createElement("div");
  row.classList.add("row");
  row.style.display = "flex";
  return row;
}

//creates a individual grid box
function createGridbox() {
  let grid = document.createElement("div");
  grid.classList.add("grid-box");
  grid.style.padding = `${16 / gridSize}rem`;
  return grid;
}

// based on the height and width specified, creates a grid and appends it to the gridBlock container
function createGrid(size) {
  for (let i = 0; i < gridSize; i++) {
    let row = createRow();
    for (let j = 0; j < gridSize; j++) {
      row.appendChild(createGridbox());
    }
    gridBlock.appendChild(row);
  }
  activateColor();
}

//refreshes the allBoxes variable so that it includes all new created grid boxes
function refreshBoxes() {
  allBoxes = document.querySelectorAll(".grid-box");
}

//resets the current grid, (1) removes the color, and if user specifies different dimensions, grid will be reformed
function resetAll() {
  allBoxes.forEach((box) => {
    box.style.background = "white";
  });
}

//generate a random color
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

//initiates the color hover-over effect over all boxes. Called to get newly created boxes as well.
function activateColor() {
  refreshBoxes();
  allBoxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      if (rainbowMode) {
        e.target.style.background = getRandomColor();
      } else {
        e.target.style.background = "black";
      }
    });
  });
}

//button to initiate rainbow mode
rainbowBtn.addEventListener("click", () => {
  rainbowMode = true;
});

//button for black/white mode
bwBtn.addEventListener("click", () => {
  rainbowMode = false;
});

//slider to customize size
sizeSlider.addEventListener("change", (e) => {
  sliderLabel.textContent = `${e.target.value}x${e.target.value}`;
  gridSize = e.target.value;
  gridBlock.textContent = "";
  createGrid(gridSize);
});

//reset button
newGridBtn.addEventListener("click", () => {
  resetAll();
  refreshBoxes();
});

createGrid(gridSize);
