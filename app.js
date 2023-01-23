let color = "black";
let click = true;
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
    sq.style.backgroundColor ='white';
    brd.insertAdjacentElement('beforeend', sq);
   }
}

createBoard(16);

function changeBrdSize(input){
    if(input >=2 && input<=100){
        createBoard(input)
    }
    else{
       prompt('Error.. To many Squares')
    }
}


function colourSq(){
  if(click){

    if(color ==='random'){
    this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
   }
   else{
    this.style.backgroundColor=color;
   }
}

}

 function changeColor(choice){
    color = choice;
 }



 document.querySelector('body').addEventListener('click', ()=>{
    click = !click;
    if(click){
        document.querySelector('.mode').textContent= 'Mode: Colouring'
    }
    else{
        document.querySelector('.mode').textContent ="Mode: Not Colouring"
    }
 })
 

 let reset = document.querySelector('.reset');
 reset.addEventListener('click', ()=>{
       let brd = document.querySelector('.board');
       let sq = brd.querySelectorAll("div");
       sq.forEach((div) =>(div.style.backgroundColor="white"));
 })


 

