function makeDiagonalRed(table) {
 for(let i = 0; i < table.rows.length; i++) {
 	let tableRed = table.rows[i];
 	tableRed.cells[i].style.backgroundColor = 'red';
 }
}

/*New Example*/
/*
function makeDiagonalRed(table) {
  // ваш код...
  let rowsLength = table.rows.length;
  let rows = table.rows;

  for (let i = 0; i < rowsLength; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
*/


