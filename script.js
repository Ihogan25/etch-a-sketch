const gridSize = document.getElementById('grid-size');
const eraserBtn = document.getElementById('color-eraser')
const blackBtn = document.getElementById('color-black')
const clearGridBtn = document.getElementById('clear-grid')
const grid = document.getElementById('grid')
const pixels = document.querySelectorAll('.pixel')


let selectedColor = 'black';

eraserBtn.addEventListener('click', ()=> {
    selectedColor = 'white'; 
})

blackBtn.addEventListener('click', ()=> {
    selectedColor = 'black';
})

const clearGrid = () => {
    grid.style.removeProperty('grid-template-rows')
    grid.style.removeProperty('grid-template-columns')
    grid.innerHTML = '';
}





clearGridBtn.addEventListener('click', clearGrid);


gridSize.addEventListener('click', ()=> {
    let size = 0;
    while(size < 5 || size > 100) {
        size = window.prompt('Grid size?')
    }
    clearGrid();
    grid.style.gridTemplateRows = `repeat(${size}, auto)`;
    grid.style.gridTemplateColumns = `repeat(${size}, auto)`;

    let temp = 0;
    while (temp < size * size) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel'
        grid.appendChild(pixel);
        temp++
    }

    let pxls = document.querySelectorAll('.pixel')
    let pixels = Array.from(pxls)

    pixels.forEach( pixel => {
        pixel.addEventListener('mouseover', ()=> {
            pixel.style.backgroundColor = selectedColor;
        })
    })
    
    
})


let randomNum = () => {
    return  Math.floor(Math.random() * 255)
}