function changeColor(event){
    const select = event.target;
    select.classList.add("black");
}
function changeSize(){
    numofsquare = prompt();
    console.log(numofsquare);
    let newsize = ((width / numofsquare) / 2) - 3; 
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    for(let k = 0; k < numofsquare; k++){
        for(let m = 0; m < numofsquare; m++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('mouseover',changeColor);
            square.style.cssText = `padding: ${Math.round(newsize)}px`;
            grid.appendChild(square);
        }
    }
    
}


const body = document.querySelector('body');
const grid = document.querySelector('.grid');
let size = 43.2;
var numofsquare = 16;
var width = size * numofsquare 
grid.style.cssText = `max-width: ${Math.ceil(width)}px`
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

