//Create the grid
const container = document.querySelector('#container')

const content = document.createElement('div');
content.classList.add('content');
//Assigns content as the child of container
container.appendChild(content);

//const container = document.getElementById("container");

function makeRows(rows, cols) {
    content.style.setProperty('--grid-rows', rows);
    content.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        content.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16)

