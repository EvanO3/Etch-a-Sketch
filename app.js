function createBaord(size){
   
 
    let board = document.querySelector('.board');
 
// This creates the  columns of the board and makes the columns have 1 16th of the width
board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
// This creates the rows of the board and makes the rows have 1 16th of the width
board.style.gridTemplateRows = `repeat(${size} ,1fr)`;


let total = size*size;
for(let i =0; i<total; i++){
       let box = document.createElement('div');
       box.style.backgroundColor ="blue";
       board.insertAdjacentElement("beforeend",box);
}
}



// this function lets you change the size of the baord element

function changeSize (inputSize){
    createBoard(inputSize);
}

createBaord(16);