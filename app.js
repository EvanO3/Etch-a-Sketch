//making the row
const container = document.getElementById('container');
let rows = document.getElementsByClassName("Rows");
let cells = document.getElementsByClassName("columns");

const makeRow =(rowAmount)=>{
    for(let i=0; i<rowAmount; i++){
        let row = document.createElement("div");
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
 

const makeGrid = ()=>{
    makeRow(16);
    makeColumn(16);
}

