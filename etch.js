const container = document.querySelector(".container");
let gridSize = 16;

function makeGrid(size) {
    const totalSquares = size ** 2;
    const squareSize = 640 / size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink"; 
        });
    });
}

const reset = document.querySelector("#reset");
reset.addEventListener("click",  () => {
    container.innerHTML = "";
    gridSize = prompt("Enter the number of pixels you want for your X or Y axis:");

    gridSize = Number(gridSize);

    if (!Number.isInteger(gridSize)) {
        alert("ERROR: Input should be a whole number.");
    } else if (gridSize < 0 || gridSize > 100) {
        alert("ERROR: Number should be between 0 and 100.");
    } else {
        makeGrid(gridSize);
    }
})

makeGrid(gridSize);