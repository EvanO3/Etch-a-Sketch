function createBaord(size){
    let board = document.querySelector('.board');
// This creates the  columns of the board and makes the columns have 1 16th of the width
board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
// This creates the rows of the board and makes the rows have 1 16th of the width
board.style.gridTemplateRows = `repeat(${size} ,1fr)`;


for(let i =0; i<256; i++){
       let box = document.createElement('div');
       box.style.backgroundColor ="blue";
       board.insertAdjacentElement("beforeend",box);
}
}
createBaord(16);


// c