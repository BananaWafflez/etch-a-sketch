const body = document.querySelector('body');
const grid = document.querySelector('.grid');
let size = 17.3;
let numofsquare = 100;
grid.style.cssText = `max-width: ${size * numofsquare}px`
for(let i = 0; i < numofsquare; i++){
    for(let j = 0; j < numofsquare; j++){
        const square = document.createElement('div');
        square.classList.add("square");
        grid.appendChild(square);
    }
    const linebreak = document.createElement('br');
    //grid.appendChild(linebreak);
    //square.textContent = `${i}`;
}