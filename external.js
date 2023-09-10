const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const apply = document.querySelector("button");
let squareSize = 8;
//const button = document.querySelector('button')
//button.addEventListener('click', changeSize);
var output = document.getElementById("value");
output.innerHTML = slider.value + " x " + slider.value;
slider.oninput = function(){
    output.innerHTML = this.value + " x " + slider.value;
}

apply.addEventListener("click", getNewGrid);
createGrid(squareSize);


function getNewGrid(){
    let newgrid = slider.value;
    reset();
    createGrid(newgrid);

}

function changeColor(event){
    const select = event.target;
    select.classList.add("black");
}
function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    
}
function createGrid(size){
    
    
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let boxsize = grid.clientWidth / size;
            const box = document.createElement('div');
            box.classList.add('square')
            box.addEventListener('mouseover',changeColor);
            box.style.width = `${boxsize}px`;
            box.style.height = `${boxsize}px`;
            grid.appendChild(box);
        }
    }
    
}



