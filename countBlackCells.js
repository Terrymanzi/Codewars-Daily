/*
Task
----
6KYU

Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line,
running from the upper left to the lower right corner. 
Now let's paint the grid in two colors according to the following rules:
A cell is painted black if it has at least one point in common with the diagonal;
Otherwise, a cell is painted white.

*/
///////////////////////////////////////////////////////////
////////////////////     SOLUTION     /////////////////////

let rowCells = [];
let columnCells = [];

//matrix array
let blackCellsCount = [ rowCells,columnCells ];

//count of black cells = number of cells with indices that are equal on row and column arrays.
function countBlackCells(n, m) {
    //filling rowCells using loop
    for(let i=0; i<n; i++){
          rowCells.push(i);
    }
    console.log(rowCells);
  
    //filling columnCells using loop
    for(let j=0; j<m; j++){
          columnCells.push(j);
    }
    console.log(columnCells);
//////////////////////////////////////////////////////////

    //checking indices matched in both row and column arrays
    for(let rows in rowCells){
        for(let cols in columnCells){
            if(cols === rows){
                blackCellsCount.push(cols);
            }
            blackCellsCount.push(rows);
        }
    }
    let solution = [...rowCells,...columnCells];
    return solution.length;
}

// console.log(`Black cells equals: ${solution.length}`);
console.log(countBlackCells(2,5));



///formula
/*

y-row
x-col
y-(m/n)x

*/
