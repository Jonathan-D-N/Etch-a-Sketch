
//Create the gridContainer on page load
const container = document.querySelector('#container')

const grid = document.createElement('div');
grid.classList.add('gridContainer');
container.appendChild(grid);

function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
    };
}; makeRows(16, 16);

//Remove the grid
function removeElementByClass(className) {
    const element = document.getElementsByClassName('grid-item');
    while (element.length > 0) {
        element[0].parentNode.removeChild(element[0]);
    }
}
//Clear button
const btn = document.querySelector('#clearBtn');
btn.addEventListener('click', function(e) {
    removeElementByClass('grid-item');
    makeRows(sliderValue, sliderValue)
})
// Range Slider
let slider = document.getElementById("gridRange");
let output = document.getElementById("sliderOutput");
let sliderValue = (16);
output.innerHTML = slider.value + ' x ' + slider.value;

slider.onchange = function () {
    output.innerHTML = this.value + ' x ' + this.value;
    sliderValue = this.value;
    removeElementByClass('grid-item')
    return(makeRows(this.value, this.value))
} 

slider.oninput = function () {
    output.innerHTML = this.value + ' x ' + this.value;
    sliderValue = this.value;
}
//track mousedown, mousemove, and mouseup to enable/disable drawing.
let isDrawing = false;
let enableCall = true;
let target = ''
addEventListener('mousedown', (e) => {
    target = e.target;
    isDrawing = true;
    setTimeout(() => enableCall = true, 100)
});

addEventListener('mousemove', (e) => {
    if(!enableCall) return;

    enableCall = false;  
    if (isDrawing) {
        console.log(target)
        setTimeout(() => enableCall = true, 100)
    }
})

window.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        isDrawing = false;
    }
})

document.body.addEventListener('mousemove', throttle(target, 300));

function throttle(callback, interval) {
    let enableCall = true;

    return function (...args) {
        if (!enableCall) return;

        enableCall = false;
        if (isDrawing) {
            target = e.target;
            console.log(target)
        callback.apply(this, args);
        setTimeout(() => enableCall = true, interval);
        }}
}



