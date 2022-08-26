
let board = document.querySelector('.board');
let setGridSize = document.getElementById('grid-size');
let pixels = []
let selectedColor;
let eraser = document.getElementById('eraser');
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');


const randomValue = () => {
    return Math.floor(Math.random() * 255);
}

rainbow.addEventListener('click', function() {
  selectedColor = 'rainbow';  
})

eraser.addEventListener('click', function(){
    selectedColor = 'var(--eraser)';
})

black.addEventListener('click', function(){
    selectedColor = 'var(--black)';
})

setGridSize.addEventListener('click', function(){
    let value;
    do {
        value = window.prompt('Grid Size (must be less than or equal to 100)');
    }
    while(value < 1  || value > 101);
    
    board.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    let rowsXColumns = value * value
    for(let i = 0; i <= rowsXColumns ; i++) {
    let pixel = document.createElement('div');
    board.appendChild(pixel)
    pixel.className = 'pixel';
    pixels.push(pixel);
    }
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function() {
      
          if(selectedColor === 'var(--black)') {
            pixel.style.backgroundColor = selectedColor;
          }
          else if(selectedColor === 'var(--eraser)') {
            pixel.style.backgroundColor = selectedColor;
          }
          else if(selectedColor === 'rainbow'){
            pixel.style.backgroundColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
          }
        });
      });
})

let clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'var(--eraser)';
        
    })
    
})




   


