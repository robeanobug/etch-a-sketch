const container = document.querySelector(".container");
let gridSize = 100;

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

makeGrid(gridSize);