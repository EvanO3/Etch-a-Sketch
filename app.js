// randomized color Array
const colour =['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

//making the row
const container = document.getElementById('container');
let rows = document.getElementsByClassName("Rows");
let cells = document.getElementsByClassName("columns");

console.log(rows);
console.log(container);

const makeRow =(rowAmount)=>{
    for(let i=0; i<rowAmount; i++){
        let row = document.createElement("div");
        //adds action listener to rows
        row.addEventListener('mouseover', ()=>{
              setColorToElement(row);
        })
        row.addEventListener('mouseout', ()=>{
            setColorFromElement(row);
      })
       container.appendChild(row).className="Rows";
    }
}
// making the column 

const makeColumn =(columnAmount)=>{
    for(let i=0; i<rows.length; i++){
        for(let j=0; j<columnAmount; j++){
           
            let column = document.createElement("div");
            rows[j].appendChild(column).className = "columns";
          }
        }

    }


    // adds the hover
  
//makes method to add colors 
function setColorToEl(element){

}

    //Randomize colour
    
 
    //creating a method to create the grids

const makeGrid = ()=>{
    makeRow(8);
    makeColumn(8);
}

makeGrid();
