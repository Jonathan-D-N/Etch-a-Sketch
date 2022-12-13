//Create the gridContainer on page load
const container = document.querySelector('#container')
const grid = document.createElement('div');
grid.classList.add('gridContainer');
container.appendChild(grid);

function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).id = "grid-item";
        grid.appendChild(cell).className = "grid-item";
    };
}; createGrid(16, 16);

//for removing and replacing the grid
function replaceGrid() {
    const element = document.getElementsByClassName('grid-item');
    while (element.length > 0) {
        element[0].parentNode.removeChild(element[0]);
    } createGrid(sliderValue, sliderValue)
}
//Clear button
const clearButton = document.querySelector('#clearBtn');
clearButton.addEventListener('click', function(e) {
    replaceGrid();
})

//Resize grid with sliderValue
let sliderValue = 16;
let slider = document.getElementById("rangeSlider");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value + ' x ' + slider.value;
slider.onchange = function () {
    output.innerHTML = this.value + ' x ' + this.value;
    replaceGrid()
} 

slider.oninput = function () {
    output.innerHTML = this.value + ' x ' + this.value;
    sliderValue = this.value;
}

//Select button mode (color, random color, eraser)
let activeButtonSelection = '#000000';
const setActiveButton = document.getElementById('settingsContainer');
setActiveButton.addEventListener('click', function(e) {
  const buttons = document.querySelectorAll('#colorBtn, #randomBtn, #eraserBtn');
  for (let button of buttons) {
    if (button.id === e.target.id) {
      e.target.classList.add('active');
      if (e.target.id == 'colorBtn') {
        activeButtonSelection = colorButtonSelection.value
      } else if (e.target.id == 'randomBtn') {
            activeButtonSelection = 'randomRgb';
      } else if (e.target.id == 'eraserBtn') {
        activeButtonSelection = ''
      } else if (e.target.id == 'clearBtn') {

        return;
      }
    } else{
    button.classList.remove('active');
  }
  }});

//Select a color for the 'colorBtn'
const colorButtonSelection = document.getElementById('colorSelector');
colorButtonSelection.addEventListener("input", function() {
activeButtonSelection = colorButtonSelection.value;
document.querySelector('#colorBtn').classList.add('active');

});
//Randomized RGB value for the random button
function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', '+ g + ', ' + b + ')';
}

//Enable/disable drawing with mousedown/up
let isDrawing = false;
container.addEventListener('mousedown', function(e) {
    isDrawing = true;
    window.addEventListener('mouseover', draw, false);  
});

window.addEventListener('mouseup', function() {
        isDrawing = false;
        window.removeEventListener('mouseover', draw, false);
});
//draw on mouseover
function draw (e) {
    if(e.target.classList.contains('grid-item')) {
        if(activeButtonSelection == 'randomRgb'){
            e.target.style.backgroundColor = getRandomRgb();
        } else {
        e.target.style.backgroundColor = activeButtonSelection;
        }
    }
}

//draw on mousedown
window.addEventListener('mousedown', clickdraw, false);
function clickdraw (e) {
    isDrawing = true;
    draw(e)
    isDrawing = false;
}