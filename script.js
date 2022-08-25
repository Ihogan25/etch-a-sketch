let board = document.querySelector('.board');
let add = document.getElementById('add');

add.addEventListener('click', function(){
    let value = window.prompt('How Many Pixels Do you Want?');
    for(let i = 0; i <= value ; i++) {
    let pixel = document.createElement('div');
    board.appendChild(pixel)
    pixel.className = 'pixel';
    console.log(pixel, value);
    }
})

   


