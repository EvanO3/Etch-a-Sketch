function createBoard(size){
   let brd = document.querySelector('.board');
   let sq = brd.querySelector("div");
   //sq.forEach((div) => div.remove());
   brd.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
   brd.style.gridTemplateRows =`repeat(${size}, 1fr)`;
 
   let total = size*size;
   for(let i=0; i<total; i++){
    let sq = document.createElement('div');
    sq.addEventListener('mouseover', colourSq);
    sq.style.backgroundColor ='pink';
    brd.insertAdjacentElement('beforeend', sq);
   }
}

createBoard(16);

function changeSize(input){
    if(input>=2 && input<=100){
        createBoard(input)
    }
    else{
        console.log('Error.. To many Squares')
    }
}


function colourSq(){
    this.style.backgroundColor='red';
}