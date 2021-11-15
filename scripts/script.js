let gridBlock = document.querySelector(".grid-block");
let heightGrid = 16;
let widthGrid = 16;
let newGridBtn = document.querySelector(".new-grid-btn");
let allBoxes = document.querySelectorAll(".grid-box");

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
  grid.style.border = "2px solid black";
  grid.style.paddingTop = `${16 / heightGrid}rem`;
  grid.style.paddingBottom = `${16 / heightGrid}rem`;
  grid.style.paddingLeft = `${16 / widthGrid}rem`;
  grid.style.paddingRight = `${16 / widthGrid}rem`;
  return grid;
}

// based on the height and width specified, creates a grid and appends it to the gridBlock container
function createGrid(heightGrid, widthGrid) {
  for (let i = 0; i < heightGrid; i++) {
    let row = createRow();
    for (let j = 0; j < widthGrid; j++) {
      row.appendChild(createGridbox());
    }
    gridBlock.appendChild(row);
  }
}

//refreshes the allBoxes variable so that it includes all new created grid boxes
function refreshBoxes() {
  allBoxes = document.querySelectorAll(".grid-box");
}

//resets the current grid, (1) removes the color, and if user specifies different dimensions, grid will be reformed
function resetAll() {
  allBoxes.forEach((box) => {
    box.classList.remove("colored");
  });
  let inputHeight = parseInt(
    prompt("Enter a number to determine the number of squares for height:")
  );
  let inputWidth = parseInt(
    prompt("Enter a number to determine the number of squares for width:")
  );
  if (inputHeight !== heightGrid && inputWidth !== widthGrid) {
    gridBlock.textContent = "";
    heightGrid = inputHeight;
    widthGrid = inputWidth;
    createGrid(heightGrid, widthGrid);
    activateColor();
  }
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
      e.target.style.background = getRandomColor();
    });
  });
}

newGridBtn.addEventListener("click", () => {
  resetAll();
  refreshBoxes();
});

createGrid(heightGrid, widthGrid);
activateColor();
