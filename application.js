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
        grid.appendChild(cell).id = "grid-item";
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
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', function(e) {
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
//remove active class, assign active class to user selection
const setActive = document.getElementById('settingsContainer');
setActive.addEventListener('click', function(e) {
    let div1 = document.querySelector('#colorBtn');
    let div2 = document.querySelector('#rainbowBtn');
    let div3 = document.querySelector('#eraserBtn');

    if (e.target.id == ('colorBtn')) {
        activeBtnSelection = 'colorBtn'
        e.target.classList.add('active');
        div2.classList.remove('active');
        div3.classList.remove('active');
    } else if (e.target.id == ('rainbowBtn')) {
        activeBtnSelection = 'rainbowBtn'
        e.target.classList.add('active');
        div1.classList.remove('active');
        div3.classList.remove('active');
    } else if (e.target.id == ('eraserBtn')) {
        activeBtnSelection = 'eraserBtn'
        e.target.classList.add('active');
        div1.classList.remove('active');
        div2.classList.remove('active');
    }
})
//select 'grid-item' on mouseover
let activeBtnSelection = 'colorBtn'
let isDrawing = false;
let enableCall = true;
let target = ''
addEventListener('mousedown', function(e) {
    target = e.target;
    isDrawing = true;
    this.setTimeout(() => enableCall = true, 100)
});
window.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        isDrawing = false;
    }
})

//Select a color for the 'colorBtn'
let colorButtonSelection = document.getElementById('colorSelector')
colorButtonSelection.addEventListener("input", function() {
    document.getElementById('colorSelector').innerHTML = colorButtonSelection.value;
})

//Randomized RGB value for the rainbow button
function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', '+ g + ', ' + b + ')';
}
for (let i = 0; i < 10; i++) {
    console.log(getRandomRgb());
  }

const draw = document.getElementById('container');
draw.addEventListener('mouseover', function(e) {
    if (!isDrawing) return;

    enableCall = false;
    if (isDrawing) {
        setTimeout(() => enableCall = true, 100)
    }
    if (e.target.classList.contains('grid-item')){
        if (activeBtnSelection == 'colorBtn') {
            e.target.style.backgroundColor = colorButtonSelection.value;
        }
        else if (activeBtnSelection == 'rainbowBtn') {
            e.target.style.backgroundColor = getRandomRgb();
        }
        else if (activeBtnSelection == 'eraserBtn') {
            e.target.style.backgroundColor = ''
        }
    }
})

