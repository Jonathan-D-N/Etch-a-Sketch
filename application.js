//Create the grid
const container = document.querySelector('#container')

const grid = document.createElement('div');
grid.classList.add('grid');
//Assigns grid as the child of container
container.appendChild(grid);

//const container = document.getElementById("container");

function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16)

