function changeColor(event){
    const select = event.target;
    select.classList.add("black");
}
function changeSize(){
    numofsquare = prompt();
    console.log(numofsquare);
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    for(let k = 0; k < numofsquare; k++){
        for(let m = 0; m < numofsquare; m++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('mouseover',changeColor);
            grid.appendChild(square);
        }
    }
    
}


const body = document.querySelector('body');
const grid = document.querySelector('.grid');
let size = 18;
var numofsquare = 16;
grid.style.cssText = `max-width: ${size * numofsquare}px`
const button = document.querySelector('button')
button.addEventListener('click', changeSize);
for(let i = 0; i < numofsquare; i++){
    for(let j = 0; j < numofsquare; j++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover',changeColor);
        grid.appendChild(square);
    }
    
    //grid.appendChild(linebreak);
    //square.textContent = `${i}`;
}

