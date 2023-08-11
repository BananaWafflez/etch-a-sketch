const body = document.querySelector('body');

const grid = document.querySelector('.grid');
for(let i = 0; i < 256; i++){
    const square = document.createElement('div');
    square.classList.add("square");
    grid.appendChild(square);
    square.textContent = `${i}`;
}